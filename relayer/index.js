require("dotenv").config()

const ethers = require("ethers")

const express = require('express')
const app = express()
const port = 3987

const AxelarFlashService = require("./AxelarFlashService.json")
const AxelarFlashPoolFactory = require("./AxelarFlashPoolFactory.json")

const wait = ms => setTimeout(() => {}, ms)

const FLASH_SERVICE_ADDRESS = "0xc4f4EcAAb1ed73a303c3f47675F65E89d05F930b"
const FLASH_POOL_FACTORY_ADDRESS = "0x9B99d8C6c65618872E89279F9Ea9C53092e5A03c"

const FLASH_SERVICE_INTERFACE = new ethers.Interface(AxelarFlashService)

const NETWORKS = {
  4002: {
    name: "Fantom",
    url: "https://rpc.testnet.fantom.network",
    chainId: 4002,
  },
  43113: {
    name: "Avalanche",
    url: "https://api.avax-test.network/ext/bc/C/rpc",
    chainId: 43113,
  },
  5: {
    name: "ethereum-2",
    url: `https://eth-goerli.blastapi.io/${process.env.BLAST_API_KEY}`,
    chainId: 5,
  },
  420: {
    name: "optimism",
    url: `https://optimism-goerli.blastapi.io/${process.env.BLAST_API_KEY}`,
    chainId: 420,
  },
  421613: {
    name: "arbitrum",
    url: `https://arbitrum-goerli.blastapi.io/${process.env.BLAST_API_KEY}`,
    chainId: 421613,
  },
}

const chainName2Id = {}

const PUSHED = new Set();
const RELAYED = new Set();
const QUEUE = []

for (const chainId in NETWORKS) {
  NETWORKS[chainId].chainId = chainId;
  NETWORKS[chainId].provider = new ethers.JsonRpcProvider(NETWORKS[chainId].url);
  NETWORKS[chainId].signer = new ethers.Wallet(process.env.RELAYER_KEY, NETWORKS[chainId].provider);
  NETWORKS[chainId].flashService = new ethers.Contract(FLASH_SERVICE_ADDRESS, AxelarFlashService, NETWORKS[chainId].signer)
  NETWORKS[chainId].flashPoolFactory = new ethers.Contract(FLASH_POOL_FACTORY_ADDRESS, AxelarFlashPoolFactory, NETWORKS[chainId].signer)

  chainName2Id[NETWORKS[chainId].name] = chainId
}

async function relay(sourceChainId, log) {
  try {
    const data = FLASH_SERVICE_INTERFACE.parseLog({
      topics: [...log.topics],
      data: log.data,
    });
  
    if (data) {
      const destChainId = chainName2Id[data.args[1]];

      const tx = await NETWORKS[destChainId].flashPoolFactory.flashExecute(
        data.args[2],
        data.args[4],
        '0x0000000000000000000000000000000000000000000000000000000000000000', 
        NETWORKS[sourceChainId].name, 
        data.args[0], 
        data.args[3],
        destChainId == 420 ? { gasPrice: 10000000 } : {},
      )
  
      const receipt = await tx.wait()

      console.log("Relayed", NETWORKS[sourceChainId].name, NETWORKS[chainName2Id[data.args[1]]].name, receipt.hash)

      RELAYED.add(`${destChainId}-${log.transactionHash}`)
    }
  } catch (err) {
    console.error(err)
    console.log("Relay ERROR")
  }
}

async function processQueue() {
  try {
    while (QUEUE.length > 0) {
      const item = QUEUE.pop()
      await relay(item.sourceChainId, item.log)
    }
  } finally {
    setTimeout(processQueue, 1000);
  }
}
processQueue()

async function fetchLogs() {
  try {
    for (const chainId in NETWORKS) {
      try {
        const provider = NETWORKS[chainId].provider
  
        const blockNumber = await provider.getBlockNumber();
    
        const logs = await provider.getLogs({
          fromBlock: blockNumber - 40,
          toBlock: blockNumber,
          address: FLASH_SERVICE_ADDRESS,
          topics: [
            "0xba45864a7ed20b8a139e7d530440aee123c5d9d34fe415db953b42988c2e3425",
          ]
        })

        for (const log of logs) {
          const logId = `${chainId}-${log.transactionHash}-${log.index}`

          if (!PUSHED.has(logId)) {
            QUEUE.push({
              sourceChainId: chainId,
              log: log
            })
            PUSHED.add(logId)
          }
        }

        // if (logs.length > 0) {
        //   console.log(logs)
        // }
      } catch (err) {
        console.error("Fetch error", chainId)
        console.error(err)
      }
    }
  } finally {
    setTimeout(fetchLogs, 3000);
  }
}
fetchLogs()

process.on('unhandledRejection', err => console.error(err))

app.get('/:chainId/:txHash', (req, res) => {
  res.send({
    relayed: RELAYED.has(`${req.params.chainId}-${req.params.txHash}`),
  })
})

app.listen(port, () => {
  console.log(`Relayer listening on port ${port}`)
})