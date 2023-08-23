import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Otp2: NextPage = () => {
  const [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }, []);
  const router = useRouter();
  const [formData, setFormData] = useState({
    otp: "",
  });
  const [error, setError] = useState(false);
  const { otp } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (otp) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            {alert && (
              <div
                className="alert alert-success  fade show d-flex justify-content-between"
                role="alert"
              >
                <span>Please enter verification token from your device</span>
                <span
                  className="c-pointer"
                  data-dismiss="alert"
                  onClick={() => setAlert(false)}
                >
                  <i className="icofont-close-line"></i>
                </span>
              </div>
            )}
            <div className="mini-logo text-center my-3">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">2-Step Verification</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <p className="text-center mb-3">
                  Enter the verification code generated by your phone ending in
                  +xxx xxxxxxxx60.
                </p>
                <form onSubmit={(e) => onSubmit(e)} className="row g-3">
                  <div className="col-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text h-100 rounded-0 rounded-start">
                          <i className="icofont-ui-touch-phone"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="verification code"
                        className={`form-control ${
                          error && !otp ? "is-invalid" : ""
                        }`}
                        name="otp"
                        value={otp}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        <small>
                          {`Don't ask me for the code again for 30 days when I use
                          this computer.`}
                        </small>
                      </label>
                    </div>
                  </div>
                </form>
                <div className="new-account mt-3">
                  <p>
                    {`Don't get code?`}{" "}
                    <Link href="/otp-1">
                      <a className="text-primary">Resend</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp2;
