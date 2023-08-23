import { NextPage } from "next";
import BuySellForm from "../src/components/BuySellForm";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
const Trade: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Buy" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Claim" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Invest" color="success" />
            </div>
            <div className="col-xxl-3 col-xl-6">
              <BuySellForm name="Allow" color="success" />
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Your Insurances</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Policy</th>
                          <th>Price</th>
                          <th>Coverage</th>
                          <th>Inception Date</th>
                          <th>Expiry Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Eye Insurance
                          </td>
                          <td className="coin-name">
                            15,000 USD
                          </td>
                          <td>100,000 USD</td>
                          <td>Mar 20, 2023</td>
                          <td>Mar 20, 2024</td>
                        </tr>
                        <tr>
                          <td>
                            Beauty Insurance
                          </td>
                          <td className="coin-name">
                            10,000 USD
                          </td>
                          <td>50,000 USD</td>
                          <td>Mar 18, 2023</td>
                          <td>Mar 18, 2025</td>
                        </tr>
                        <tr>
                          <td>
                            Dentist Insurance
                          </td>
                          <td className="coin-name">
                            5,000 USD
                          </td>
                          <td>20,000 USD</td>
                          <td>May 1, 2022</td>
                          <td>May 1, 2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Claims</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Policy</th>
                          <th>Claimed Detail</th>
                          <th>Status</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Eye Insurance
                          </td>
                          <td className="coin-name">
                            #1 Eye injury
                          </td>
                          <td className="text-success">Approved</td>
                          <td className="text-success">20,000 USD</td>
                          <td>Mar 23, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            Eye Insurance
                          </td>
                          <td className="coin-name">
                            #2 Eye sensitive to light
                          </td>
                          <td className="text-danger">Rejected</td>
                          <td className="text-danger">10,000 USD</td>
                          <td>Mar 25, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            Beauty Insurance
                          </td>
                          <td className="coin-name">
                            #3 Silicone quality is lower than standard
                          </td>
                          <td className="text-warning">Pending</td>
                          <td className="text-warning">5,000 USD</td>
                          <td>Mar 27, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            Dentist Insurance
                          </td>
                          <td className="coin-name">
                            #4 Teeth Scaling
                          </td>
                          <td className="text-warning">Pending</td>
                          <td className="text-warning">1,000 USD</td>
                          <td>Mar 27, 2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transactions</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Insurance</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Allowances</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Requested No.</th>
                          <th>Insurance</th>
                          <th>Entity</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            #1
                          </td>
                          <td className="coin-name">
                            Eye Insurance
                          </td>
                          <td>Very.Insure Co, Ltd</td>
                          <td>Mar 23, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            #2
                          </td>
                          <td className="coin-name">
                            Eye Insurance
                          </td>
                          <td>Bangpakok Hospital</td>
                          <td>Mar 25, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            #3
                          </td>
                          <td className="coin-name">
                            Eye Insurance
                          </td>
                          <td>Siriraj Hospital</td>
                          <td>Mar 26, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            #4
                          </td>
                          <td className="coin-name">
                            Beauty Sure
                          </td>
                          <td>Very.Insure Co, Ltd</td>
                          <td>Mar 27, 2023</td>
                        </tr>
                        <tr>
                          <td>
                            #5
                          </td>
                          <td className="coin-name">
                            Dentist Sure
                          </td>
                          <td>Very.Insure Co, Ltd</td>
                          <td>Mar 27, 2023</td>
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

export default Trade;
