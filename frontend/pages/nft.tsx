import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Balance from "../src/components/Balance";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { parseEther } from "viem";
import { axelarSdk, EVM_CHAIN, GAS_TOKEN, CHAIN_NAME } from "../src/utils/axelar";
import { waitForFlashRelayer } from "../src/utils/relayer";
import { useContractWrite, useNetwork, usePublicClient } from "wagmi";
import MyTokenABI from "../src/abis/MyToken.json"
import MyNFTABI from "../src/abis/MyNFT.json"
import { Modal } from "react-bootstrap";
import addressParse from "../src/utils/addressParse";

const GAS_LIMIT = 150000
const NFT_ADDRESS = "0xc4719c31396898cF18d3A796725A60A93CaF98ea"

const Nft: NextPage = () => {
  const publicClient = usePublicClient();
  const { chain, chains } = useNetwork();

  const [showMintDialog, setShowMintDialog] = useState(false);
  const [mintStatus, setMintStatus] = useState("")
  const [axelarTxHash, setAxelarTxHash] = useState("")
  const [flashTxHash, setFlashTxHash] = useState("")
  const [flashExplorerUrl, setFlashExplorerUrl] = useState("")

  const { writeAsync: requestApprove } = useContractWrite({
    address: "0x8fC08644565130c915609CF861951eDc0049F59f",
    abi: MyTokenABI,
    functionName: 'approve',
  })

  const { writeAsync: requestBuy } = useContractWrite({
    address: NFT_ADDRESS,
    abi: MyNFTABI,
    functionName: 'buy',
  })

  async function mint(destinationChain: number) {
    try {
      setShowMintDialog(true)
      setMintStatus("Approving")

      // Approve token to NFT
      const approveTx = await requestApprove({
        args: [
          NFT_ADDRESS,
          parseEther("10"),
        ]
      })
      await publicClient.waitForTransactionReceipt({ hash: approveTx.hash })

      setMintStatus("Sending Message")

      // Estimate cross-chain transaction fee
      const gasFee: string = await axelarSdk.estimateGasFee(
        EVM_CHAIN[chain?.id || "0"],
        EVM_CHAIN[destinationChain],
        GAS_TOKEN[chain?.id || "0"],
        GAS_LIMIT,
      ) as string

      const tx = await requestBuy({
        args: [CHAIN_NAME[destinationChain], Math.floor(Math.random() * 1000000000)],
        value: BigInt(gasFee) * BigInt(2),
      });
      setAxelarTxHash(tx.hash)
      await publicClient.waitForTransactionReceipt({ hash: tx.hash })

      setMintStatus("Flash Relaying")

      const flashTx = await waitForFlashRelayer(destinationChain, tx.hash)
      setFlashTxHash(flashTx)
      setFlashExplorerUrl(chains.find(x => x.id == destinationChain)?.blockExplorers?.default.url + "/tx/" + flashTx)

      setMintStatus("Success")
    } catch (err) {
      console.error(err)
      setShowMintDialog(false)
    }
  }

  useEffect(() => {
    if (!showMintDialog) {
      setMintStatus("")
      setAxelarTxHash("")
      setFlashTxHash("")
      setFlashExplorerUrl("")
    }
  }, [showMintDialog])

  return (
    <DashboardLayout>
      <div className="content-body mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <img className="rounded" src="/images/flashnft.jpg" style={{ width: "100%", maxWidth: 600}} />
            </div>

            <div className="col-12 col-md-6">
              <h2>Mint Axelar Flash NFT</h2>
              <div className="text-dark bold mb-2">Price: 10 FLASH</div>
              <div>An NFT demonstrating flash cross-chain NFT buying experience. Buy NFT on any chain from any chain in less than 20 seconds!</div>

              <div className="mt-4">
                <div className="btn btn-danger w-100 btn-lg mb-3" onClick={() => mint(420)}>
                  Mint on Optimism
                </div>

                <div className="btn btn-info w-100 btn-lg mb-3" onClick={() => mint(421613)}>
                  Mint on Arbitrum
                </div>

                <div className="btn btn-danger w-100 btn-lg mb-3" onClick={() => mint(43113)}>
                  Mint on Avalanche
                </div>

                <div className="btn btn-primary w-100 btn-lg mb-3" onClick={() => mint(4002)}>
                  Mint on Fantom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="modal fade"
        id="flash-bridge-modal"
        show={showMintDialog}
        onHide={() => setShowMintDialog(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Mint Axelar Flash NFT</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowMintDialog(false)}
            ></button>
          </div>
        </div>

        <div className="modal-body">
          <div className="d-flex justify-content-center my-3">
            {mintStatus == "Success" ? (
              <i className="bi bi-check-circle text-success d-flex" style={{ fontSize: "4rem" }}></i>
            ) : (
              <div className="spinner-grow text-primary" style={{ width: "4rem", height: "4rem" }}></div>
            )}
          </div>

          <div className="d-flex justify-content-center text-dark" style={{ fontSize: "1.5rem" }}>
            {mintStatus}{mintStatus != "Success" ? "..." : ""}
          </div>

          {axelarTxHash &&
            <div className="d-flex justify-content-center">
              Axelar Tx:&nbsp;<a href={"https://testnet.axelarscan.io/gmp/" + axelarTxHash} target="_blank">{addressParse(axelarTxHash)}</a>
            </div>
          }
          {flashTxHash &&
            <div className="d-flex justify-content-center">
              Flash Tx:&nbsp;<a href={flashExplorerUrl} target="_blank">{addressParse(flashTxHash)}</a>
            </div>
          }

          {mintStatus == "Success" && (
            <button className="btn btn-primary w-100 mt-2" onClick={() => setShowMintDialog(false)}>
              Continue
            </button>
          )}
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Nft;
