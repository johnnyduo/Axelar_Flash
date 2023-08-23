export const ENTRY_CHAIN_ID = 420 

export const CHAIN_METADATA = {
  420: {
    chainId: '0x1A4',
    chainName: 'Optimism Goerli Testnet',
    rpcUrls: ['https://goerli.optimism.io'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://goerli-optimism.etherscan.io/'],
  },
  84531: {
    chainId: '0x14A33',
    chainName: 'Base Goerli Testnet',
    rpcUrls: ['https://goerli.base.org'],
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://goerli.basescan.org/'],
  },
  2206132: {
    chainId: '0x21A9B4',
    chainName: 'PlatON Dev Testnet2',
    rpcUrls: ['https://devnet2openapi.platon.network/rpc'],
    nativeCurrency: {
      name: 'LAT',
      symbol: 'lat',
      decimals: 18,
    },
    blockExplorerUrls: ['https://devnet2scan.platon.network'],
  },
}

export function switchChain(chainId) {
  if (!CHAIN_METADATA[chainId]) {
    throw new Error("Unsupported chain")
  }

  return window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x' + chainId.toString('16') }], // chainId must be in hexadecimal numbers
  }).catch(err => {
    return window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: CHAIN_METADATA[chainId],
    });
  });
}