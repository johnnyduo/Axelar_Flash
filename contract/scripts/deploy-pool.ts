import { parseEther } from "ethers";
import { ethers, network } from "hardhat";

async function main() {
  const factory = await ethers.getContractAt("AxelarFlashPoolFactory", "0x9B99d8C6c65618872E89279F9Ea9C53092e5A03c")

  await (await factory.registerPool("0x8fC08644565130c915609CF861951eDc0049F59f", "0x8fC08644565130c915609CF861951eDc0049F59f", { gasPrice: 10000000 })).wait();
  await (await factory.registerPool("0xf6d7177c9aC3A61B03D78CF22BDb792352701fc6", "0xf6d7177c9aC3A61B03D78CF22BDb792352701fc6", { gasPrice: 10000000 })).wait();
  await (await factory.registerPool("0x15D96EF4cec48E9C56C866b885DD4Ec24f00DdDF", "0x15D96EF4cec48E9C56C866b885DD4Ec24f00DdDF", { gasPrice: 10000000 })).wait();
  await (await factory.registerPool("0xc4719c31396898cF18d3A796725A60A93CaF98ea", "0x8fC08644565130c915609CF861951eDc0049F59f", { gasPrice: 10000000 })).wait();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
