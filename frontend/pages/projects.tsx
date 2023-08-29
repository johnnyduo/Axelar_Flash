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
                <h5># Pools</h5>
                <h2>
                  <span className="text-info">4</span>
                </h2>
                <h5>
                  <span className="text-gray">Investors: 24</span>
                </h5>
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

          {/* Projects */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Pools</h4>
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
                          <th>TVL</th>
                          <th>Volume</th>
                          <th>Incentive / Year</th>
                          <th>Owner</th>
                          <th></th>
                          {/* <th></th> */}
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
                          <td>39,700 USDC</td>
                          <td>
                            289,000$
                          </td>
                          <td>
                            9,000 USDC
                          </td>
                          <td>
                            <a href="#">axelarflash.eth</a>
                          </td>
                          {/* <td>{new Date(2023, 4, 1).toLocaleString()}</td> */}
                          <td>
                            <a href="#">Detail</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-success"></i>
                              <span>Axelar Flash (FLASH)</span>
                            </div>
                          </td>
                          <td>50,000 FLASH</td>
                          <td>
                            100,000 FLASH
                          </td>
                          <td>
                            5,000 USDC
                          </td>
                          <td>
                            <a href="#">axelarflash.eth</a>
                          </td>
                          {/* <td>{new Date(2023, 5, 10).toLocaleString()}</td> */}
                          <td>
                            <a href="#">Detail</a>
                          </td>
                        </tr>

                        {/* <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-primary"></i>
                              <span>Layer 8 DAO</span>
                            </div>
                          </td>
                          <td>l8dao.grant.veryinsure.op</td>
                          <td>
                            20,000 OP
                          </td>
                          <td>
                            <a href="#">OP_L8DAO</a>
                          </td>
                          <td>
                            <a href="#">OP Grant S4 USDC Pool</a>
                          </td>
                          <td>{new Date(2023, 5, 20).toLocaleString()}</td>
                          <td>
                            <a href="#">Detail</a>
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
