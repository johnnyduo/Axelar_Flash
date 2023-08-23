import { NextPage } from "next";
import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
// import PriceChart from "../src/components/PriceChart";
import LandingLayout from "../src/layouts/landing/LandingLayout";
const PriceChart = dynamic(() => import("../src/components/PriceChart"), {
  ssr: false,
});

const Price: NextPage = () => {
  return (
    <LandingLayout>
      <div className="price-grid section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Latest price</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-btc">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc BTC" />
                        <span>Bitcoin</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eth">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc ETH" />
                        <span>Ethereum</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id='chart2' /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-usdt">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc USDT" />
                        <span>Tether</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id='chart3' /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xrp">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XRP" />
                        <span>Ripple</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart4" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ltc">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc LTC" />
                        <span>Litecoin</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart5" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-ada">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc ADA" />
                        <span>Cardano</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart6" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-eos">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc EOS" />
                        <span>EOS</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart7" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xmr">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XMR" />
                        <span>Monero</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart8" /> */}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="price-widget bg-xtz">
                <Link href="/price-details">
                  <a>
                    <div className="price-content">
                      <div className="icon-title">
                        <i className="cc XTZ" />
                        <span>Tezos</span>
                      </div>
                      <h5>$11,785.10</h5>
                    </div>
                    <PriceChart />
                    {/* <div id="chart9" /> */}
                  </a>
                </Link>
              </div>
            </div>
            {/* <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc XEM"></i>
                              <span>NEM</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart10"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc NEO"></i>
                              <span>NEO</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart11"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DASH"></i>
                              <span>Dash</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart12"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc ETC"></i>
                              <span>Ethereum Classic</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart13"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DGB"></i>
                              <span>DigiByte</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart14"></div>
                  </a> </Link>
              </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="price-widget">
                  <Link href="/price-details"><a >
                      <div class="price-content">
                          <div class="icon-title">
                              <i class="cc DCR"></i>
                              <span>Decred</span>
                          </div>
                          <h5>$11,785.10</h5>
                      </div
                      <PriceChart />>
                      // <div id="chart15"></div>
                  </a> </Link>
              </div>
          </div> */}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Price;
