import { NextPage } from "next";
import Link from "next/dist/client/link";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
const Profile: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="card welcome-profile">
                <div className="card-body">
                  <img src="/images/profile/2.png" alt="" />
                  <h4>Welcome, John Doe!</h4>
                  <p>
                    Looks like you are not verified yet. Verify yourself to use
                    the full potential of Tendex.
                  </p>

                  <ul>
                    <li>
                      <a href="#">
                        <span className="verified">
                          <i className="icofont-check-alt"></i>
                        </span>
                        Verify account
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="not-verified">
                          <i className="icofont-close-line"></i>
                        </span>
                        Two-factor authentication (2FA)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Download App</h4>
                </div>
                <div className="card-body">
                  <div className="app-link">
                    <h5>Get Verified On Our Mobile App</h5>
                    <p>
                      Verifying your identity on our mobile app more secure,
                      faster, and reliable.
                    </p>

                    <Link href="/app">
                      <a className="btn btn-primary">
                        <img src="/images/android.svg" alt="Image" />
                      </a>
                    </Link>
                    <br />
                    <div className="mt-3"></div>
                    <Link href="/app">
                      <a className="btn btn-primary">
                        <img src="/images/apple.svg" alt="Image" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Information</h4>
                  <Link href="/./settings-profile">
                    <a className="btn btn-primary">Edit</a>
                  </Link>
                </div>
                <div className="card-body">
                  <form className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="user-info">
                        <span>USER ID</span>
                        <h4>818778</h4>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="user-info">
                        <span>EMAIL ADDRESS</span>
                        <h4>email@example.com</h4>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="user-info">
                        <span>COUNTRY OF RESIDENCE</span>
                        <h4>Bangladesh</h4>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="user-info">
                        <span>JOINED SINCE</span>
                        <h4>20/10/2020</h4>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                      <div className="user-info">
                        <span>TYPE</span>
                        <h4>Personal</h4>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">VERIFY & UPGRADE</h4>
                </div>
                <div className="card-body">
                  <h5>
                    Account Status :
                    <span className="text-warning">
                      Pending <i className="icofont-warning"></i>
                    </span>
                  </h5>
                  <p>
                    Your account is unverified. Get verified to enable funding,
                    trading, and withdrawal.
                  </p>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Get Verified
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Earn 30% Commission</h4>
                </div>
                <div className="card-body">
                  <p>Refer your friends and earn 30% of their trading fees.</p>
                  <a href="#" className="btn btn-primary">
                    {" "}
                    Referral Program
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
