import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import LandingLayout from "../src/layouts/landing/LandingLayout";
const sampleData = [
  64, 24, 40, 76, 19, 0, 2, 46, 65, 12, 10, 6, 15, 57, 35, 81, 86, 12, 12, 21,
  53, 44, 2, 1, 58, 9, 61, 64, 42, 92, 58, 9, 34, 47, 89, 52, 3, 69, 33, 2,
];

const Index2: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [error, setError] = useState(false);
  const { name, email, msg } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
  };
  return (
    <LandingLayout>
      <div className="intro2 section-padding bg-dark" id="intro">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="intro-content">
                <h1 className="text-white">Buy and sell cryptocurrency</h1>
                <p>
                  Fast and secure way to purchase or exchange 150+
                  cryptocurrencies
                </p>
                <div className="intro-form">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subscribe Now"
                    />
                    <button type="submit">
                      <i className="la la-arrow-right first" />
                      <i className="la la-arrow-right second" />
                    </button>
                  </form>
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
                    router.push("/price-details");
                  }}
                >
                  <div className="col-12">
                    <label className="form-label">Send</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">USD</option>
                        <option value="master">Euro</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.0214 BTC"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Receive</label>
                    <div className="input-group">
                      <select className="form-control" name="method">
                        <option value="bank">BTC</option>
                        <option value="master">ETH</option>
                      </select>
                      <input
                        type="text"
                        name="currency_amount"
                        className="form-control"
                        placeholder="0.0214 BTC"
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                    1 USD ~ 0.000088 BTC
                    <span className="text-primary">
                      {" "}
                      Expected rate <br />
                      No extra fees
                    </span>
                  </p>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Buy Now"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="market section-padding page-section"
        data-scroll-index={1}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>{`The World's Leading Cryptocurrency Exchange`}</h2>
                <p>
                  Trade Bitcoin, ETH, and hundreds of other cryptocurrencies in
                  minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="market-table">
                <div className="table-responsive">
                  <table className="table mb-0 table-responsive-sm table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="coin_icon">
                          <i className="cc BTC" />
                          <span>
                            Bitcoin <b>BTC</b>
                          </span>
                        </td>
                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td width="200px">
                          <Sparklines data={sampleData}>
                            <SparklinesLine color="rgb(47, 44, 216)" />
                            <SparklinesSpots />
                          </Sparklines>
                        </td>
                        <td>
                          <Link href="/price-details">
                            <a className="btn btn-success">Buy</a>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="coin_icon">
                          <i className="cc ETH" />
                          <span>
                            Ethereum <b>ETH</b>
                          </span>
                        </td>
                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td width="200px">
                          <Sparklines data={sampleData}>
                            <SparklinesLine color="rgb(47, 44, 216)" />
                            <SparklinesSpots />
                          </Sparklines>
                        </td>
                        <td>
                          <Link href="/price-details">
                            <a className="btn btn-success">Buy</a>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="coin_icon">
                          <i className="cc BCH-alt" />
                          <span>
                            Bitcoin Cash <b>BCH</b>
                          </span>
                        </td>
                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-success">+1.13%</span>
                        </td>
                        <td width="200px">
                          <Sparklines data={sampleData}>
                            <SparklinesLine color="rgb(47, 44, 216)" />
                            <SparklinesSpots />
                          </Sparklines>
                        </td>
                        <td>
                          <Link href="/price-details">
                            <a className="btn btn-success">Buy</a>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="coin_icon">
                          <i className="cc LTC" />
                          <span>
                            Litecoin <b>LTC</b>
                          </span>
                        </td>
                        <td>USD 680,175.06</td>
                        <td>
                          <span className="text-danger">-0.47%</span>
                        </td>
                        <td width="200px">
                          <Sparklines data={sampleData}>
                            <SparklinesLine color="rgb(47, 44, 216)" />
                            <SparklinesSpots />
                          </Sparklines>
                        </td>
                        <td>
                          <Link href="/price-details">
                            <a className="btn btn-success">Buy</a>
                          </Link>
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
      <div className="info bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-star" />
                </span>
                <h4>Best rates on the market</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-heart" />
                </span>
                <h4>Transparent 0.25% fee</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-clock" />
                </span>
                <h4>5-30 min transactions</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-cash" />
                </span>
                <h4>High exchange limits</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
              <div className="info-content">
                <span>
                  <i className="bi bi-headset" />
                </span>
                <h4>24/7 live chat support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-feature section-padding">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title">
                <h2 className="text-start">24-hour statistics</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere odit fuga nesciunt similique rerum nulla asperiores
                  ullam deserunt architecto inventore.
                </p>
              </div>
              <div className="product-feature-content">
                <div className="row">
                  <div className="col-6">
                    <div className="product-feature-text">
                      <h4>
                        <span>
                          <i className="bi bi-person" />
                        </span>{" "}
                        27 %
                      </h4>
                      <p>New users</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product-feature-text">
                      <h4>
                        <span>
                          <i className="bi bi-people" />
                        </span>{" "}
                        73 %
                      </h4>
                      <p>Regular users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-primary">
                      <i className="bi bi-cash-stack" />
                    </span>
                    <h4>1900</h4>
                    <p>Transactions made</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-secondary">
                      <i className="bi bi-trophy" />
                    </span>
                    <h4>ETH-BTC</h4>
                    <p>{`Today's champion pair`}</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-success">
                      <i className="bi bi-people" />
                    </span>
                    <h4>27 150</h4>
                    <p>Visits today</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="product-feature-box">
                    <span className="bg-info">
                      <i className="bi bi-clock" />
                    </span>
                    <h4>14.0 minutes</h4>
                    <p>Average processing time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-product section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title">
                <h2>So, What brings new product today?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="new-product-content">
                {/* <img
                  className="img-fluid"
                  src="/images/svg/api.svg"
                  alt="Image"
                /> */}
                <h4>Integrate our API</h4>
                <p>
                  A white-label solution for your project, whether it is a
                  wallet, a marketplace or a service provider. Set it up to
                  accept any of 140+ cryptocurrencies listed on Tendex and get
                  revenue for each transaction made.
                </p>
                <Link href="/faq">
                  <a className="btn btn-dark px-4">Learn more</a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="new-product-content">
                {/* <img
                  className="img-fluid"
                  src="/images/svg/affiliate.svg"
                  alt="Image"
                /> */}
                <h4>Join our Affiliate Program</h4>
                <p>
                  Place an affiliate link or customizable widget on your
                  website, blog or social media profile. Get 50% of our revenue
                  from every transaction made via either of the tools used.
                </p>
                <Link href="/helpdesk">
                  <a className="btn btn-outline-dark px-4">
                    Become an affiliate
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trust section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-flower1" />
                </span>
                <h4>EASY</h4>
                <p>
                  Create an account, choose your crypto, input your receiving
                  address, and send your funds
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-shield-lock" />
                </span>
                <h4>SAFE</h4>
                <p>
                  As a non-custodial exchange, we don’t hold your deposits, so
                  your funds are never vulnerable to hacks.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="trust-content">
                <span>
                  <i className="bi bi-brightness-high" />
                </span>
                <h4>COMPETITIVE</h4>
                <p>
                  Our exchange rates are updated in real time. What you see is
                  what you get--with no additional fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="contact-form section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <span>Ask Question</span>
                <h2>Let us hear from you directly!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12">
              <div className="info-list">
                <h4 className="mb-3">Address</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" /> California, USA
                  </li>
                  <li>
                    <i className="fa fa-phone" /> (+880) 1243 665566
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> hello@example.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12">
              <form
                name="myform"
                onSubmit={(e) => onSubmit(e)}
                className="contact_validate"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Full name </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className={`form-control ${
                          error && !name ? "is-invalid" : ""
                        }`}
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Email </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          error && !email ? "is-invalid" : ""
                        }`}
                        value={email}
                        onChange={(e) => onChange(e)}
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <textarea
                        name="msg"
                        className={`form-control p-3 ${
                          error && !msg ? "is-invalid" : ""
                        }`}
                        value={msg}
                        onChange={(e) => onChange(e)}
                        rows={5}
                        placeholder="Tell us what we can help you with!"
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send message"
                  className="btn btn-primary px-4 py-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Index2;
