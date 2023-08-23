import { NextPage } from "next";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Helpdesk: NextPage = () => {
  return (
    <LandingLayout>
      <div className="helpdesk-search section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="helpdesk-search-content">
                <p className="mb-1">Tendex knowledge Base</p>
                <h2 className="mb-5">How can we help you today?</h2>
                <div className="helpdesk-form">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here"
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-category section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="help-cat">
                <span className="bi bi-camera-video"></span>
                <h4>Video Guide</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="help-cat">
                <span className="bi bi-clipboard-check"></span>
                <h4>FAQ</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="help-cat">
                <span className="bi bi-braces"></span>
                <h4>API for developers</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Troubleshooting</h5>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Partnership</h5>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Getting started</h5>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Wallets</h5>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Healthy Tips</h5>
              </a>
            </div>
            <div className="col-auto">
              <a href="#" className="sub-cat">
                <h5>Crypto-definitions</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="troubleshooting section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Troubleshooting</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="troubleshooting-content">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>My Transaction</h4>
                    <ul>
                      <li>
                        <a href="#">My transaction is stuck</a>
                      </li>
                      <li>
                        <a href="#">The amount is too low</a>
                      </li>
                      <li>
                        <a href="#">Sorry, payment was not received</a>
                      </li>
                      <li>
                        <a href="#">{`Still didn't get my refund`}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>My Wallet</h4>
                    <ul>
                      <li>
                        <a href="#">
                          My wallet address is recognized as invalid
                        </a>
                      </li>
                      <li>
                        <a href="#">What does ‘Not yet redeemed?’ mean</a>
                      </li>
                      <li>
                        <a href="#">I sent my ABC coins to a non-ABC wallet</a>
                      </li>
                      <li>
                        <a href="#">ETH contract addresses</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <h4>Other</h4>
                    <ul>
                      <li>
                        <a href="#">Customer service {`doesn't`} reply</a>
                      </li>
                      <li>
                        <a href="#">The amount is too low</a>
                      </li>
                      <li>
                        <a href="#">{`Can't`} log in</a>
                      </li>
                      <li>
                        <a href="#">Can’t enable / disable 2-FA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticket-box section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="ticket-box-content">
                <h3>
                  {`Can't`} find what {`you're`} looking for?
                </h3>
                <p>Let us help you!</p>
                <a href="#" className="btn btn-dark">
                  Submit Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Helpdesk;
