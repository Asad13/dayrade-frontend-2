import React, { Fragment, memo } from "react";
import Logo from "../../../../../../components/partials/components/logo";
import { Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
//Router
import { Link, useLocation } from "react-router-dom";

const HorizontalNav = memo(() => {
  let location = useLocation();

  return (
    <Fragment>
      <Navbar
        expand="xl"
        id="navbar_main"
        className="mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav"
      >
        <Container fluid className="p-lg-0">
          <Offcanvas.Header className="px-0">
            <Link to="/landing-pages" className="navbar-brand m-0 d-xl-flex d-none">
              <Logo color="true" />
              <h5 className="logo-title">Hope Ui</h5>
            </Link>
            <button className="btn-close float-end px-3"></button>
          </Offcanvas.Header>
          <Nav
            as="ul"
            className="navbar-nav iq-nav-menu  list-unstyled"
            id="header-menu"
          >
            <Nav.Item as="li">
              <Link
                className={`${
                  location.pathname === "/landing-pages/home"
                } nav-link menu-arrow justify-content-start`}
                to="/landing-pages/home"
              >
                <span className="item-name">Home</span>
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
                className="iq-header-sub-menu list-unstyled collapse"
                id="homeData"
              >
                <Nav.Item as="li">
                  {" "}
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
                      "/landing-pages/sass-marketing-landing-page"
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
                  location.pathname === "/landing-pages/about" ? "active" : ""
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
                  location.pathname === "/landing-pages/pricing" ? "active" : ""
                } nav-link `}
                to="/landing-pages/pricing"
              >
                Pricing
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className=" d-xl-none">
              <Link
                className={`${
                  location.pathname === "/landing-pages/blog" ? "active" : ""
                } nav-link `}
                to="/landing-pages/blog"
              >
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="d-xl-none">
              <Link
                className={`${
                  location.pathname === "/landing-pages/shop" ? "active" : ""
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
        </Container>
        {/* <!-- container-fluid.// --> */}
      </Navbar>
    </Fragment>
  );
});

export default HorizontalNav;
