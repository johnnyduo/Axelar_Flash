import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSigner } from "../hooks/useSigner";
import { HOME_CONNECT_WALLET_SIGNED } from "../store/web3Modal/constants";
import { createweb3Modal } from "../store/web3Modal/createweb3Modal";
import {
  useConnectWallet,
  useDisconnectWallet,
} from "../store/web3Modal/hooks";
import addressParse from "../utils/addressParse";
import { signMessage } from "../utils/nft";

let lastSigned = 0;

export default function ConnectWalletButton() {
  const router = useRouter();

  const { connectWallet, web3, address, networkId, connected } =
    useConnectWallet();
  const signer = useSigner();
  const { disconnectWallet } = useDisconnectWallet();
  const [web3Modal, setModal] = useState<any>(null);
  const signed = useSelector((state: any) => state.web3Modal.signed);
  const dispatch = useDispatch();

  useEffect(() => {
    setModal(createweb3Modal);
  }, []);

  useEffect(() => {
    if (!connected && web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet(web3Modal);
    }
  }, [connected, web3Modal]);

  const connectWalletCallback = useCallback(() => {
    connectWallet(web3Modal);
  }, [web3Modal, connectWallet]);

  const disconnectWalletCallback = useCallback(() => {
    if (window.confirm("Confirm logout of connected wallet?")) {
      disconnectWallet(web3, web3Modal);
      router.push('/')
    }
  }, [web3, web3Modal, disconnectWallet]);

  const signAction = useCallback(async () => {
    if (Date.now() - lastSigned > 1000) {
      lastSigned = Date.now();
      await signMessage(signer, "Please sign this message to login to Very.Insure: " + Date.now())
      dispatch({
        type: HOME_CONNECT_WALLET_SIGNED,
        data: true,
      })
    }
  }, [signer])

  useEffect(() => {
    if (connected && signer && !signed) {
      signAction();
    }
  }, [connected, signed, signer])

  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        connected ? (signed ? disconnectWalletCallback() : signAction()) : connectWalletCallback()
      }
    >
      {connected ? addressParse(address) : "Connect wallet"}
    </button>
  );
}
