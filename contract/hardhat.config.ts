import { config as dotenv } from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv();

const PRIVATE_KEY: string = process.env.PRIVATE_KEY as string

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            details: {
              yulDetails: {
                optimizerSteps: "u",
              },
            },
          },
        },
      },
    ]
  },
  etherscan: {
    apiKey: {
      goerli: "NTNSS97MT1UAHEQF58ZCC2QJ2D95CBMWU3",
      ftmTestnet: "KHS7ZTEFRZWRPTC95I8KGJ6YUY5JV47M5E",
      avalancheFujiTestnet: "41FFT9AVVWKFVY3DUYGVNU739SEZX4UM3S",
      optimisticGoerli: "RZWW1P82PTKQNU8HIIYYSKGF1ZDAKN98QB",
      arbitrumGoerli: "8D52YD1NUC186S5QRQFSDG1FI2WINH1PH3",
    }
  },
  networks: {
    fantom_testnet: {
      url: "https://rpc.testnet.fantom.network",
      chainId: 4002,
      accounts: [ PRIVATE_KEY ],
    },
    avax_testnet: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [ PRIVATE_KEY ],
    },
    goerli: {
      url: `https://eth-goerli.public.blastapi.io`,
      chainId: 5,
      accounts: [ PRIVATE_KEY ],
    },
    optimism_goerli: {
      url: `https://goerli.optimism.io/`,
      chainId: 420,
      accounts: [ PRIVATE_KEY ],
    },
    arbitrum_goerli: {
      url: `https://arbitrum-goerli.public.blastapi.io`,
      chainId: 421613,
      accounts: [ PRIVATE_KEY ],
    },
  }
};

export default config;
