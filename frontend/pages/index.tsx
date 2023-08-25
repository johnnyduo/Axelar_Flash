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
                  Decentralized L2 Optimism Grant Protection & Early Redemption
                </h1>
                <p>
                Empowering OP builders with early redemption options and incentivizing liquidity providers by <strong className="text-primary">Very.Insure</strong>
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
                    <label className="form-label">Enter Your Total Grant Amount</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">14th OP GRANTS</option>
                        <option value="master">AXELAR GRANTS</option>

                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="35,000 OP"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">eOP</option>
                        <option value="master">USDC</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.3 USDC"
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                   1 eOP token ~ 0.3 USDC{" "}
                    <span className="text-primary d-inline">
                      Estimated Rate <br />
                      No extra fees
                    </span>
                  </p>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Quote Now"
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
                <h2>Experience the Future of Grant Redemption!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content card no-shadow mb-0">
                <span>
                  <i className="bi bi-person" />
                </span>
                <h3>Transparent & Secure</h3>
                <p>
                Using blockchain technology, Very.Insure provides a tamper-proof record of all transactions for both Insurer and Insuree to manage their coverage securely.
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
                <h3>Customizable Plans</h3>
                <p>
                Very.Insure allows OP builders to tailor their coverage according to specific needs, offering more flexibility and personalization than traditional grant systems.
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
                <h3>Efficient Claim Process</h3>
                <p>
                Using cutting-edge automation technology, Very.Insure streamlines the claim process, reducing administrative overhead and ensuring quick and efficient resolution of claims.
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
