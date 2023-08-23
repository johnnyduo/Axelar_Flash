import { NextPage } from "next";
import Link from "next/dist/client/link";
const VerifyEmail: NextPage = () => {
  return (
    <div className="verification section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-4">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">Verify your Email</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="icofont-email"></i>
                    </span>
                    <p>
                      We sent verification email to{" "}
                      <strong className="text-dark">example@email.com</strong>.
                      Click the link inside to get started!
                    </p>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <Link href="/signup">{`Email didn't arrive?`}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
