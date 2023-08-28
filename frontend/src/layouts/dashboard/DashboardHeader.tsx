import { FC } from "react";
import NotificationToggle from "./NotificationToggle";
import ToggleHeaderUser from "./ToggleHeaderUser";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const DashboardHeader: FC = () => {
  return (
    <div className="header bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-12">
            <div className="header-content">
              <div className="header-left">
                {/* <div className="search">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                      />
                      <span className="input-group-text">
                        <i className="icofont-search"></i>
                      </span>
                    </div>
                  </form>
                </div> */}
              </div>

              <div className="header-right">
                <div className="dark-light-toggle">
                  <span className="dark">
                    <i className="bi bi-moon"></i>
                  </span>
                  <span className="light">
                    <i className="bi bi-brightness-high"></i>
                  </span>
                </div>
                <NotificationToggle />
                {/* <ToggleHeaderUser /> */}
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
