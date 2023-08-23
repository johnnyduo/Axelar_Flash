import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Reset: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState(false);
  const { email } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    if (email) {
      router.push("/verify-email");
    }
  };
  return (
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-4 col-md-5">
            <div className="mini-logo text-center my-3">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">Reset Password</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form onSubmit={(e) => onSubmit(e)} className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className={`form-control ${
                        error && !email ? "is-invalid" : ""
                      }`}
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
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

export default Reset;
