import { Network, createNetwork, deployContract, relay } from "@axelar-network/axelar-local-dev";
import { Wallet, Contract, utils } from "ethers-v5";
import { artifacts } from "hardhat";

let eth: Network, avalanche: Network;
let ethUserWallet: Wallet, avalancheUserWallet: Wallet;
let ethRootUserWallet: Wallet, avalancheRootUserWallet: Wallet;
let usdcEthContract: Contract, usdcAvalancheContract: Contract;

let ethFlashPoolFactory: Contract, ethFlashService: Contract;
let avaxFlashPoolFactory: Contract, avaxFlashService: Contract;

export async function bootstrapNetworks(walletIndex = 0) {
  if (!eth) {
    // Initialize an Ethereum network
    eth = await createNetwork({
      name: "Ethereum",
    });

    // Deploy USDC token on the Ethereum network
    await eth.deployToken("USDC", "aUSDC", 6, BigInt(100_000e6));

    // Initialize an Avalanche network
    avalanche = await createNetwork({
      name: "Avalanche",
    });

    // Deploy USDC token on the Avalanche network
    await avalanche.deployToken("USDC", "aUSDC", 6, BigInt(100_000e6));

    // Get the token contracts for both Ethereum and Avalanche networks
    usdcEthContract = await eth.getTokenContract("aUSDC");
    usdcAvalancheContract = await avalanche.getTokenContract("aUSDC");

    // Extract user wallets for both Ethereum and Avalanche networks
    const ethUserWallets = eth.userWallets;
    const avalancheUserWallets = avalanche.userWallets;

    ethRootUserWallet = ethUserWallets[0]
    avalancheRootUserWallet = avalancheUserWallets[0]

    // Deploy flash pool factory and service
    const FlashPool = await artifacts.readArtifact("AxelarFlashPool")
    const FlashPoolFactory = await artifacts.readArtifact("AxelarFlashPoolFactory")
    const FlashService = await artifacts.readArtifact("AxelarFlashService")

    ethFlashPoolFactory = await deployContract(ethRootUserWallet, FlashPoolFactory, [
      ethRootUserWallet.address,
      (await deployContract(ethRootUserWallet, FlashPool)).address,
    ])

    avaxFlashPoolFactory = await deployContract(avalancheRootUserWallet, FlashPoolFactory, [
      avalancheRootUserWallet.address,
      (await deployContract(avalancheRootUserWallet, FlashPool)).address,
    ])

    await (await ethFlashPoolFactory.connect(ethRootUserWallet).setGateway(eth.gateway.address)).wait();
    await (await avaxFlashPoolFactory.connect(avalancheRootUserWallet).setGateway(avalanche.gateway.address)).wait();

    await (await ethFlashPoolFactory.connect(ethRootUserWallet).setListingFee(usdcEthContract.address, 1e6)).wait();

    ethFlashService = await deployContract(ethRootUserWallet, FlashService, [ethRootUserWallet.address]);
    avaxFlashService = await deployContract(avalancheRootUserWallet, FlashService, [avalancheRootUserWallet.address]);
  }

  // Extract user wallets for both Ethereum and Avalanche networks
  const ethUserWallets = eth.userWallets;
  const avalancheUserWallets = avalanche.userWallets;

  ethUserWallet = ethUserWallets[walletIndex]
  avalancheUserWallet = avalancheUserWallets[walletIndex]

  return {
    eth,
    avalanche,

    ethUserWallet,
    avalancheUserWallet,
    ethRootUserWallet,
    avalancheRootUserWallet,

    usdcEthContract,
    usdcAvalancheContract,

    ethFlashPoolFactory,
    ethFlashService,
    avaxFlashPoolFactory,
    avaxFlashService,
  }
}