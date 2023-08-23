import { reducer as connectWalletReducer } from "./connectWallet";
import { reducer as disconnectWalletReducer } from "./disconnectWallet";

const reducers = [connectWalletReducer, disconnectWalletReducer];

const initialState = {
  address: "",
  provider: null,
  connected: false,
  networkId: 4,
  signed: typeof window !== "undefined" && window.localStorage.getItem("HOME_CONNECT_WALLET_SIGNED") == "SIGNED",
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
