import { NextPage } from "next";
import { useState } from "react";
import PersonalInformation from "../src/components/form/PersonalInformation";
import Profile from "../src/components/form/Profile";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
const ProfileSetting: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "Johnson Doe",
  });
  const [error, setError] = useState(false);
  const { name } = formData;
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
    <SettingsLayouts name="Profile">
      <div className="card-body">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">User Profile</h4>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="row g-3">
                    <div className="col-xxl-12">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className={classNameChange(name)}
                        value={name}
                        name="name"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="col-xxl-12">
                      <div className="d-flex align-items-center">
                        <img
                          className="me-3 rounded-circle me-0 me-sm-3"
                          src="images/logo_square.svg"
                          width="55"
                          height="55"
                          alt=""
                        />
                        <div className="media-body">
                          <h4 className="mb-0">Johnson Doe</h4>
                          <p className="mb-0">Max file size is 20mb</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="form-file">
                        <input
                          type="file"
                          className="form-file-input"
                          id="customFile"
                        />
                        <label className="form-file-label" htmlFor="customFile">
                          <span className="form-file-text">Choose file...</span>
                          <span className="form-file-button">Browse</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <button className="btn btn-success waves-effect">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Profile />
          <PersonalInformation />
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default ProfileSetting;
