import { parseEther } from "ethers";
import { ethers, network } from "hardhat";

const GAS_SERVICE = "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"

const GATEWAY: {[chainId: number]: `0x${string}`} = {
  5: "0xe432150cce91c13a887f7D836923d5597adD8E31",
  43113: "0xC249632c2D40b9001FE907806902f63038B737Ab",
  4002: "0x97837985Ec0494E7b9C71f5D3f9250188477ae14",
  420: "0xe432150cce91c13a887f7D836923d5597adD8E31",
  421613: "0xe432150cce91c13a887f7D836923d5597adD8E31",
}

async function deployContract(name: string, nonce: number, args: any[]) {
  const contract = await ethers.deployContract(name, args, {
    nonce,
    // gasPrice: 1000000000,
  });

  await contract.waitForDeployment();

  console.log(name, await contract.getAddress());

  return contract;
}

async function main() {
  const chainId = network.config.chainId || 0

  const JOHNNY = "0x15a8161a03Bceb7e7A52f601828e27Eb133E1007"
  const RELAYER = "0x6E5978EBA2b5aE7CB1932C7224FFFBf5640878bF"
  
  if (!GATEWAY[chainId]) {
    console.log("Gateway not found")
    return;

    GATEWAY[chainId] = '0x0000000000000000000000000000000000000000'
  }

  // Flash infra
  const flashService = await deployContract("AxelarFlashService", 0, [JOHNNY]);
  const flashPool = await deployContract("AxelarFlashPool", 1, []);
  const flashPoolFactory = await deployContract("AxelarFlashPoolFactory", 2, [
    RELAYER,
    await flashPool.getAddress(),
    GATEWAY[chainId],
    JOHNNY,
  ]);

  // Use cases
  const token1 = await deployContract("MyToken", 3, [
    "Axelar Flash",
    "FLASH",
    GATEWAY[chainId],
    GAS_SERVICE,
    await flashService.getAddress(),
  ])
  const token2 = await deployContract("MyToken", 4, [
    "Axelathon",
    "AXLT",
    GATEWAY[chainId],
    GAS_SERVICE,
    await flashService.getAddress(),
  ])
  const token3 = await deployContract("MyToken", 5, [
    "Johnny Duo",
    "JOHNNY",
    GATEWAY[chainId],
    GAS_SERVICE,
    await flashService.getAddress(),
  ])
  const nft = await deployContract("MyNFT", 6, [
    "Flash NFT",
    "FLASHNFT",
    await token1.getAddress(),
    parseEther("10"),
    GATEWAY[chainId],
    GAS_SERVICE,
    await flashService.getAddress(),
  ])

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
