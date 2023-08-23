import { NextPage } from "next";
import Link from "next/dist/client/link";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const About: NextPage = () => {
  return (
    <LandingLayout>
      <div className="about-one section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="service-content m-t-50">
                <h2 className="mb-4">
                  We are Tendex, a multidisciplinary creative team from
                  Copenhagen
                </h2>
                <p>
                  {`Founded in January of 2020, Tendex is a digital currency
                  wallet and platform where merchants and consumers can transact
                  with new digital currencies like bitcoin, ethereum, and
                  litecoin. We're based in San Francisco, California.`}
                </p>
                <Link href="/contact">
                  <a className="btn btn-primary my-4">Get in Touch</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-img">
                <img src="images/about/1.jpeg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-6 py-lg-8 mt-6 mt-lg-0 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="font-weight-normal mt-4">
                A team of digital enthusiasts ready for the next challenge
              </h2>

              <p className="text-muted mt-4">
                {`Over the past decade, we've helped hundreds of companies thrive
                in the digital world. Growing businesses through innovation is
                our goal.`}
              </p>
            </div>

            <div className="col-lg-7 offset-lg-1 mt-4 mt-lg-0">
              <div className="row g-0">
                <div className="col-6 bg-white text-purple text-center py-5 py-md-7">
                  <h1 className="display-3">30k</h1>
                  <p className="m-0">paying customers</p>
                </div>

                <div className="col-6 bg-purple text-center py-5 py-md-7">
                  <h1 className="display-3 text-white">$100m</h1>
                  <p className="m-0 text-white">in funding</p>
                </div>

                <div className="col-6 bg-purple text-center py-5 py-md-7">
                  <h1 className="display-3 text-white">2012</h1>
                  <p className="m-0 text-white">founded</p>
                </div>

                <div className="col-6 bg-white text-purple text-center py-5 py-md-7">
                  <h1 className="display-3">99.8%</h1>
                  <p className="m-0">uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-two section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-content my-5">
                <h3>Working at Tendex</h3>
                <p>
                  Digital currencies are changing how we use and think about
                  money. Tendex, the most trusted company in the space, is
                  looking for you to join our rapidly growing team.
                </p>
                <Link href='/career'><a  className='btn btn-primary'>
                  Read more
                </a></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-img">
                <img src="images/about/1.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default About;
