import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Team: NextPage = () => {
  return (
    <LandingLayout>
      <div className="join-team section-padding bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="join-team-content text-center">
                <h2 className="mb-2">Want to work with us?</h2>
                <p className="mb-4">
                  {`We're always looking to hire talented folks to join our
                  ever-growing team of designers, engineers, and support staff.`}
                </p>
                <Link href="/career">
                  <a className="btn btn-primary px-4 py-2">
                    View Open Position
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-ceo @@bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="ceo-content">
                <img
                  src="/images/testimonial/2.jpg"
                  alt=""
                  className="img-fluid rounded me-4"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ceo-content">
                <h3>Eric Benz</h3>
                <span>CEO of Tendex</span>
                <p className="mt-2">
                  {`John Abraham has over 10 years of experience working in and
                  around Financial Technology. He has delivered innovative SaaS
                  systems for some of today's biggest institutions around
                  payments, identity, and banking infrastructure. John Abraham
                  has been in the Blockchain space since 2012 and is involved in
                  a number of blockchain and fintech businesses both as an
                  investor, board director, and founder.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-member section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Small team. Big hearts.</h2>
                <p>
                  Our focus is always on finding the best people to work with.
                  Our bar is high, but you look ready to take on the challenge.
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-4">
              <img
                src="/images/team/1.jpg"
                className="img-fluid rounded shadow-md"
                alt="..."
              />
            </div>
            <div className="col-3">
              <img
                src="/images/team/2.jpg"
                className="img-fluid rounded shadow-md mb-4"
                alt="..."
              />
              <img
                src="/images/team/3.jpg"
                className="img-fluid rounded shadow-md"
                alt="..."
              />
            </div>
            <div className="col-5">
              <div className="row mb-4">
                <div className="col-5">
                  <img
                    src="/images/team/4.jpg"
                    className="img-fluid rounded shadow-md mb-4"
                    alt="..."
                  />
                </div>
                <div className="col-7">
                  <img
                    src="/images/team/5.jpg"
                    className="img-fluid rounded shadow-md mb-4"
                    alt="..."
                  />
                </div>
                <div className="col-12">
                  <img
                    src="/images/team/6.jpg"
                    className="img-fluid rounded shadow-md"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="trusted-business py-5 text-center">
                <h3>
                  Trusted by over <strong>Millions of business</strong> around
                  the world
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/1.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/2.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/3.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/4.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="trusted-logo">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/images/brand/5.webp"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta1 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta1-content text-center">
                <h2>Interested in joining our team?</h2>
                <p>{`Hit us up and we'll get in touch with you.`}</p>
                <Link href="/career">
                  <a className="btn btn-primary">Apply Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Team;
