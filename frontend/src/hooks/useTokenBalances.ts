import React from "react"
import { useAccount, useContractReads, useNetwork } from "wagmi"
import MyTokenABI from "../abis/MyToken.json"

export default function useTokenBalances(address: `0x${string}`) {
  const { address: walletAddress } = useAccount();
  const { chains } = useNetwork();

  const { data, isLoading, isSuccess, isError, refetch } = useContractReads({
    contracts: chains.map(chain => ({
      address,
      abi: MyTokenABI as any[],
      chainId: chain.id,
      functionName: 'balanceOf',
      args: walletAddress ? [ walletAddress ] : undefined,
    }))
  })

  // console.log(data, isLoading, isSuccess, isError)

  const result: any[] = [];

  if (data && data.length == chains.length) {
    for (let i = 0; i < data.length; i++) {
      result.push({
        ...data[i],
        chainId: chains[i].id
      });
    }
  }
  
  return { data: result, isLoading, isSuccess, isError, refetch }
}