import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ConnectWalletButton from "../../components/ConnectWalletButton";
import { useSigner } from "../../hooks/useSigner";
import { useConnectWallet } from "../../store/web3Modal/connectWallet";
import { signMessage } from "../../utils/nft";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout: FC = ({ children }) => {
  const signer = useSigner();
  const signed = useSelector((state: any) => state.web3Modal.signed);

  useEffect(() => {
    document.querySelector("body")?.classList.add("dashboard");
  }, []);

  if (typeof window === "undefined") return <div></div>

  return (
    <div id="main-wrapper" className="show">
      <DashboardHeader />
      <DashboardSidebar />
      
      {signed ? <div>{children}</div> : (
        <div style={signed ? {} : {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}>
          <div className="mb-4">
            <img src="/images/axl_flash_logo.png" width={220} />
          </div>
          
          <ConnectWalletButton></ConnectWalletButton>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
