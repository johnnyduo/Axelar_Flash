import { Log } from "ethers";
import { AxelarFlashPoolFactory } from "../typechain-types";
import { artifacts, ethers } from "hardhat";
import { ethers as ethersV5 } from "ethers-v5"; 

// Event Hash
// Message only: 0xba45864a7ed20b8a139e7d530440aee123c5d9d34fe415db953b42988c2e3425
// Message with token: 0x3b9399e9889431359174e08ae25f5b4660a27ff97911ea86c05383cdc2ea8d7d

export async function flashRelay(sourceChain: string, relayer: any, flashPoolFactory: AxelarFlashPoolFactory, logs: Log[]) {
  const FlashService = await ethers.getContractFactory("AxelarFlashService")
  
  const contractCalls = logs.filter(x => x.topics[0] == '0xba45864a7ed20b8a139e7d530440aee123c5d9d34fe415db953b42988c2e3425')
  const contractCallsWithToken = logs.filter(x => x.topics[0] == '0x3b9399e9889431359174e08ae25f5b4660a27ff97911ea86c05383cdc2ea8d7d')

  for (const call of contractCalls) {
    const data = FlashService.interface.parseLog({
      topics: [...call.topics],
      data: call.data,
    });

    if (data) {
      const tx = await flashPoolFactory.flashExecute(
        data.args[2],
        data.args[4],
        '0x0000000000000000000000000000000000000000000000000000000000000000', 
        sourceChain, 
        data.args[0], 
        data.args[3]
      )

      const receipt = await tx.wait()
    }

  }
}