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

          {/* Transaction History */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transaction History</h4>
                  {/* <button className="btn btn-primary" onClick={() => setShowRegisterDialog(true)}>
                    + Register Domain
                  </button> */}
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Project</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Tx Hash</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-success"></i>
                              <span>Unlock</span>
                            </div>
                          </td>
                          <td>OP Stack Hackathon</td>
                          <td>
                            <span className="text-success">+200 OP</span><br/>
                            <span className="text-danger">-200 OP_OPSTACKHACK</span>
                          </td>
                          <td>{new Date(2023, 6, 12).toLocaleString()}</td>
                          <td>
                            <a href="https://optimistic.etherscan.io/tx/0x4b30d1918abb31dc6f1f767a99179bc416f790afe94619a5164c213f397576a5">0xab17...9016</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-warning"></i>
                              <span>Claim</span>
                            </div>
                          </td>
                          <td>Layer 8 DAO</td>
                          <td>
                            <span className="text-success">+200 USDC</span><br/>
                            <span className="text-danger">-600 OP_L8DAO</span>
                          </td>
                          <td>{new Date(2023, 6, 10).toLocaleString()}</td>
                          <td>
                            <a href="https://optimistic.etherscan.io/tx/0x4b30d1918abb31dc6f1f767a99179bc416f790afe94619a5164c213f397576a5">0xca18...4296</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-primary"></i>
                              <span>Harvest</span>
                            </div>
                          </td>
                          <td>Layer 8 DAO</td>
                          <td>
                            <span className="text-success">+200 OP_L8DAO</span><br/>
                          </td>
                          <td>{new Date(2023, 5, 21).toLocaleString()}</td>
                          <td>
                            <a href="https://optimistic.etherscan.io/tx/0x4b30d1918abb31dc6f1f767a99179bc416f790afe94619a5164c213f397576a5">0xdf9a...4312</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-info"></i>
                              <span>Invest</span>
                            </div>
                          </td>
                          <td>OP Grant USDC Pool</td>
                          <td>
                            <span className="text-success">-10,000 USDC</span><br/>
                            <span className="text-danger">+10,000 OPGRANT_S4_USDC</span>
                          </td>
                          <td>{new Date(2023, 5, 14).toLocaleString()}</td>
                          <td>
                            <a href="https://optimistic.etherscan.io/tx/0x4b30d1918abb31dc6f1f767a99179bc416f790afe94619a5164c213f397576a5">0xc89f...aa18</a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="coin-name">
                              <i className="icofont-check-circled text-success"></i>
                              <span>Granted</span>
                            </div>
                          </td>
                          <td>Layer 8 DAO</td>
                          <td>
                            <span className="text-success">+800 OP_L8DAO</span><br/>
                          </td>
                          <td>{new Date(2023, 5, 1).toLocaleString()}</td>
                          <td>
                            <a href="https://optimistic.etherscan.io/tx/0x4b30d1918abb31dc6f1f767a99179bc416f790afe94619a5164c213f397576a5">0xaf2a...dc91</a>
                          </td>
                        </tr>
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
