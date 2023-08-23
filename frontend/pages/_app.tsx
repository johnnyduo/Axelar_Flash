import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import PreLoader from "../src/components/PreLoader";
import store from "../src/store/store";
import { useConnectWallet } from "../src/store/web3Modal/connectWallet";
import { ENTRY_CHAIN_ID, switchChain } from "../src/utils/switchChain";
import "../styles/globals.css";

declare global {
  interface Window {
    ethereum: any;
    account: string;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

function SwitchChain() {
  const { connectWallet, web3, address, networkId, connected } =
    useConnectWallet();

  useEffect(() => {
    if (address) {
      if (networkId != ENTRY_CHAIN_ID) {
        if (window.ethereum) {
          switchChain(ENTRY_CHAIN_ID);
        }
      }
    }
  }, [address, networkId]);

  return (
    <div></div>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return (
    <Fragment>
      <Provider store={store}>
        <SwitchChain></SwitchChain>
        {load && <PreLoader />}
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
