import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import { Provider } from "react-redux";
import PreLoader from "../src/components/PreLoader";
import store from "../src/store/store";
import { useConnectWallet } from "../src/store/web3Modal/connectWallet";
import { ENTRY_CHAIN_ID, switchChain } from "../src/utils/switchChain";
import "../styles/globals.css";

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrumGoerli,
  avalancheFuji,
  fantomTestnet,
  optimismGoerli,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [optimismGoerli, arbitrumGoerli, avalancheFuji, fantomTestnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Axelar Flash",
  projectId: "84ae9c084581a3b379c0e705b920dc26",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

declare global {
  interface Window {
    ethereum: any;
    account: string;
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

// function SwitchChain() {
//   const { connectWallet, web3, address, networkId, connected } =
//     useConnectWallet();

//   useEffect(() => {
//     if (address) {
//       if (networkId != ENTRY_CHAIN_ID) {
//         if (window.ethereum) {
//           switchChain(ENTRY_CHAIN_ID);
//         }
//       }
//     }
//   }, [address, networkId]);

//   return (
//     <div></div>
//   )
// }

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
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            {/* <SwitchChain></SwitchChain> */}
            {load && <PreLoader />}
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
