import { NextPage } from "next";
import { useState } from "react";
import BlogRight from "../src/components/BlogRight";
import LandingLayout from "../src/layouts/landing/LandingLayout";
const BlogDetails: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    phn: "",
  });
  const [error, setError] = useState(false);
  const { name, email, msg, phn } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
  };
  return (
    <LandingLayout>
      <div className="blog section-padding border-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="blog-single-post single">
                <ul className="post-nfo">
                  <li>
                    <i className="la la-calendar" />
                    April 25, 2018
                  </li>
                  <li>
                    <i className="la la-comment-o" />
                    <a href="#">4 Comments</a>
                  </li>
                  <li>
                    <i className="la la-bookmark-o" />
                    <a href="#">Apartments</a>
                  </li>
                </ul>
                <h3>Real Estate near ocean</h3>
                <div className="blog-img">
                  <img
                    src="/images/blog/1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                {/*blog-img end*/}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  volutpat nec purus eget porta. Aliquam ebendum erat. Donec dui
                  eros, tincidunt at felis non, tristique aliquet ex. Aenean
                  luctus, orci condimentum cursus, quam lorem vulputate ligula,
                  ac pretium risus metus non est. Cras rutrum dolor in tortor
                  ultrices, ullamcorper finibus magna sollicitudin. Vivamus sed
                  massa sit amet diam porta dignissim at in lorem. In facilisis
                  quis erat at tempus. Aliquam semper diam mollis mollis. Mauris
                  dictum, ante ac interdum.
                </p>
                <p>
                  {" "}
                  Astibulum, nibh ipsum condimentum felis, quis luctus nisi nisl
                  sed orci. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Sed tempus puet
                  rutrum ultrces. Cras pretium pretium odio aliquam tortor
                  interduma. Morbi commodo egestas mauris, et porttitor ipsum
                  iaculis fermentum. Phasellus ante nibh, posuere gravida odio
                  mattis cursus.{" "}
                </p>
                <blockquote>
                  Donec sapien odio, mollis ut phaliquet hendrerit erat. Etiam
                  mollis odio ac libero ultrices cursus. Mauris massa felis,
                  rutrum vitae velit et. Aliquam ac neque in dui eleifend
                  elementum vitae mi.
                </blockquote>
                <p>
                  Praesent bibendum eget justo ac volutpat. Proin laoreet
                  hendrerit porttitor. Praesent ac lobortis urna. Nam vi ligula
                  nec posuere ornare. Integer aliquet libero at lectus
                  scelerisque fermentum. Sed dapibus massa ut ex semper
                  porttitor. Donec blandit dui sit amet nunc sagittis, ut
                  convallis ligula tempor. Vestibulum at tincidunt mi. Proin
                  venenatis dui et ex lobortis ultricies.{" "}
                </p>
                <div className="blg-dv">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="blg-sm">
                        <img
                          src="/images/blog/2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      {/*blg-sm end*/}
                    </div>
                    <div className="col-lg-6">
                      <div className="blg-info">
                        <p>
                          Orci varius natoque penatibus et magnis disa
                          parturient montes, nascetur ridiculus mus. Vestibulum
                          scelerisque commodo ultricies. Phasellus vite ipsum
                          eget diam feme ntum tempor quis nec diam. Nulla at
                          lacus consequat.
                        </p>
                      </div>
                      {/*blg-info end*/}
                    </div>
                  </div>
                </div>
                {/*blg-dv end*/}
                <p>
                  Ut egestas fringilla commodo. Phasellus ac mi vel massa mattis
                  elementum non et quam. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                  Praesent at nibh eros. Curabitur rutrum fermentum augue, ut
                  auctor elit tempor scelerisque. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Vivamus sed ante eu justo feugiat fringilla sit amet
                  quis arcu. Vivamus eget cursus ligula, condimentum feugiat
                  velit, a viverra urna placerat et.
                </p>
                <ul className="bg-links">
                  <li>
                    Nunc varius varius dolor, sit amet dignissim ligula placerat
                    ullamcorper quam a magna tempus ornare.{" "}
                  </li>
                  <li>
                    Aliquam sapien lorem, aliquet consequat neque vel, placerat
                    euismod isl vitae velit elementum aliquet.
                  </li>
                  <li>
                    Sed id orci laoreet, lacinia ligula eget, fringilla metus.
                    Quisque nec or condimentum accumsan neque.{" "}
                  </li>
                </ul>
                {/*bg-links end*/}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  volutpat nec purus eget porta. Aliquam ebendum erat. Donec dui
                  eros, tincidunt at felis non, tristique aliquet ex. Aenean
                  luctus, orci condimentum cursus, quam lorem vulputate ligula,
                  ac pretium risus metus non est. Cras rutrum dolor in tortor
                  ultrices, ullamcorper finibus magna sollicitudin. Vivamus sed
                  massa sit amet diam porta dignissim at in lorem. In facilisis
                  quis erat at tempus. Aliquam semper diam mollis mollis. Mauris
                  dictum, ante ac interdum.
                </p>
                <p>
                  {" "}
                  Astibulum, nibh ipsum condimentum felis, quis luctus nisi nisl
                  sed orci. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Sed tempus puet
                  rutrum ultrces. Cras pretium pretium odio aliquam tortor
                  interduma. Morbi commodo egestas mauris, et porttitor ipsum
                  iaculis fermentum. Phasellus ante nibh, posuere gravida odio
                  cursus risus.{" "}
                </p>
                <div className="post-share">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <a href="#comment-sec">
                    Write A Comment <i className="la la-arrow-right" />
                  </a>
                </div>
                {/*post-share end*/}
                <div className="cm-info-sec">
                  <div className="cm-img">
                    <img src="/images/blog/cm-img.png" alt="Image" />
                  </div>
                  {/*author-img end*/}
                  <div className="cm-info">
                    <h3>Endrey Tomson</h3>
                    <p>
                      Etiam euismod iaculis urna vel venenatis. Morbi rutrum
                      commodo enim. Vivamus tinci dunt leo vel arcu elnd
                      euismodtis purus in, pulvinar tellus nisl aliquam pretium
                      ac.
                    </p>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*cm-info-sec end*/}
              </div>
              {/*blog-single-post end*/}
              <div className="comment-section">
                <h3 className="p-title">Comments</h3>
                <ul>
                  <li>
                    <div className="cm-info-sec">
                      <div className="cm-img">
                        <img src="/images/blog/cm-img.png" alt="Image" />
                      </div>
                      {/*author-img end*/}
                      <div className="cm-info">
                        <h3>Kritsofer Nolan</h3>
                        <h4>April 25, 2018</h4>
                      </div>
                    </div>
                    {/*cm-info-sec end*/}
                    <p>
                      Nam placerat facilisis placerat. Morbi elit nibh, auctor
                      sit amet sodales id, porttitor eu quam. Aenean dui libero,
                      laoreet quis con sequat vitae, posuere ut sapien. Etiam
                      pharetra nulla vel diam eleifend, eu placerat nunc
                      molestie.{" "}
                    </p>
                    <a href="#" className="cm-reply">
                      Reply
                    </a>
                  </li>
                  <li>
                    <div className="cm-info-sec">
                      <div className="cm-img">
                        <img src="/images/blog/cm-img.png" alt="Image" />
                      </div>
                      {/*author-img end*/}
                      <div className="cm-info">
                        <h3>Kritsofer Nolan</h3>
                        <h4>April 25, 2018</h4>
                      </div>
                    </div>
                    {/*cm-info-sec end*/}
                    <p>
                      Nam placerat facilisis placerat. Morbi elit nibh, auctor
                      sit amet sodales id, porttitor eu quam. Aenean dui libero,
                      laoreet quis con sequat vitae, posuere ut sapien. Etiam
                      pharetra nulla vel diam eleifend, eu placerat nunc
                      molestie.{" "}
                    </p>
                    <a href="#" className="cm-reply">
                      Reply
                    </a>
                  </li>
                  <li>
                    <div className="cm-info-sec">
                      <div className="cm-img">
                        <img src="/images/blog/cm-img.png" alt="Image" />
                      </div>
                      {/*author-img end*/}
                      <div className="cm-info">
                        <h3>Kritsofer Nolan</h3>
                        <h4>April 25, 2018</h4>
                      </div>
                    </div>
                    {/*cm-info-sec end*/}
                    <p>
                      Nam placerat facilisis placerat. Morbi elit nibh, auctor
                      sit amet sodales id, porttitor eu quam. Aenean dui libero,
                      laoreet quis con sequat vitae, posuere ut sapien. Etiam
                      pharetra nulla vel diam eleifend, eu placerat nunc
                      molestie.{" "}
                    </p>
                    <a href="#" className="cm-reply">
                      Reply
                    </a>
                  </li>
                </ul>
              </div>
              {/*comment-section end*/}
              <div className="post-comment-sec" id="comment-sec">
                <h3 className="p-title">Leave a reply</h3>
                <form className="js-ajax-form" onSubmit={(e) => onSubmit(e)}>
                  <div className="form-fieldss">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 ps-0 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className={`form-control ${
                              error && !name ? "is-invalid" : ""
                            }`}
                            value={name}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                        {/* form-field end*/}
                      </div>
                      <div className="col-lg-4 col-md-4 mb-3">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Your Email"
                            className={`form-control ${
                              error && !email ? "is-invalid" : ""
                            }`}
                            value={email}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                        {/* form-field end*/}
                      </div>
                      <div className="col-lg-4 col-md-4 pe-0 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phn"
                            className={`form-control ${
                              error && !phn ? "is-invalid" : ""
                            }`}
                            value={phn}
                            onChange={(e) => onChange(e)}
                            placeholder="Your Phone"
                          />
                        </div>
                        {/* form-field end*/}
                      </div>
                      <div className="col-lg-12 col-md-12 ps-0 pe-0 mb-3">
                        <div className="form-group">
                          <textarea
                            name="msg"
                            placeholder="Your Message"
                            className={`form-control p-3 ${
                              error && !msg ? "is-invalid" : ""
                            }`}
                            value={msg}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                        {/* form-field end*/}
                      </div>
                      <div className="col-lg-12 col-md-12 ps-0 mb-3">
                        <button
                          type="submit"
                          className="btn btn-primary submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*post-comment-sec end*/}
            </div>

            <BlogRight />
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default BlogDetails;
