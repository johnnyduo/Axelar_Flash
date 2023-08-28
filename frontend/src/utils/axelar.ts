import { AxelarQueryAPI, Environment, EvmChain, GasToken } from "@axelar-network/axelarjs-sdk"

export const axelarSdk = new AxelarQueryAPI({
  environment: Environment.TESTNET,
});

export const CHAIN_NAME = {
  4002: "Fantom",
  43113: "Avalanche",
  5: "ethereum-2",
  420: "optimism",
  421613: "arbitrum",
}

export const EVM_CHAIN = {
  4002: EvmChain.FANTOM,
  43113: EvmChain.AVALANCHE,
  5: EvmChain.ETHEREUM,
  420: EvmChain.OPTIMISM,
  421613: EvmChain.ARBITRUM,
}

export const GAS_TOKEN = {
  4002: GasToken.FTM,
  43113: GasToken.AVAX,
  5: GasToken.ETH,
  420: GasToken.ETH,
  421613: GasToken.ETH,
}