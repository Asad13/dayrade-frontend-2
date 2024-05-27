import React, { Fragment, memo, useState } from "react";
import { Nav, Offcanvas, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const LandingOffcanvasHeader = memo(() => {
  const [open, setOpen] = useState(false);
  let location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <button
        data-trigger="navbar_main"
        className="d-xl-none btn btn-primary rounded-pill p-1 pt-0"
        type="button"
        onClick={handleShow}
      >
        <svg width="20px" height="20px" viewBox="0 0 24 24" className="icon-20">
          <path
            fill="currentColor"
            d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
          ></path>
        </svg>
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav py-0"
      >
        <Container fluid className="p-lg-0">
          <Offcanvas.Header closeButton className="px-0 mx-3">
            <Link to="home" className="navbar-brand ms-3">
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
                ></rect>
                <rect
                  x="7.72803"
                  y="27.728"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 7.72803 27.728)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="10.5366"
                  y="16.3945"
                  width="16"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5366 16.3945)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="10.5562"
                  y="-0.556152"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5562 -0.556152)"
                  fill="currentColor"
                ></rect>
              </svg>
              <h5 className="logo-title">Hope UI</h5>
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="landing-header">
              <Nav
                as="ul"
                className="navbar-nav iq-nav-menu  list-unstyled"
                id="header-menu"
              >
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/home"
                    } nav-link `}
                    to="#homedata"
                    data-bs-toggle="collapse"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Home
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-18"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 8.5L12 15.5L5 8.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                  <Nav
                    as="ul"
                    className="sub-nav collapse  list-unstyled"
                    id="homedata"
                  >
                    <Nav.Item as="li">
                      <Link
                        className={`${
                          location.pathname === "/landing-pages/home"
                            ? "active"
                            : ""
                        } nav-link `}
                        to="/landing-pages/home"
                      >
                        App Landing Page
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        className={`${
                          location.pathname ===
                          "/landing-pages/sass-marketing-page"
                            ? "active"
                            : ""
                        } nav-link `}
                        to="/landing-pages/sass-marketing-landing-page"
                      >
                        Saas Landing Page
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        className={`${
                          location.pathname ===
                          "/landing-pages/software-landing-page"
                            ? "active"
                            : ""
                        } nav-link `}
                        to="/landing-pages/software-landing-page"
                      >
                        Software Landing Page
                      </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link
                        className={`${
                          location.pathname ===
                          "/landing-pages/start-up-landing-page"
                            ? "active"
                            : ""
                        } nav-link `}
                        to="/landing-pages/start-up-landing-page"
                      >
                        Startup Landing Page
                      </Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/about"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/about"
                  >
                    About Us{" "}
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/features"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/features"
                  >
                    {" "}
                    Features{" "}
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/pricing"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/pricing"
                  >
                    Pricing
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className=" d-xl-none">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/blog"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/blog"
                  >
                    Blog
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="d-xl-none">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/shop"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/shop"
                  >
                    {" "}
                    Shop
                  </Link>
                </Nav.Item>

                <Nav.Item as="li" className="d-xl-none">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/faq" ? "active" : ""
                    } nav-link `}
                    to="/landing-pages/faq"
                  >
                    Faq
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" className="d-xl-none">
                  <Link
                    className={`${
                      location.pathname === "/landing-pages/contact-us"
                        ? "active"
                        : ""
                    } nav-link `}
                    to="/landing-pages/contact-us"
                  >
                    Contact Us
                  </Link>
                </Nav.Item>
              </Nav>
              {/* <ul className="navbar-nav iq-nav-menu  list-unstyled">
              <Nav.Item as="li">
                <Link className={` ${location.pathname === '/landing-pages/home' ? 'active' : ''} nav-link`} to="/landing-pages/home">home</Link>
                  </Nav.Item>
              <Nav.Item as="li">
                <Link className={` ${location.pathname === '/landing-pages/blog' ? 'active' : ''} nav-link`} to="/landing-pages/blog">Blog</Link>
                  </Nav.Item>
                <Nav.Item as="li">
                  <Link className={` ${location.pathname === '/landing-pages/shop' ? 'active' : ''} nav-link`} to="/landing-pages/shop"> Shop</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/faq' ? 'active' : ''} nav-link `} to="/landing-pages/faq">Faq</Link>
                  </Nav.Item>
                <Nav.Item as="li">
                  <Link className={`${location.pathname === '/landing-pages/contact-us' ? 'active' : ''} nav-link `} to="/landing-pages/contact-us">Contact Us</Link>
                  </Nav.Item>   
              </ul> */}
            </div>
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </Fragment>
  );
});

export default LandingOffcanvasHeader;
