import React, { Fragment, memo } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const FooterOne = memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <footer className="bg-secondary inner-box ">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <Link
                to="/landing-pages/home"
                className="navbar-brand mb-4 d-flex align-items-center"
              >
                <svg
                  className="icon-30 text-primary"
                  width="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-0.757324"
                    y="19.2427"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 -0.757324 19.2427)"
                    fill="currentColor"
                  />
                  <rect
                    x="7.72803"
                    y="27.728"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 7.72803 27.728)"
                    fill="currentColor"
                  />
                  <rect
                    x="10.5366"
                    y="16.3945"
                    width="16"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5366 16.3945)"
                    fill="currentColor"
                  />
                  <rect
                    x="10.5562"
                    y="-0.556152"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5562 -0.556152)"
                    fill="currentColor"
                  />
                </svg>
                <h4 className="logo-title ms-3 text-white">Hope UI</h4>
              </Link>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="mb-4 mb-lg-5 text-white">Company</h5>
              <ul className="m-0 p-0 text-white list-unstyled">
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  About us
                </li>
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Terms Of Use
                </li>
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Privacy Policy
                </li>
                <li>
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  FAQ
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="mb-4 mb-lg-5 mt-4 mt-md-0 text-white">Services</h5>
              <ul className="m-0 p-0 list-unstyled text-white">
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Branding
                </li>
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Design
                </li>
                <li className="mb-5">
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Development
                </li>
                <li>
                  <svg
                    className="me-2 text-primary"
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                  >
                    <circle
                      cx="3.5"
                      cy="4"
                      r="3.5"
                      fill="currentColor"
                    ></circle>
                  </svg>
                  Marketing
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5 className="mb-4 mb-lg-5 mt-5 mt-lg-0 text-white">
                Get In touch
              </h5>
              <p className="text-white mb-4">
                Need help? Let us hear about it!
              </p>
              <p className="text-white">Email us at:</p>
              <Link to="#" className="text-decoration-underline text-white">
                support@hopeui.com
              </Link>
              <ul className="list-unstyled p-0 pt-5 m-0 d-flex mt-3 social-icon">
                <li>
                  <Link to="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="ps-3">
                  <Link to="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M16.285 2.50105C17.1972 2.49755 18.1093 2.50672 19.0212 2.52855L19.2637 2.5373C19.5437 2.5473 19.82 2.5598 20.1537 2.5748C21.4837 2.6373 22.3912 2.8473 23.1875 3.15605C24.0125 3.47355 24.7075 3.90355 25.4025 4.59855C26.038 5.22306 26.5298 5.97848 26.8437 6.8123C27.1525 7.60855 27.3625 8.5173 27.425 9.8473C27.44 10.1798 27.4525 10.4573 27.4625 10.7373L27.47 10.9798C27.4922 11.8913 27.5018 12.803 27.4987 13.7148L27.5 14.6473V16.2848C27.5031 17.197 27.4935 18.1091 27.4712 19.0211L27.4637 19.2636C27.4537 19.5436 27.4412 19.8198 27.4262 20.1536C27.3637 21.4836 27.1512 22.3911 26.8437 23.1873C26.5308 24.022 26.0389 24.7781 25.4025 25.4023C24.7774 26.0377 24.0216 26.5295 23.1875 26.8436C22.3912 27.1523 21.4837 27.3623 20.1537 27.4248C19.82 27.4398 19.5437 27.4523 19.2637 27.4623L19.0212 27.4698C18.1093 27.492 17.1972 27.5016 16.285 27.4986L15.3525 27.4998H13.7162C12.8041 27.5029 11.8919 27.4933 10.98 27.4711L10.7375 27.4636C10.4408 27.4528 10.1441 27.4403 9.84749 27.4261C8.51749 27.3636 7.60999 27.1511 6.81249 26.8436C5.97834 26.5302 5.22279 26.0383 4.59874 25.4023C3.96255 24.7777 3.47027 24.0218 3.15624 23.1873C2.84749 22.3911 2.63749 21.4836 2.57499 20.1536C2.56107 19.8569 2.54857 19.5603 2.53749 19.2636L2.53124 19.0211C2.50819 18.1092 2.49778 17.197 2.49999 16.2848V13.7148C2.4965 12.8031 2.50567 11.8913 2.52749 10.9798L2.53624 10.7373C2.54624 10.4573 2.55874 10.1798 2.57374 9.8473C2.63624 8.51605 2.84624 7.6098 3.15499 6.8123C3.4692 5.97808 3.96244 5.22286 4.59999 4.5998C5.22361 3.96324 5.97869 3.47052 6.81249 3.15605C7.60999 2.8473 8.51624 2.6373 9.84749 2.5748L10.7375 2.5373L10.98 2.53105C11.8915 2.50802 12.8032 2.4976 13.715 2.4998L16.285 2.50105ZM15 8.75105C14.1719 8.73934 13.3497 8.89233 12.5812 9.20114C11.8127 9.50994 11.1133 9.9684 10.5235 10.5499C9.93379 11.1313 9.46549 11.8242 9.14585 12.5883C8.82621 13.3523 8.6616 14.1722 8.6616 15.0004C8.6616 15.8286 8.82621 16.6486 9.14585 17.4126C9.46549 18.1766 9.93379 18.8695 10.5235 19.451C11.1133 20.0325 11.8127 20.4909 12.5812 20.7997C13.3497 21.1085 14.1719 21.2615 15 21.2498C16.6576 21.2498 18.2473 20.5913 19.4194 19.4192C20.5915 18.2471 21.25 16.6574 21.25 14.9998C21.25 13.3422 20.5915 11.7525 19.4194 10.5804C18.2473 9.40828 16.6576 8.75105 15 8.75105ZM15 11.2511C15.4981 11.2419 15.9931 11.332 16.456 11.5163C16.9189 11.7006 17.3404 11.9752 17.696 12.3242C18.0515 12.6732 18.334 13.0896 18.5268 13.549C18.7196 14.0084 18.819 14.5016 18.8191 14.9998C18.8192 15.498 18.72 15.9912 18.5273 16.4507C18.3346 16.9102 18.0523 17.3266 17.6969 17.6757C17.3414 18.0248 16.92 18.2996 16.4571 18.4841C15.9943 18.6685 15.4994 18.7588 15.0012 18.7498C14.0067 18.7498 13.0528 18.3547 12.3496 17.6515C11.6463 16.9482 11.2512 15.9944 11.2512 14.9998C11.2512 14.0052 11.6463 13.0514 12.3496 12.3482C13.0528 11.6449 14.0067 11.2498 15.0012 11.2498L15 11.2511ZM21.5625 6.87605C21.1592 6.89219 20.7779 7.06374 20.4982 7.35476C20.2186 7.64579 20.0625 8.03372 20.0625 8.4373C20.0625 8.84088 20.2186 9.22881 20.4982 9.51984C20.7779 9.81086 21.1592 9.98241 21.5625 9.99855C21.9769 9.99855 22.3743 9.83393 22.6673 9.54091C22.9604 9.24788 23.125 8.85045 23.125 8.43605C23.125 8.02165 22.9604 7.62422 22.6673 7.3312C22.3743 7.03817 21.9769 6.87355 21.5625 6.87355V6.87605Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="ps-3">
                  <Link to="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="ps-3">
                  <Link to="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        d="M28.075 7.5C27.1125 7.9375 26.075 8.225 25 8.3625C26.1 7.7 26.95 6.65 27.35 5.3875C26.3125 6.0125 25.1625 6.45 23.95 6.7C22.9625 5.625 21.575 5 20 5C17.0625 5 14.6625 7.4 14.6625 10.3625C14.6625 10.7875 14.7125 11.2 14.8 11.5875C10.35 11.3625 6.38749 9.225 3.74999 5.9875C3.28749 6.775 3.02499 7.7 3.02499 8.675C3.02499 10.5375 3.96249 12.1875 5.41249 13.125C4.52499 13.125 3.69999 12.875 2.97499 12.5V12.5375C2.97499 15.1375 4.82499 17.3125 7.27499 17.8C6.4884 18.0153 5.66261 18.0452 4.86249 17.8875C5.202 18.9531 5.86691 19.8855 6.76376 20.5537C7.66061 21.2218 8.7443 21.5921 9.86249 21.6125C7.96702 23.1131 5.61748 23.9241 3.19999 23.9125C2.77499 23.9125 2.34999 23.8875 1.92499 23.8375C4.29999 25.3625 7.12499 26.25 10.15 26.25C20 26.25 25.4125 18.075 25.4125 10.9875C25.4125 10.75 25.4125 10.525 25.4 10.2875C26.45 9.5375 27.35 8.5875 28.075 7.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </Col>
            {/* <hr />
            <Col md={12} className="text-center">
              <p>
                ©<script>document.write(new Date().getFullYear())</script> Hope
                UI, All Rights Reserved.
              </p>
            </Col> */}
          </Row>
        </Container>
      </footer>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <p className="p-3 mb-0 text-secondary">
                © {currentYear} Hope UI, All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

export default FooterOne;
