import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Balance from "../src/components/Balance";
import DomainRegistrationModal from "../src/components/DomainRegistrationModal";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import FlashBridge from "../src/components/FlashBridge";

const Dashboard: NextPage = () => {
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  return (
    <DashboardLayout>
      <DomainRegistrationModal show={showRegisterDialog} close={setShowRegisterDialog} />

      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Supported Tokens</h5>
                <h2>
                  <span className="text-primary">3</span>
                </h2>
                {/* <h5>
                  <span className="text-gray">3,000 $</span>
                </h5> */}
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Total Flash Limit</h5>
                <h2>
                  <span className="text-success">280,000 $</span>
                </h2>
                <h5>
                  <span className="text-gray">(Only tokens on Coingecko)</span>
                </h5>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Total Volume</h5>
                <h2>
                  <span className="text-warning">120,000 $</span>
                </h2>
                <h5>
                  <span className="text-gray">(Only tokens on Coingecko)</span>
                </h5>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Total Processing</h5>
                <h2>
                  <span className="text-danger">4,800 $</span>
                </h2>
                <h5>
                  <span className="text-gray">(Only tokens on Coingecko)</span>
                </h5>
              </div>
            </div>
          </div>

          {/* Locked Grant */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Express Bridge</h4>
                  {/* <button className="btn btn-primary" onClick={() => setShowRegisterDialog(true)}>
                    + Register Domain
                  </button> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Token</th>
                          <th>Symbol</th>
                          <th>Token Address</th>
                          <th>Flash Limit</th>
                          <th>Balance</th>
                          <th>Actions</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <FlashBridge
                          name={"Axelar Flash"}
                          symbol={"FLASH"}
                          address={"0x8fC08644565130c915609CF861951eDc0049F59f"}
                          flashLimit={1000000}
                        ></FlashBridge>

                        <FlashBridge
                          name={"Axelathon"}
                          symbol={"AXLT"}
                          address={"0xf6d7177c9aC3A61B03D78CF22BDb792352701fc6"}
                          flashLimit={200000}
                        ></FlashBridge>

                        <FlashBridge
                          name={"Johnny"}
                          symbol={"JOHNNY"}
                          address={"0x15D96EF4cec48E9C56C866b885DD4Ec24f00DdDF"}
                          flashLimit={100000}
                        ></FlashBridge>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Investment Reward */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Investment Reward</h4>
                  {/* <button className="btn btn-primary" onClick={() => setShowRegisterDialog(true)}>
                    + Register Domain
                  </button> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Pool</th>
                          <th>Investment</th>
                          <th>Total Reward</th>
                          <th>Pending Reward</th>
                          <th>Actions</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-success"></i>
                              <span>NFT Pool</span>
                            </div>
                          </td>
                          <td>10,000 USDC</td>
                          <td>2,500 USDC</td>
                          <td>1,100 USDC</td>
                          <td>
                            <Link href="#">
                              <div className="btn btn-primary">Harvest</div>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-warning text-warning" />
                              <span>Axelar Flash (FLASH)</span>
                            </div>
                          </td>
                          <td>15,000 FLASH</td>
                          <td>600 USDC</td>
                          <td>400 USDC</td>
                          <td>
                            <Link href="#">
                              <div className="btn btn-primary">Harvest</div>
                            </Link>                      
                          </td>
                        </tr>
                        {/* <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-primary"/>
                              <span>Layer 8 DAO</span>
                            </div>
                          </td>
                          <td>300 OP</td>
                          <td>100 OP</td>
                          <td>
                            <Link href="#">
                              <div className="btn btn-primary">Harvest</div>
                            </Link>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <td>
                            <div className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </div>
                          </td>
                          <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                          <td>
                            <img
                              className="qr-img"
                              src="/images/qr.svg"
                              alt=""
                              width="40"
                            />
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
