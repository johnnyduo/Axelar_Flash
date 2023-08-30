import axios from "axios"

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export async function waitForFlashRelayer(destChainId: number, txHash: string): Promise<string> {
  let relayed: string | boolean = false;

  while (!relayed) {
    await wait(1000);
    try {
      const response = await axios.get(`https://axelarflash-relayer.mar.insure/${destChainId}/${txHash}`)
      relayed = response.data.relayed;
    } catch (err) {
      console.error(err)
    }
  }

  return relayed as string
}