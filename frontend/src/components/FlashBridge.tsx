import { useAccount, useContractWrite, useNetwork, usePublicClient } from "wagmi";
import useTokenBalances from "../hooks/useTokenBalances";
import addressParse from "../utils/addressParse";
import { formatEther, parseEther } from "viem";
import { Fragment, useEffect, useState } from "react";
import MyTokenABI from "../abis/MyToken.json"
import { Modal } from "react-bootstrap";
import { waitForFlashRelayer } from "../utils/relayer";
import { CHAIN_NAME, EVM_CHAIN, GAS_TOKEN, axelarSdk } from "../utils/axelar";

const GAS_LIMIT = 150000

export default function FlashBridge({ name, symbol, address, flashLimit }) {
  const publicClient = usePublicClient();
  const { address: walletAddress } = useAccount();
  const { chain, chains } = useNetwork();
  const { data: balances, isLoading, isSuccess, refetch } = useTokenBalances(address);

  const [ amount, setAmount ] = useState("")
  const [ destinationChain, setDestinationChain ] = useState(43113)

  const [ showFlashBridgeModal, setShowFlashBridgeModal ] = useState(false);
  const [ isRequestingFaucet, setIsRequestingFaucet ] = useState(false);
  const [ isBridging, setIsBridging ] = useState(false);

  const [bridgeStatus, setBridgeStatus] = useState("")
  const [axelarTxHash, setAxelarTxHash] = useState("")
  const [flashTxHash, setFlashTxHash] = useState("")
  const [flashExplorerUrl, setFlashExplorerUrl] = useState("")

  const { writeAsync: requestFaucet } = useContractWrite({
    address,
    abi: MyTokenABI,
    functionName: 'mint',
  })

  const { writeAsync: requestBridge } = useContractWrite({
    address,
    abi: MyTokenABI,
    functionName: 'bridge',
  })

  async function faucet() {
    try {
      setIsRequestingFaucet(true);

      const tx = await requestFaucet({
        args: [walletAddress, parseEther("100")],
      });
      await publicClient.waitForTransactionReceipt({ hash: tx.hash })

      refetch()
    } finally {
      setIsRequestingFaucet(false);
    }
  }

  async function bridge() {
    try {
      setIsBridging(true);

      // Estimate cross-chain transaction fee
      const gasFee: string = await axelarSdk.estimateGasFee(
        EVM_CHAIN[chain?.id || "0"],
        EVM_CHAIN[destinationChain],
        GAS_TOKEN[chain?.id || "0"],
        GAS_LIMIT,
      ) as string

      const tx = await requestBridge({
        args: [CHAIN_NAME[destinationChain], parseEther(amount), Math.floor(Math.random() * 1000000000)],
        value: BigInt(gasFee) * BigInt(2),
      });
      setAxelarTxHash(tx.hash)
      await publicClient.waitForTransactionReceipt({ hash: tx.hash })

      setBridgeStatus("Flash Relaying")

      const flashTx = await waitForFlashRelayer(destinationChain, tx.hash)
      setFlashTxHash(flashTx)
      setFlashExplorerUrl(chains.find(x => x.id == destinationChain)?.blockExplorers?.default.url + "/tx/" + flashTx)

      setBridgeStatus("Success")

      refetch()
    } finally {
      setIsBridging(false);
    }
  }

  useEffect(() => {
    if (!showFlashBridgeModal) {
      setBridgeStatus("")
      setAxelarTxHash("")
      setFlashTxHash("")
      setFlashExplorerUrl("")
    }
  }, [showFlashBridgeModal])

  return (
    <Fragment>
      <tr>
        <td>
          <div className="coin-name">
            <i className="icofont-check-circled text-success"></i>
            <span>{name}</span>
          </div>
        </td>
        <td>{symbol}</td>
        <td>{addressParse(address)}</td>
        <td>{flashLimit.toLocaleString("en-US")} {symbol}</td>
        <td>{formatEther(BigInt(balances.find(x => x.chainId == chain?.id)?.result || "0"))} {symbol}</td>
        <td>
          <button className="btn btn-warning me-2" disabled={isRequestingFaucet} onClick={() => faucet()}>Faucet</button>
          <button className="btn btn-primary" onClick={() => setShowFlashBridgeModal(true)}>Bridge</button>
        </td>
      </tr>

      <Modal
        className="modal fade"
        id={"flash-bridge-modal-" + address}
        show={showFlashBridgeModal}
        onHide={() => setShowFlashBridgeModal(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Flash Bridge {symbol}</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowFlashBridgeModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            {bridgeStatus ? (
              <div>
                <div className="d-flex justify-content-center my-3">
                  {bridgeStatus == "Success" ? (
                    <i className="bi bi-check-circle text-success d-flex" style={{ fontSize: "4rem" }}></i>
                  ) : (
                    <div className="spinner-grow text-primary" style={{ width: "4rem", height: "4rem" }}></div>
                  )}
                </div>
      
                <div className="d-flex justify-content-center text-dark" style={{ fontSize: "1.5rem" }}>
                  {bridgeStatus}{bridgeStatus != "Success" ? "..." : ""}
                </div>
      
                {axelarTxHash &&
                  <div className="d-flex justify-content-center">
                    Axelar Tx:&nbsp;<a href={"https://testnet.axelarscan.io/gmp/" + axelarTxHash} target="_blank" rel="noopener">{addressParse(axelarTxHash)}</a>
                  </div>
                }
                {flashTxHash &&
                  <div className="d-flex justify-content-center">
                    Flash Tx:&nbsp;<a href={flashExplorerUrl} target="_blank">{addressParse(flashTxHash)}</a>
                  </div>
                }
      
                {bridgeStatus == "Success" && (
                  <button className="btn btn-primary w-100 mt-2" onClick={() => setShowFlashBridgeModal(false)}>
                    Continue
                  </button>
                )}
              </div>
            ) : (
              <div>
                <div className="mb-2 text-dark bold">Source chain: {chain?.name}</div>

                <div className="col-12 mb-2">
                  <label className="form-label">Amount ({symbol})</label>
                  <input className="form-control" disabled={isBridging} value={amount} onChange={e => setAmount(e.target.value)}></input>
                  <label className="form-label mt-1">Balance: {formatEther(BigInt(balances.find(x => x.chainId == chain?.id)?.result || "0"))} {symbol}</label>
                </div>

                <div className="col-12">
                  <label className="form-label">Destination Chain</label>
                  <select className="form-control" disabled={isBridging} value={destinationChain.toString()} onChange={e => setDestinationChain(parseInt(e.target.value))}>
                    <option value="43113">Avalanche Testnet</option>
                    <option value="4002">Fantom Testnet</option>
                    <option value="421613">Arbitrum Testnet</option>
                    <option value="420">Optimism Testnet</option>
                  </select>
                  <label className="form-label mt-1">Balance: {formatEther(BigInt(balances.find(x => x.chainId == destinationChain)?.result || "0"))} {symbol}</label>
                </div>

                <button
                  type="button"
                  className="btn btn-lg w-100 btn-primary mt-2"
                  disabled={isBridging}
                  onClick={() => bridge()}
                >
                  Bridge
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </Fragment>
  )

}