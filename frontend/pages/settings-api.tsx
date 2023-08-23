import { NextPage } from "next";
import { useState } from "react";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";

const SettingsApi: NextPage = () => {
  const [formData, setFormData] = useState({
    key1: "",
    key2: "",
  });
  const [error, setError] = useState(false);
  const { key1, key2 } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
  };
  const classNameChange = (value: string, extClassName?: string) =>
    `${extClassName ? extClassName : "form-control"} ${
      error && !value ? "is-invalid" : ""
    }`;
  return (
    <SettingsLayouts name="API">
      <div className="card-body">
        <div className="row">
          <div className="col-xxl-12">
            <div className="card">
              <div className="card-header px-0">
                <h4 className="card-title">Create API Key</h4>
              </div>
              <div className="card-body px-0">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="row g-3">
                    <div className="col-xl-6 col-md-6">
                      <label className="form-label">Generate New Key</label>
                      <input
                        type="text"
                        name="key1"
                        className={classNameChange(key1)}
                        value={key1}
                        onChange={(e) => onChange(e)}
                        placeholder="Enter Passphrase"
                      />
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <label className="form-label">Confirm Passphrase</label>
                      <input
                        type="text"
                        name="key2"
                        className={classNameChange(key2)}
                        value={key2}
                        onChange={(e) => onChange(e)}
                        placeholder="Re-enter passphrase"
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">
                        Create API Keys
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="card mb-0 h-unset">
              <div className="card-header px-0">
                <h4 className="card-title">Your API Keys</h4>
              </div>
              <div className="card-body px-0">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Key</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>GL6x2hqQDs7RfLDb76mj8TPULaogklJ3Ld4aPmAx6b5QZtlLsusDAsA0INoV6kvG</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                          </div>
                        </td>
                        <td>
                          <span>
                            <i className="icofont-ui-delete"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>e512e3520287fc816ecef54413c99af279d4e0361261adf3d8489f40ce1dfbe1</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <span>
                            <i className="icofont-ui-delete"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>q7qiTKL9Deyi12hhRLpf3btoIsLujYMatLzkIYvpsMJNrPHmR1nSVH9AWMEg16GD</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <span>
                            <i className="icofont-ui-delete"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>lSTq3SdGVkj9h69vlKlzbXLd9xP53mPMe9XwG3ieILgDFes3hxk1OA1vwsxMZPEw</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <span>
                            <i className="icofont-ui-delete"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>CndeL6hDMjzObeEFHXgNdtAZnEw05dJyNFmKC2EEYwb8Mpk5W9K5VkpXBXFyhsft</td>
                        <td>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <span>
                            <i className="icofont-ui-delete"></i>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsApi;
