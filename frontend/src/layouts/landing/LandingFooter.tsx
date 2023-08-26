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
                <img className="pb-3" src="/images/axl_flash_logo_w.png" width="200" alt="" />

                <p>
                  The Axelar Flash project is at the forefront of innovation, dedicated to pushing the boundaries of decentralized exchange and communication within the blockchain ecosystem. Our cutting-edge solution tackles the limitations of blockchain networks head-on, ushering in a new era of efficient and rapid interoperability.
                </p>
              </div>
            </div>
            <div className="col-xl-2">
              <div className="bottom-widget">
                <h4 className="widget-title">Team</h4>
                <ul>
                  <li>
                    <Link href="#">About</Link>
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
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="bottom-widget">
                <img className="img-fluid" src="https://images.prismic.io/uphold/bef31cfd-244c-465c-87bd-07468cd44540_AXL%402x.png?auto=compress,format" width="230"/>
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
                    <a target="_blank"> Axelar.Flash </a>
                  </Link>
                 All Rights Reserved
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
