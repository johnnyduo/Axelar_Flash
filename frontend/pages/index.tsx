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
      <div className="portfolio section-padding">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <h2 className="text-dark">
                  Create Your Future with Very.Insure
                </h2>
                <p>
                  Very.Insure empowers OP builders with the tools they need to unleash their potential and build groundbreaking projects on the Optimism L2 network. <i className="bi-alarm" />
                </p>
                
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-person-check" />
                  </span>
                  <div className="media-body">
                    <h4>Manage your portfolio</h4>
                    <p>
                      Buy and sell popular insurance plans, keep track of them in one place, and access your funds efficiently.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-bag-check" />
                  </span>
                  <div className="media-body">
                    <h4>Invest with Confidence</h4>
                    <p>
                      Very.Insure&#39;s vault protection and insurance coverage ensure the safety of your funds and grant investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_img">
                <img
                  src="/images/veryinsure_op.png"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="portfolio_list">
                <div className="media">
                  <span className="port-icon">
                    <i className="bi bi-shield-check" />
                  </span>
                  <div className="media-body">
                    <h4>Liquidity Provider Incentives</h4>
                    <p>
                      By providing liquidity to the redemption pool, investors can earn OP grant rewards when the contract ends.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <span className="port-icon">
                    {" "}
                    <i className="bi bi-phone" />
                  </span>
                  <div className="media-body">
                    <h4>Mobile dApps</h4>
                    <p className="media-normal-text">
                      Stay on top of grant redemption and insurance markets with the Very.Insure dApp running on {" "}
                      <Link href="#">Metamask</Link> and{" "}
                      <Link href="#">OP</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trade-app section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Access Anywhere</h2>
                <p>
                  All of our products are ready to go and offer great value to any OP builder&#39;s needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-phone" />
                  </span>
                  <h4 className="card-title">Mobile dApp</h4>
                  <p>
                    {`All the power of Very.Insure's decentralized grant protection platform in the palm of your hand. Secure your grants and build with confidence.`}
                  </p>
                  <Link href="#"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-tv" />
                  </span>
                  <h4 className="card-title">Web dApps</h4>
                  <p>
                   Experience the Very.Insure grant redemption platform on your desktop. Access powerful tools and insights tailored to your specific grant needs.
                  </p>
                  <Link href="#"> Know More </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="bi bi-server" />
                  </span>
                  <h4 className="card-title">API Integration</h4>
                  <p>
                    The Very.Insure API is designed to provide an easy and efficient way to integrate your decentralized applications with our platform. Seamlessly access grant data and transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand bg-light section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trusted-business pb-5 text-center">
                <h3>
                  Our Backed & Blockchain Audits
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="d-flex">
                    <a href="#" className="text-center">
                      <img
                        className="img-fluid"
                        src="/images/Hashkey Capital.png"
                        alt="Image"
                        width="300"
                      />
                      <img
                        className="img-fluid"
                        src="https://www.nexusgroup.com/wp-content/uploads/2020/03/alibaba-cloud-logo.png"
                        alt="Image"
                        width="300"
                      />
                      <img
                        className="img-fluid"
                        src="/images/platon.png"
                        alt="Image"
                        width="300"
                      />
                      <img
                        className="img-fluid"
                        src="/images/beosin.png"
                        alt="Image"
                        width="300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="promo section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>The Most Trusted Grant Protection Platform</h2>
                <p>Here are a few reasons why you should choose Very.Insure for your grant redemption and protection needs.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-shield-check" />
                </div>
                <h3>Advanced Security</h3>
                <p>
                  We store the vast majority of the grants and funds on the highly secured Optimism L2 network, ensuring maximum protection. Auditing by Beosin
                </p>
                <Link href="#">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-x-diamond" />
                </div>
                <h3>Insured Coverage</h3>
                <p>
                  Your grants are backed by our comprehensive insurance policy, providing an additional layer of protection for your investments.
                </p>
                <Link href="#">
                  <a>
                    Explore <i className="bi bi-arrow-right-short" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <i className="bi bi-circle-half" />
                </div>
                <h3>Developer-Friendly</h3>
                <p>
                  Very.Insure supports a variety of the most popular developer SDKs, making it easy to integrate and utilize our grant protection features.
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
