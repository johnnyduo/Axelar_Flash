import { NextPage } from "next";
import { useState } from "react";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [error, setError] = useState(false);
  const { name, email, msg } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
  };
  return (
    <LandingLayout>
      <div className="contact-form section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <span>Ask Question</span>
                <h2>Let us hear from you directly!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12">
              <div className="info-list">
                <h4 className="mb-3">Address</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> California, USA
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (+880) 1243 665566
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> hello@example.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12">
              <form
                onSubmit={(e) => onSubmit(e)}
                name="myform"
                className="contact_validate"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Full name </label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className={`form-control ${
                          error && !name ? "is-invalid" : ""
                        }`}
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> Email </label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          error && !email ? "is-invalid" : ""
                        }`}
                        value={email}
                        onChange={(e) => onChange(e)}
                        placeholder="hello@domain.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <textarea
                        name="msg"
                        className={`form-control p-3 ${
                          error && !msg ? "is-invalid" : ""
                        }`}
                        value={msg}
                        onChange={(e) => onChange(e)}
                        rows={5}
                        placeholder="Tell us what we can help you with!"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 p-0">
          <div id="map-canvas">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31550.96082563644!2d115.21595661926273!3d-8.703883643278244!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1637590351475!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Contact;
