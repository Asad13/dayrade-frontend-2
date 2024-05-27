import React, { Fragment, memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactDetail from "../components/widgets/contact-detail";
import SubHeader from "../components/widgets/sub-header";

const Faq = memo(() => {
  return (
    <Fragment>
      <SubHeader title={"FAQ"} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg={6} xl={6}>
              <div className="mb-2 text-uppercase text-primary sub-title">faq</div>
              <h2 className="text-secondary mb-4 mb-lg-5">
                Foremost Common <span className="text-primary">Questions</span>
              </h2>
              <p className="mb-0 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
            </Col>
            <Col lg={6} xl={6} className="mt-4 mt-lg-0">
              <div className="accordion custom-accordion faq" id="accordionExample">
                <div className="accordion-item mb-4 pb-2 border-bottom rounded-0">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button px-0 h5 pt-0 mb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How does SAASworld make money?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body px-0">
                      <p className="mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 pb-2 border-bottom rounded-0">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed px-0 h5 mb-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What projects can be done on SAASworld?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body px-0">
                      <p className="mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 pb-2 border-bottom rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed h5 px-0 mb-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is the Top Rated program?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body px-0">
                      <p className="mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 pb-2 border-bottom rounded-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed h5 px-0 mb-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What’s the difference between finding clients online locally?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body px-0">
                      <p className="mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed h5 px-0 mb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I sell scripts, etc. written by others?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body px-0">
                      <p className="mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
Faq.displayName = "Faq";
export default Faq;
