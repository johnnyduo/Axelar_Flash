import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Lock: NextPage = () => {
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
    <div id="main-wrapper" className="show">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-4 col-md-5">
              <div className="mini-logo text-center my-3">
                <Link href="/dashboard">
                  <a>
                    <img src="/images/axl_flash_logo.png" alt="" />
                  </a>
                </Link>
                <h4 className="card-title mt-5">Locked</h4>
              </div>
              <div className="auth-form card">
                <div className="card-body">
                  <form onSubmit={(e) => onSubmit(e)} className="row g-3">
                    <div className="col-12">
                      <label className="form-label">Enter Password</label>

                      <input
                        type="password"
                        placeholder="Enter your password"
                        className={`form-control ${
                          error && !otp ? "is-invalid" : ""
                        }`}
                        name="otp"
                        value={otp}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lock;
