import dynamic from "next/dynamic";
import { FC } from "react";
const BalanceChart = dynamic(() => import("./BalanceChart"), {
  ssr: false,
});

const Balance: FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Balance</h4>
      </div>
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="balance-chart">
              <BalanceChart />
              <h4 className="position-relative mt-3">Total Balance = $ 5360</h4>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <ul className="balance-widget">
              <li>
                <div className="icon-title">
                  <i className="cc BTC"></i>
                  <span>Bitcoin</span>
                </div>
                <div className="text-end">
                  <h5>0.000242 BTC</h5>
                  <span>0.125 USD</span>
                </div>
              </li>
              <li>
                <div className="icon-title">
                  <i className="cc USDT"></i>
                  <span>Tether</span>
                </div>
                <div className="text-end">
                  <h5>0.000242 USDT</h5>
                  <span>0.125 USD</span>
                </div>
              </li>
              <li>
                <div className="icon-title">
                  <i className="cc XTZ"></i>
                  <span>Tezos</span>
                </div>
                <div className="text-end">
                  <h5>0.000242 XTZ</h5>
                  <span>0.125 USD</span>
                </div>
              </li>
              <li>
                <div className="icon-title">
                  <i className="cc XMR"></i>
                  <span>Monero</span>
                </div>
                <div className="text-end">
                  <h5>0.000242 XMR</h5>
                  <span>0.125 USD</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
