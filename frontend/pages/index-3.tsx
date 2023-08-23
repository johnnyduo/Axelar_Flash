import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";
const Index3: NextPage = () => {
  return (
    <LandingLayout>
      <div className="intro3 section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 col-lg-6 col-12">
              <div className="intro-content">
                <div className="mb-5">
                  <small className="text-dark font-weight-bold">
                    Earn 30% Commissions
                  </small>
                  <br />
                  <small className="text-dark font-weight-bold">
                    Refer a friend to earn 30% of their trading fees.
                  </small>
                  <br />
                  <Link href="/faq">
                    <a>
                      {" "}
                      <small>Learn More</small>
                    </a>
                  </Link>
                </div>
                <h1>Buy, Sell &amp; Trade Crypto</h1>
                <p>
                  Join the world’s most comprehensive and secure trading
                  platform. Buy and sell Bitcoin, Ethereum, XRP and many other
                  cryptocurrencies with fiat or crypto.
                </p>
              </div>
              <div className="intro-btn">
                <Link href="/signup">
                  <a className="btn btn-primary btn-sm py-2 px-3">
                    Get Started
                  </a>
                </Link>
                {/* <div class="app-link">
                  <a href="#"><span><i class="mdi mdi-google-play"></i></span></a>
                  <a href="#"><span><i class="mdi mdi-apple"></i></span></a>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="intro-app-img">
                {/* <img src="/images/landing/banner-image-left.png" class="img-fluid" alt=""> */}
                <img
                  src="/images/landing/banner-image-right.png"
                  className="img-fluid"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="perfection section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Perfect for everyone</h2>
                <p>
                  Liquid is a user-friendly platform built for everyone, from
                  beginners to pros.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="perfection-content card no-shadow m-0">
                <h4>Fiat Gateway</h4>
                <p>
                  Link your bank account to Liquid to jump in and out of the
                  crypto markets as you please.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="perfection-content card no-shadow m-0">
                <h4>Peace of Mind</h4>
                <p>
                  We store 98% of digital funds in an offline, secure wallet.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="perfection-content card no-shadow m-0">
                <h4>Low Fees</h4>
                <p>
                  Our fee structure is simple and competitive to give Liquid
                  traders the best possible experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swap-crypto section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5">
              <div className="section-title my-5">
                <h2 className="text-start pb-3">Instantly Swap Cryptos</h2>
                <p>
                  Create your own trading pairs and swap any cryptocurrency on
                  Liquid for another easily and quickly.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="swap-crypto-img">
                <img
                  src="/images/landing/qex.png"
                  alt="IMage"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advance-trading section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Advanced Trading</h2>
                <p>
                  Trade our spot and margin markets with advanced funding
                  options, lightning fast execution and deep liquidity.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-8">
              <div className="advance-trading-img">
                <img
                  src="/images/portfolio.jpg"
                  alt="Imaeg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="advance-trading-content">
                <h4>Powerful API</h4>
                <p>
                  Manage your positions easily with our intuitive API, trading
                  platform and advanced order options.
                </p>
              </div>
              <div className="advance-trading-content">
                <h4>Leverage up to 100x</h4>
                <p>Trade Bitcoin CFDs with up to 100x leverage.</p>
              </div>
              <div className="advance-trading-content">
                <h4>Deep Liquidity</h4>
                <p>
                  Our advanced proprietary multi-market order technology
                  enhances liquidity, tightening spreads and reducing slippage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-started section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>Get started</h2>
                <p>
                  Trade our spot and margin markets with advanced funding
                  options
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>Licensed &amp; Regulated</h4>
                <p>
                  We are fully regulated, licensed and meet the strictest safety
                  standards by the Japan Financial Services Agency.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>Safe Storage</h4>
                <p>
                  We store all customer assets in cold, offline storage to
                  ensure your funds are protected.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>Security First</h4>
                <p>
                  We use the latest technologies to keep your funds safe, and
                  stay ahead of vulnerabilities and exploitation attempts.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>Fast Withdrawals</h4>
                <p>
                  Using multi-party computing we are able to offer fast
                  round-the-clock withdrawals while maintaining our rigorous
                  security standards.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>Fiat Gateway</h4>
                <p>
                  We accept deposits of major fiat currencies including USD,
                  JPY, EUR, SGD, HKD, and AUD.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="get-started-content card no-shadow">
                <h4>24/7 Support.</h4>
                <p>
                  Have a problem or just need to ask us someting? Our customer
                  support team are available to help 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="testimonial2-content">
                <h3>Everyone is a Trader</h3>
                <h5>
                  {`We're on a mission to help provide financial freedom for
                  everyone.`}
                </h5>
                <p>
                  Our eyes are set beyond the world of cryptocurrency, we want
                  to create an ecosystem anyone can use.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial2-content">
                <h3>Everyone is a Trader</h3>
                <h5>
                  {`We're on a mission to help provide financial freedom for
                  everyone.`}
                </h5>
                <p>
                  Our eyes are set beyond the world of cryptocurrency, we want
                  to create an ecosystem anyone can use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="
            cta2-content
            text-center
            d-flex
            justify-content-center
            align-items-center
          "
              >
                <h3 className="me-5 mb-0">Step into Tendex</h3>

                <Link href="/signup">
                  <a className="btn btn-primary">Get Started</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Index3;
