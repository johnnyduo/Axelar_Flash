import { NextPage } from "next";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";

const SettingsPrivacy: NextPage = () => {
  return (
    <SettingsLayouts name="Privacy">
      <div className="card-body">
        <div className="row">
          <div className="col-xl-12">
            <div className="card h-unset">
              <div className="card-header px-0">
                <h4 className="card-title">Privacy options</h4>
              </div>
              <div className="card-body px-0">
                <h5>Instant sends</h5>
                <p className="mb-1">
                  Allow other users to see that you use Very.Insure and send you
                  crypto instantly
                </p>
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="s8"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
            <div className="card h-unset mb-0">
              <div className="card-header px-0">
                <h4 className="card-title">Your Very.Insure account</h4>
              </div>
              <div className="card-body px-0">
                <p>
                  You have a number of rights over your personal data. For more
                  detailed information on these choices, please read our full
                   <a href="#">Privacy Policy</a> and our
                   <a href="#">Cookie Policy</a>.
                </p>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>Request Data</h5>
                  <p>Request a copy of my personal data held by Very.Insure.</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request data
                  </a>
                </div>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>Request Deletion</h5>
                  <p>Request deletion of some or all of my data</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request deletion
                  </a>
                </div>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>Request export</h5>
                  <p>Request export of my data in a machine-readable form.</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request data export
                  </a>
                </div>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>Request Correction</h5>
                  <p>Request to correct, modify, or complete my data.</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request correction
                  </a>
                </div>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>
                    Request Restriction of Processing (EU and Japan Residents
                    only)
                  </h5>
                  <p>Request that Very.Insure stops processing my personal data.</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request restriction
                  </a>
                </div>

                <hr className="dropdown-divider my-4" />

                <div className="privacy-content">
                  <h5>Manage Cookies</h5>
                  <p>Manage your cookie preferences.</p>
                  <a href="#" className="btn btn-outline-primary">
                    Request cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsPrivacy;
