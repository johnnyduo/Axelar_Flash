import { NextPage } from "next";
import { Accordion } from "react-bootstrap";
import LandingLayout from "../src/layouts/landing/LandingLayout";

const Career: NextPage = () => {
  return (
    <LandingLayout>
      <div className="choose-team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Choose your team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-xxl-12">
              <Accordion
                id="accordion-faq"
                defaultActiveKey="collapseOne1"
                className="accordion"
              >
                <div className="card">
                  <div className="card-header">
                    <Accordion.Toggle
                      as="h4"
                      className="mb-0 c-pointer"
                      eventKey="collapseOne1"
                    >
                      <i className="fa"></i>Business Development & Sales
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="collapseOne1">
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Business Development Director
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Accordion.Toggle
                      as="h4"
                      className="mb-0 c-pointer"
                      eventKey="collapseTwo2"
                    >
                      <i className="fa"></i>Engineering - Frontend
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="collapseTwo2">
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Frontend Engineer, Identity
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="card">
                  <div className="card-header">
                    <Accordion.Toggle
                      as="h4"
                      className="mb-0 c-pointer"
                      eventKey="collapseThree3"
                    >
                      <i className="fa"></i>Marketing & Communications
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="collapseThree3">
                    <div className="card-body">
                      <div>
                        <h5 className="text-primary">
                          Head of Product and Performance Marketing
                        </h5>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Career;
