import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";

const Header = memo((props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light main-nav">
        <div className="container-fluid navbar-inner">
          <Link to="#" className="navbar-brand d-lg-none d-flex">
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
            <h5 className="logo-title ms-3 text-white">{props.appName}</h5>
          </Link>
          <button
            className="btn btn-primary d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            Toggle offcanvas
          </button>
          <div
            className="offcanvas-lg offcanvas-end header-one"
            tabindex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <ul className=" navbar-nav iq-nav-menu list-unstyled">
              <li className="nav-item">
                <Link
                  className="nav-link menu-arrow justify-content-start"
                  to="#"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="homeData"
                >
                  Home
                </Link>
                <ul
                  className="iq-header-sub-menu list-unstyled collapse"
                  id="homeData"
                >
                  <li className="nav-item">
                    <Link className="nav-link " to="/landing-pages/home">
                      App Landing Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/landing-pages/saas-marketing-landing-page"
                    >
                      Saas Landing Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/landing-pages/software-landing-page"
                    >
                      Software Landing Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/landing-pages/startup-landing-page"
                    >
                      Startup Landing Page
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/about">
                  about us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/feature">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
            <Link
              to="#"
              className="navbar-brand order-first order-md-0 mx-0 d-flex"
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
              <h5 className="logo-title ms-3 text-white">{props.appName}</h5>
            </Link>
            <ul className=" navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/faq">
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/landing-pages/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
});

export default Header;
