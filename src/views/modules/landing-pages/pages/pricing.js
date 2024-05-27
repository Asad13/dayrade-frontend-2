import React, { Fragment, memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../../../../components/bootstrap/card";
import { Link } from "react-router-dom";
import ContactDetail from "../components/widgets/contact-detail";
import SubHeader from "../components/widgets/sub-header";

const Pricing = memo(() => {
  return (
    <Fragment>
      <SubHeader title={"Pricing Plan"} />
      <div className="section-card-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-2 text-uppercase text-primary sub-title">PRICE PLAN</p>

              <h2 className="text-secondary mb-4 mb-lg-5 pb-4 pb-lg-5">
                Some Of Our{" "}
                <span className="text-primary">Selected Projects</span>
              </h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-lg-3 row-cols-md-3">
            <Col>
              <Card className="pricing-card">
                <Card.Body>
                  <p className="mb-3 text-primary">Basic</p>
                  <div className="d-flex align-items-baseline  mb-3">
                    <h4 className="card-title pricing-card-title mb-0 text-primary">
                      $25
                    </h4>
                    <h6 className="mb-0">/ month </h6>
                  </div>
                  <p className="border-bottom mb-0 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="list-unstyled pt-4">
                    <li className="mb-2">
                      <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      Email support
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary w-100 mt-4">
                    Get Started
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="pricing-card">
                <Card.Body>
                  <p className="mb-3">Professional</p>
                  <div className="d-flex  align-items-baseline  mb-3">
                  <h4 className="card-title pricing-card-title mb-0">
                    $25
                  </h4>
                  <h6 className="mb-0"> / month</h6>
                  </div>
                  <p className="border-light pb-4 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="list-unstyled pt-4">
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      Email support
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary w-100 mt-4">
                    Get Started
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body className="pricing-card">
                  <p className="mb-2 text-primary">Startup</p>
                  <div className="d-flex align-items-baseline  mb-3">
                  <h4 className="card-title pricing-card-title mb-0 text-primary">
                    $99
                  </h4>
                  <h6 className="mb-0"> / month</h6>
                  </div>
                  <p className="border-bottom pb-4 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="list-unstyled pt-4">
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      Email support
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary w-100 mt-4">
                    Get Started
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding pt-0">
        <ContactDetail />
      </div>
    </Fragment>
  );
});
Pricing.displayName = "Pricing";
export default Pricing;
