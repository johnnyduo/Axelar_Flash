import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Apps: NextPage = () => {
  return (
    <LandingLayout>
      <div className="appss section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="appss-img">
                <img className="img-fluid" src="/images/app2.png" alt="Image" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="appss-content">
                <h3>Mobile app</h3>
                <p>
                  Get the best mobile app to exchange or buy crypto on the go:
                </p>
                <ul>
                  <li>
                    <i className="la la-check" /> Best rates on the market
                  </li>
                  <li>
                    <i className="la la-check" /> High limits
                  </li>
                  <li>
                    <i className="la la-check" /> No verification for exchange
                    transactions
                  </li>
                  <li>
                    <i className="la la-check" /> More than 150 cryptocurrencies
                  </li>
                  <li>
                    <i className="la la-check" /> Buy bitcoin | buy crypto with
                    USD, EUR or GBP
                  </li>
                </ul>
                <div className="mt-4">
                  <Link href="/app">
                    <a className="btn btn-success my-1 waves-effect">
                      <img src="/images/android.svg" alt="Image" />
                    </a>
                  </Link>
                  <Link href="/app">
                    <a className="btn btn-success my-1 waves-effect">
                      <img src="/images/apple.svg" alt="Image" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-feature section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title">
                <h2>Tendex for wallets</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-cash" />
                  <h4>Built-in white-label instant exchange</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-headset" />
                  <h4>Dedicated support line</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-wallet2" />
                  <h4>Top-up the wallet with 140+ cryptos</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-x-octagon" />
                  <h4>Vast cross-marketing opportunities</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="card-body text-center">
                  <i className="bi bi-clipboard-check" />
                  <h4>Revenue share from every transaction</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-coin section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Easily send and receive crypto</h2>
                <p>
                  Pay anyone in the world with just their Tendex Wallet username
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="wallet-map text-center">
                <img src="/images/map.png" alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Apps;
