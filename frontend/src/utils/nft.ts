import { BigNumber, Contract, ethers, Signer, utils } from "ethers";

import VeryInsureNFTABI from "./VeryInsureNFT.json"

const CONTRACT_ADDRESS = "0xEBD1C7a4007aF28b61d8A05BA25Fbe56Ef99c177"

export function getVeryInsureNft(signer: Signer | ethers.providers.Provider): Contract {
  return new Contract(CONTRACT_ADDRESS, VeryInsureNFTABI, signer);
}

export async function mintNft(signer, price: string) {
  const VeryInsureNFT = getVeryInsureNft(signer)
  return await VeryInsureNFT.buyInsurance({ value: ethers.utils.parseEther(price) })
}

export async function invest(signer, price: string) {
  const VeryInsureNFT = getVeryInsureNft(signer)
  return await VeryInsureNFT.invest({ value: ethers.utils.parseEther(price) })
}

export async function claimInsurance(signer, amount: string) {
  const VeryInsureNFT = getVeryInsureNft(signer)
  return await VeryInsureNFT.claim(ethers.utils.parseEther(amount))
}

export async function signMessage(signer, message: string) {
  return await signer.signMessage(message);
}
