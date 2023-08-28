import { useAccount, useContractWrite, useNetwork, usePublicClient } from "wagmi";
import useTokenBalances from "../hooks/useTokenBalances";
import addressParse from "../utils/addressParse";
import { formatEther, parseEther } from "viem";
import { Fragment, useState } from "react";
import MyTokenABI from "../abis/MyToken.json"
import { Modal } from "react-bootstrap";
import { waitForFlashRelayer } from "../utils/relayer";

const CHAIN_NAME = {
  4002: "Fantom",
  43113: "Avalanche",
  5: "ethereum-2",
  420: "optimism",
  421613: "arbitrum",
}

export default function FlashBridge({ name, symbol, address, flashLimit }) {
  const publicClient = usePublicClient();
  const { address: walletAddress } = useAccount();
  const { chain } = useNetwork();
  const { data: balances, isLoading, isSuccess, refetch } = useTokenBalances(address);

  const [ amount, setAmount ] = useState("")
  const [ destinationChain, setDestinationChain ] = useState(43113)

  const [ showFlashBridgeModal, setShowFlashBridgeModal ] = useState(false);
  const [ isRequestingFaucet, setIsRequestingFaucet ] = useState(false);
  const [ isBridging, setIsBridging ] = useState(false);

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

      const tx = await requestBridge({
        args: [CHAIN_NAME[destinationChain], parseEther(amount), Math.floor(Math.random() * 1000000000)],
        value: parseEther("2"),
      });
      await publicClient.waitForTransactionReceipt({ hash: tx.hash })

      await waitForFlashRelayer(destinationChain, tx.hash)

      window.alert("Flash Bridge Success!")

      setShowFlashBridgeModal(false)
      refetch()
    } finally {
      setIsBridging(false);
    }
  }

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
          <button className="btn btn-primary" onClick={() => setShowFlashBridgeModal(true)}>Flash Bridge</button>
        </td>
      </tr>

      <Modal
        className="modal fade"
        id="flash-bridge-modal"
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
                {/* <option value="420">Optimism Testnet</option> */}
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
        </div>
      </Modal>
    </Fragment>
  )

}