import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { activeLandingHeaderMenu } from "../../utils/utils";
const LandingHeader: NextPage = () => {
  useEffect(() => {
    activeLandingHeaderMenu();
  }, []);
  const [dropDown, setDropDown] = useState("");
  const [toggle, setToggle] = useState(false);
  const setValue = (value: string) =>
      setDropDown(value === dropDown ? "" : value),
    classNameChange = (value: string) => (value === dropDown ? "show" : "");
  return (
    <div className="header landing ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="brand-logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/images/logo_very.png" width={200}
                        alt="Logo"
                        className="logo-primary"
                      />
                      <img
                        src="/images/logow.png"
                        alt="Logo"
                        className="logo-white"
                      />
                    </a>
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse ${toggle ? "show" : ""}`}
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ms-auto" id="navMenu_____">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("home")}
                      >
                        Home
                      </a>

                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("Pages")}
                      >
                        Packages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={() => window.open("https://doc.very.insure",'_blank')}
                      >
                        Docs
                      </a>

                    </li>
                    <li className="nav-item">
                      <div className="signin-btn">
                        <Link href="/dashboard">
                          <a className="btn btn-primary">App</a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
