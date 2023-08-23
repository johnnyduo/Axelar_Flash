import { NextPage } from "next";
import Link from "next/dist/client/link";
import { Fragment } from "react";
const LandingFooter: NextPage = () => {
  return (
    <Fragment>
      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="bottom-logo">
                <img className="pb-3" src="/images/logo_very_w.png" width="200" alt="" />

                <p>
                  Very.Insure is disrupting the grant redemption and protection sector with its decentralized, web3 platform powered by blockchain technology and smart contracts. Providing secure, transparent coverage with customizable options and efficient claim processing.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Career</Link>
                  </li>
                  <li>
                    <Link href="#">App</Link>
                  </li>
                  <li>
                    <Link href="#">Our Team</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <Link href="#">Contact us</Link>
                  </li>
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <img className="img-fluid" src="/images/hapathon2023.png" width="230"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright {new Date().getFullYear()}{" "}
                  <Link href="/">
                    <a target="_blank"> Very.Insure </a>
                  </Link>
                  I All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingFooter;
