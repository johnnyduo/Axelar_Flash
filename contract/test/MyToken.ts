import { Network, createNetwork, deployContract, relay } from "@axelar-network/axelar-local-dev";
import { expect } from "chai";
import { Wallet, Contract, utils, ContractTransaction } from "ethers-v5";
import { artifacts, ethers } from "hardhat";
import { bootstrapNetworks } from "./axelar";
import { AxelarFlashPool, AxelarFlashPoolFactory } from "../typechain-types";
import { flashRelay } from "./relayer";

const defaultAbiCoder = ethers.AbiCoder.defaultAbiCoder()

// Event Hash
// Message only: 0xa0f27aeb034e4f9babfa62f6060c3817dbcf3f19727d8a82f74a718bb747baa5
// Message with token: 0xef03770873c38cd000bf363b8edcd8ef5a621aa58e2d8849784edd9b72c8a997

describe("Test ERC20 token bridge", function () {
  let eth: Network, avalanche: Network;
  let ethUserWallet: Wallet, avalancheUserWallet: Wallet;
  let ethRootUserWallet: Wallet, avalancheRootUserWallet: Wallet;
  let usdcEthContract: Contract, usdcAvalancheContract: Contract;
  let ethContract: Contract, avalancheContract: Contract;

  let ethFlashPoolFactory: Contract, ethFlashService: Contract;
  let avaxFlashPoolFactory: Contract, avaxFlashService: Contract;

  let ethFlashPool: Contract, avaxFlashPool: Contract;

  before(async () => {
    // Bootstraping networks
    const bootstrap = await bootstrapNetworks(1)

    eth = bootstrap.eth;
    avalanche = bootstrap.avalanche;

    ethUserWallet = bootstrap.ethUserWallet;
    avalancheUserWallet = bootstrap.avalancheUserWallet;
    ethRootUserWallet = bootstrap.ethRootUserWallet;
    avalancheRootUserWallet = bootstrap.avalancheRootUserWallet;

    usdcEthContract = bootstrap.usdcEthContract;
    usdcAvalancheContract = bootstrap.usdcAvalancheContract;

    ethFlashPoolFactory = bootstrap.ethFlashPoolFactory;
    ethFlashService = bootstrap.ethFlashService;
    avaxFlashPoolFactory = bootstrap.avaxFlashPoolFactory;
    avaxFlashService = bootstrap.avaxFlashService;

    // Deploy MyToken
    const MyToken = await artifacts.readArtifact("MyToken")
    ethContract = await deployContract(ethUserWallet, MyToken, [
      "My Token",
      "MY",
      eth.gateway.address,
      eth.gasService.address,
      ethFlashService.address,
    ])
    avalancheContract = await deployContract(avalancheUserWallet, MyToken, [
      "My Token",
      "MY",
      avalanche.gateway.address,
      avalanche.gasService.address,
      avaxFlashService.address,
    ])

    console.log("ETH Token:", ethContract.address)
    console.log("Avalanche Token:", avalancheContract.address)

    // Link destination chain contract
    // await ethContract.connect(ethUserWallet).setDestinationAddress(eth.name, ethContract.address).then((tx: ContractTransaction) => tx.wait());
    // await ethContract.connect(ethUserWallet).setDestinationAddress(avalanche.name, avalancheContract.address).then((tx: ContractTransaction) => tx.wait());
    // await avalancheContract.connect(avalancheUserWallet).setDestinationAddress(eth.name, ethContract.address).then((tx: ContractTransaction) => tx.wait());
    // await avalancheContract.connect(avalancheUserWallet).setDestinationAddress(avalanche.name, avalancheContract.address).then((tx: ContractTransaction) => tx.wait());
  })

  it("Can register pool", async () => {
    // Mint pool register fee token
    await eth.giveToken(ethUserWallet.address, "aUSDC", BigInt(1e6));
    await (await usdcEthContract.connect(ethUserWallet).approve(ethFlashPoolFactory.address, 1e6)).wait()

    await (await ethFlashPoolFactory.connect(ethUserWallet).registerPool(ethContract.address, ethContract.address)).wait()
    await (await avaxFlashPoolFactory.connect(avalancheUserWallet).registerPool(avalancheContract.address, avalancheContract.address)).wait()

    const FlashPool = await artifacts.readArtifact("AxelarFlashPool")
    ethFlashPool = new Contract(await ethFlashPoolFactory.getFlashPoolAddress(ethContract.address, ethContract.address), FlashPool.abi, eth.provider)
    avaxFlashPool = new Contract(await avaxFlashPoolFactory.getFlashPoolAddress(avalancheContract.address, avalancheContract.address), FlashPool.abi, avalanche.provider)

    // const FlashPoolFactory = await artifacts.readArtifact("AxelarFlashPoolFactory")
    // const aaa = new Contract(ethFlashPoolFactory.address, FlashPoolFactory.abi, eth.provider)

    // console.log(await aaa.getFlashPoolAddress(ethContract.address, ethContract.address))
  })

  it("Should mint token on the source chain", async () => {
    // Mint tokens on the source chain (Ethereum)
    await ethContract.connect(ethUserWallet).mint(ethUserWallet.address, BigInt(100e6));
    expect((await ethContract.balanceOf(ethUserWallet.address)).toNumber()).to.equal(100e6)
  })

  it("Flash Pool liquidity provisioning", async () => {
    // Mint tokens to FlashPool on the source chain (Ethereum)
    await ethContract.connect(ethUserWallet).mint(await ethFlashPool.address, BigInt(100e6));
    expect((await ethContract.balanceOf(await ethFlashPool.address)).toNumber()).to.equal(100e6)

    // Mint tokens to FlashPool on the destination chain (Avalanche)
    await avalancheContract.connect(avalancheUserWallet).mint(await avaxFlashPool.address, BigInt(100e6));
    expect((await avalancheContract.balanceOf(await avaxFlashPool.address)).toNumber()).to.equal(100e6)
  })

  // Check revert cases
  // it("Should revert if bridge to an unknown chain", async () => {
  //   await expect(ethContract
  //     .connect(ethUserWallet)
  //     .bridge(
  //       "Fantom",
  //       10e6,
  //       { value: utils.parseEther("0.01") }
  //     )).to.be.throw // Should use .to.be.reverted once axelar-local-dev has migrated to ethers-v6
  // })

  // Bridge through source chain contract
  it("Should bridge token through source chain contract", async () => {
    const initialBalanceETH = 100e6;
    const initialBalanceAvax = 0;
    const amount = 40e6

    const nonce = Math.floor(Math.random() * 1000000000)

    // Send message through source chain contract to the Avalanche network
    const ethGatewayTx = await ethContract
      .connect(ethUserWallet)
      .bridge(
        avalanche.name,
        amount,
        nonce,
        { value: utils.parseEther("0.01") }
      )

    const receipt = await ethGatewayTx.wait()

    // Extract logs data
    // console.log(receipt.logs)

    await flashRelay(eth.name, avalancheRootUserWallet, avaxFlashPoolFactory as any, receipt.logs)

    // Flash execution on destination chain contract
    // await avaxFlashPool.flashExecute("", eth.name, ethContract.address)

    expect((await ethContract.balanceOf(ethUserWallet.address)).toNumber()).to.equal(initialBalanceETH - amount)
    expect((await avalancheContract.balanceOf(ethUserWallet.address)).toNumber()).to.equal(initialBalanceAvax + amount)
    expect((await avalancheContract.balanceOf(avalancheContract.address)).toNumber()).to.equal(amount)
    expect((await avalancheContract.balanceOf(avaxFlashPool.address)).toNumber()).to.equal(100e6 - amount)

    // Relay the transactions
    await relay();

    expect((await avalancheContract.balanceOf(avalancheContract.address)).toNumber()).to.equal(0)
    expect((await avalancheContract.balanceOf(avaxFlashPool.address)).toNumber()).to.equal(100e6)
  })

  it("Should bridge remaining token through source chain contract", async () => {
    const initialBalanceETH = 60e6;
    const initialBalanceAvax = 40e6;
    const amount = 60e6

    const nonce = Math.floor(Math.random() * 1000000000)

    // Send message through source chain contract to the Avalanche network
    const ethGatewayTx = await ethContract
      .connect(ethUserWallet)
      .bridge(
        avalanche.name,
        amount,
        nonce,
        { value: utils.parseEther("0.01") }
      )

    const receipt = await ethGatewayTx.wait()

    // Extract logs data
    // console.log(receipt.logs)

    await flashRelay(eth.name, avalancheRootUserWallet, avaxFlashPoolFactory as any, receipt.logs)

    // Flash execution on destination chain contract
    // await avaxFlashPool.flashExecute("", eth.name, ethContract.address)

    expect((await ethContract.balanceOf(ethUserWallet.address)).toNumber()).to.equal(initialBalanceETH - amount)
    expect((await avalancheContract.balanceOf(ethUserWallet.address)).toNumber()).to.equal(initialBalanceAvax + amount)
    expect((await avalancheContract.balanceOf(ethContract.address)).toNumber()).to.equal(amount)
    expect((await avalancheContract.balanceOf(ethFlashPool.address)).toNumber()).to.equal(100e6 - amount)

    // Relay the transactions
    await relay();

    expect((await avalancheContract.balanceOf(ethContract.address)).toNumber()).to.equal(0)
    expect((await avalancheContract.balanceOf(ethFlashPool.address)).toNumber()).to.equal(100e6)
  })

  // // Log the token balances
  // console.log(
  //   (await usdcEthContract.balanceOf(ethUserWallet.address)) / 1e6,
  //   "aUSDC in Ethereum wallet"
  // );
  // console.log(
  //   (await usdcAvalancheContract.balanceOf(avalancheUserWallet.address)) / 1e6,
  //   "aUSDC in Avalanche wallet"
  // );
})