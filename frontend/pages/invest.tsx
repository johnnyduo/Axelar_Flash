import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Balance from "../src/components/Balance";
import DomainRegistrationModal from "../src/components/DomainRegistrationModal";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>

      <div className="content-body">
        <div className="container-fluid">

          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5># Investors</h5>
                <h2>
                  <span className="text-info">24</span>
                </h2>
                {/* <h5>
                  <span className="text-gray">Holders: 68</span>
                </h5> */}
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Pool TVL</h5>
                <h2>
                  <span className="text-primary">114,700 $</span>
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
                  <span className="text-warning">2,128,250 $</span>
                </h2>
                <h5>
                  <span className="text-gray">(Only tokens on Coingecko)</span>
                </h5>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="wallet-widget card">
                <h5>Total Incentive / Year</h5>
                <h2>
                  <span className="text-success">20,000 $</span>
                </h2>
                <h5>
                  <span className="text-gray"></span>
                </h5>
              </div>
            </div>
          </div>

          <div>
            <h3>Pools</h3>
          </div>

          <div>
            <div className="row mb-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">NFT Pool</h4>
                    <div></div>
                    {/* <button className="btn btn-primary" onClick={() => setShowRegisterDialog(true)}>
                      + Register Domain
                    </button> */}
                  </div>
                  <div className="card-body">
                    <div className="row mb-4">
                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Locked Value</h5>
                        <h5 className="text-gray">39,700 USDC</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Volume</h5>
                        <h5 className="text-gray">289,000$</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Incentive / Year</h5>
                        <h5 className="text-gray">9,000 USDC</h5>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Invested</h5>
                        <h5 className="text-primary">10,000 USDC</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Reward</h5>
                        <h5 className="text-success">2,500 USDC</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Pending Reward</h5>
                        <h5 className="text-success">1,100 USDC</h5>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <div className="btn btn-success mx-2">Invest</div>
                      <div className="btn btn-danger mx-2">Withdraw</div>
                      <div className="btn btn-primary mx-2">Harvest</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Axelar Flash <span className="text-gray">(FLASH)</span></h4>
                    <div></div>
                    {/* <button className="btn btn-primary" onClick={() => setShowRegisterDialog(true)}>
                      + Register Domain
                    </button> */}
                  </div>
                  <div className="card-body">
                    <div className="row mb-4">
                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Locked Value</h5>
                        <h5 className="text-gray">50,000 FLASH</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Volume</h5>
                        <h5 className="text-gray">100,000 FLASH</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Incentive / Year</h5>
                        <h5 className="text-gray">5,000 USDC</h5>
                      </div>
                    </div>

                    {/* <div className="row mb-4">
                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Invested</h5>
                        <h5 className="text-success">10,000 USDC</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Utilized</h5>
                        <h5 className="text-danger">-75 USDC</h5>
                      </div>

                      <div className="col-4 d-flex flex-column align-items-center">
                        <h5>Total Reward</h5>
                        <h5 className="text-success">1,100 OP</h5>
                      </div>
                    </div> */}

                    <div className="d-flex justify-content-center">
                      <div className="btn btn-success mx-2">Invest</div>
                      <div className="btn btn-danger mx-2">Early Withdraw</div>
                      <div className="btn btn-primary mx-2">Harvest</div>
                    </div>
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
