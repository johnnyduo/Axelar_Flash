import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import { useSigner } from "../../hooks/useSigner";
import { useConnectWallet } from "../../store/web3Modal/connectWallet";
import { signMessage } from "../../utils/nft";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const DashboardLayout: FC = ({ children }) => {
  // const signer = useSigner();
  // const signed = useSelector((state: any) => state.web3Modal.signed);

  const { isConnected, address } = useAccount();

  useEffect(() => {
    document.querySelector("body")?.classList.add("dashboard");
  }, []);

  if (typeof window === "undefined") return <div style={{ marginTop: 120 }}></div>

  return (
    <div id="main-wrapper" className="show">
      <DashboardHeader />
      <DashboardSidebar />
      
      {isConnected && address ? <div>{children}</div> : (
        <div style={isConnected && address ? {} : {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}>
          <div className="mb-4">
            <img src="/images/axl_flash_logo.png" width={220} />
          </div>

          <ConnectButton />
          
          {/* <ConnectWalletButton></ConnectWalletButton> */}
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
