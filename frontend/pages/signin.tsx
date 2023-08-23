import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Signin: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const { email, password } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (email && password) {
      router.push("/otp-2");
    }
  };
  return (
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-4">
              <Link href="/">
                <a>
                  <img src="/images/logo_very.svg" width={220} alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">Sign in to Very.Insure</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form
                  name="myform"
                  className="signin_validate row g-3"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="col-12">
                    <input
                      type="email"
                      className={`form-control ${
                        error && !email ? "is-invalid" : ""
                      }`}
                      placeholder="hello@example.com"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className={`form-control ${
                        error && !password ? "is-invalid" : ""
                      }`}
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-6 text-right">
                    <Link href="/reset">Forgot Password?</Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
                <p className="mt-3 mb-0">
                  {`Don't have an account?`}
                  <Link href="/signup">
                    <a className="text-primary"> Sign up</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="privacy-link">
              <Link href="/helpdesk">
                <a>Have an issue with 2-factor authentication?</a>
              </Link>
              <br />
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
