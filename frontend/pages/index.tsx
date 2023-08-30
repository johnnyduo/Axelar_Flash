import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Index: NextPage = () => {
  const router = useRouter();

  const sliderProps = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <LandingLayout>
      <div className="intro1 section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="intro-content">
                <h1 className="text-dark">
                  Unleashing Blockchain Interconnectivity <br/>at the Speed of Light
                </h1>
                <p>
                Revolutionizing blockchain connectivity, Axelar Flash ensures swift and secure value exchange across diverse networks. <strong className="text-primary"> Axelar.Flash</strong>
                </p>
                <div className="intro-btn">
                  <Link href="#">
                    <a className="btn btn-primary btn-sm py-2 px-3 me-3 shadow-sm">
                      Get Started
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="btn btn-outline-dark btn-sm py-2 px-3 shadow-sm" target="_blank">
                      Document
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="intro-form-exchange">
                <form
                  name="myform"
                  className="currency_validate trade-form row g-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    router.push("/dashboard");
                  }}
                >
                  <div className="col-12">
                    <label className="form-label">Enter Your Bridge Amount</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="source">SOURCE</option>
                        <option value="Avax">Avax</option>

                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.00 USDC"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Received Amount</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="dest">DEST</option>
                        <option value="Fantom">USDC</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.00 USDC"
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                   Flash Bridge ~ 0.3 sec{" "}
                    <span className="text-primary d-inline">
                      Estimated Time <br />
                      No extra fees
                    </span>
                  </p>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Flash Now"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getstart section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title">
                <h2>Experience the Future of Cross-Chain!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-person" />
                </span>
                <h3>Instant and Secure</h3>
                <p>
                Seamless Value Transfer: Execute financial transactions across different blockchains with unparalleled speed and efficiency.
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-pencil-square" />
                </span>
                <h3>Permissionless Auditing</h3>
                <p>
                All transactions can be independently verified in real-time, enhancing transparency and accountability across chains..
                </p>
                <Link href="/signup">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-cash" />
                </span>
                <h3>Infrastructure Scalability</h3>
                <p>
                Axelar Flash leverages its decentralized infrastructure for high-speed transaction throughput, ensuring swift execution even during peak times.
                </p>
                <Link href="#">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};
export default Index;
