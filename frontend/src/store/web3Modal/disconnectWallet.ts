import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  HOME_DISCONNECT_WALLET_BEGIN,
  HOME_DISCONNECT_WALLET_SUCCESS,
  HOME_DISCONNECT_WALLET_FAILURE
} from "./constants";

export function disconnectWallet(web3, web3Modal) {
  return (dispatch) => {
    dispatch({ type: HOME_DISCONNECT_WALLET_BEGIN });

    const promise = new Promise<void>(async (resolve, reject) => {
      try {
        if (web3 && web3.currentProvider && web3.currentProvider.close) {
          await web3.currentProvider.close();
        }
        await web3Modal.clearCachedProvider();
        window.account = "";
        dispatch({ type: HOME_DISCONNECT_WALLET_SUCCESS });
        resolve();
      } catch (error) {
        dispatch({ type: HOME_DISCONNECT_WALLET_FAILURE });
        reject(error);
      }
    });
    return promise;
  };
}

export function useDisconnectWallet() {
  const dispatch = useDispatch();
  const disconnectWalletPending = useSelector<any, any>(
    (state) => state.web3Modal.disconnectWalletPending,
    shallowEqual
  );
  const boundAction = useCallback(
    (web3, web3Modal) => dispatch(disconnectWallet(web3, web3Modal) as any),
    [dispatch]
  );

  return { disconnectWalletPending, disconnectWallet: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_DISCONNECT_WALLET_BEGIN:
      return {
        ...state,
        disconnectWalletPending: true
      };

    case HOME_DISCONNECT_WALLET_SUCCESS:
      window.localStorage.removeItem("HOME_CONNECT_WALLET_SIGNED");
      return {
        ...state,
        address: "",
        web3: "",
        connected: false,
        disconnectWalletPending: false,
        signed: false,
      };
    case HOME_DISCONNECT_WALLET_FAILURE:
      window.localStorage.removeItem("HOME_CONNECT_WALLET_SIGNED");
      return {
        ...state,
        web3: "",
        address: "",
        disconnectWalletPending: false,
        signed: false,
      };

    default:
      return state;
  }
}
