import React, { memo, Fragment } from "react";

// react-bootstrap
import { Col, Row, Container, Card } from "react-bootstrap";
import Team from "../components/widgets/team";
import BlogWidget from "../components/widgets/blog";
import Client from "../components/widgets/client";
import Testiominal from "../components/widgets/testiominal";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image from "../../../../assets/modules/landing-pages/images/home-1/banner-top.webp";
import image1 from "../../../../assets/modules/landing-pages/images/home-1/aboutus.webp";
import image2 from "../../../../assets/modules/landing-pages/images/home-1/playstore.webp";
import image3 from "../../../../assets/modules/landing-pages/images/home-1/appstore.webp";
import image4 from "../../../../assets/modules/landing-pages/images/home-1/dwn-1.webp";
import image6 from "../../../../assets/modules/landing-pages/images/home-1/01.webp";
import image7 from "../../../../assets/modules/landing-pages/images/home-1/02.webp";
import image8 from "../../../../assets/modules/landing-pages/images/home-1/03.webp";
import image9 from "../../../../assets/modules/landing-pages/images/home-1/team1.webp";
import image10 from "../../../../assets/modules/landing-pages/images/home-1/team2.webp";
import image11 from "../../../../assets/modules/landing-pages/images/home-1/team-3.webp";
import image12 from "../../../../assets/modules/landing-pages/images/home-1/team-4.webp";
import image13 from "../../../../assets/modules/landing-pages/images/home-1/04.webp";
import image14 from "../../../../assets/modules/landing-pages/images/home-1/05.webp";
import image15 from "../../../../assets/modules/landing-pages/images/home-1/06.webp";
import image16 from "../../../../assets/modules/landing-pages/images/home-1/07.webp";
import image17 from "../../../../assets/modules/landing-pages/images/home-1/08.webp";
import image18 from "../../../../assets/modules/landing-pages/images/home-1/09.webp";
import image19 from "../../../../assets/modules/landing-pages/images/home-1/10.webp";
import image20 from "../../../../assets/modules/landing-pages/images/home-1/11.webp";
import image21 from "../../../../assets/modules/landing-pages/images/home-1/13.webp";
import image22 from "../../../../assets/modules/landing-pages/images/home-1/15.webp";
import image23 from "../../../../assets/modules/landing-pages/images/home-1/16.webp";
import image24 from "../../../../assets/modules/landing-pages/images/home-1/14.webp";
import image25 from "../../../../assets/modules/landing-pages/images/home-1/17.webp";
import image26 from "../../../../assets/modules/landing-pages/images/home-1/18.webp";


//Count-up
import CountUp from "react-countup";

// react-router
import { Link } from "react-router-dom";

const Home = memo(() => {
  return (
    <Fragment>
      <div className="inner-card-box bg-body">
        <Container>
          <Row>
            <Col
              lg={7}
              className="col-lg-7 banner-one-img text-center ms-2 ms-sm-0"
            >
              <img src={image} alt="img" className="img-fluid " />
            </Col>
            <Col lg={5} className="inner-box">
              <div className="mb-2 text-uppercase text-primary sub-title">
                Look fit, feel fit
              </div>
              <h1 className="text-secondary mb-lg-5 mb-4 text-capitalize">
                The Joy Of
                <br />
                <span className="text-primary">Right Health</span>
              </h1>
              <p className="mb-lg-5 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <div className="d-flex align-items-center store-btn pt-2">
                <Link className="btn btn-primary" to="https://hopeui.iqonic.design/">
                  Download Free
                </Link>
                <Link className="btn btn-secondary ms-4" to="https://iqonic.design/product/templates/hope-ui-pro-unlimited/">
                 Buy Pro
                </Link>
              </div>
              <div className="star-box mt-4">
                <div className="d-flex mb-2  align-items-center">
                  <div className="border-end pe-2">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5773)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5773">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5772)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5772">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5778)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5778">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5779)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5779">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.65623 2.03398C9.80257 1.58357 10.4398 1.58358 10.5861 2.03398L12.1443 6.82956C12.2097 7.03099 12.3974 7.16737 12.6092 7.16737H17.6516C18.1252 7.16737 18.3221 7.77338 17.939 8.05174L13.8596 11.0156C13.6883 11.1401 13.6166 11.3607 13.682 11.5622L15.2402 16.3577C15.3865 16.8081 14.871 17.1827 14.4879 16.9043L10.4085 13.9405C10.2372 13.816 10.0052 13.816 9.83382 13.9405L5.75445 16.9043C5.37131 17.1827 4.85581 16.8081 5.00215 16.3577L6.56033 11.5622C6.62578 11.3607 6.55408 11.1401 6.38274 11.0156L2.30337 8.05174C1.92024 7.77338 2.11714 7.16737 2.59072 7.16737H7.6331C7.84489 7.16737 8.0326 7.03099 8.09805 6.82956L9.65623 2.03398Z"
                          fill="#D9D9D9"
                        ></path>
                        <mask
                          id="mask0_1182_914"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="1"
                          width="17"
                          height="16"
                        >
                          <path
                            d="M9.65623 2.03398C9.80257 1.58357 10.4398 1.58358 10.5861 2.03398L12.1443 6.82956C12.2097 7.03099 12.3974 7.16737 12.6092 7.16737H17.6516C18.1252 7.16737 18.3221 7.77338 17.939 8.05174L13.8596 11.0156C13.6883 11.1401 13.6166 11.3607 13.682 11.5622L15.2402 16.3577C15.3865 16.8081 14.871 17.1827 14.4879 16.9043L10.4085 13.9405C10.2372 13.816 10.0052 13.816 9.83382 13.9405L5.75445 16.9043C5.37131 17.1827 4.85581 16.8081 5.00215 16.3577L6.56033 11.5622C6.62578 11.3607 6.55408 11.1401 6.38274 11.0156L2.30337 8.05174C1.92024 7.77338 2.11714 7.16737 2.59072 7.16737H7.6331C7.84489 7.16737 8.0326 7.03099 8.09805 6.82956L9.65623 2.03398Z"
                            fill="#F2B827"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_1182_914)">
                          <rect
                            x="-1"
                            y="0.603027"
                            width="13"
                            height="19"
                            fill="#F2B827"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <img
                    src={image21}
                    alt="02"
                    className="img-fluid ps-2 star-icon"
                  />
                </div>
                <h6 className="mb-0 mt-1 text-black">
                  <span>500k+</span> Downloads
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-secondary features-card">
        <Container>
          <Row className="mx-2 mx-sm-0">
            <Col lg={6}></Col>
            <Col lg={6} className="top-feature">
              <div className="text-right">
                <p className="mb-2 text-uppercase sub-title text-white">
                  Why HopeUI rocks
                </p>
                <h2 className="mb-15 text-white notch-feature-txt mb-5 text-capitalize">
                  Top Notch Features{" "}
                </h2>
                <p className="mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="row-cols-sm-2 row-cols-lg-4">
            <Col>
              <Card className="services-box  rounded-2">
                <Card.Body className="card-body p-0">
                  <h5 className="mb-3">400+ UI <br /> Components</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <svg
                    className="text-primary"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z"
                      fill="currentColor"
                    />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-box  rounded-2">
                <Card.Body className="card-body p-0">
                  <h5 className="mb-3">
                    Refreshing
                    <br /> Design
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <svg
                    className="text-primary"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z"
                      fill="currentColor"
                    />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="services-box  rounded-2">
                <Card.Body className="card-body p-0">
                  <h5 className="mb-3">Universal UI <br />Toolkit</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <svg
                    className="text-primary"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z"
                      fill="currentColor"
                    />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="services-box  rounded-1">
                <Card.Body className="card-body p-0">
                  <h5 className="mb-3">
                    Fully
                    <br /> Responsive
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <svg
                    className="text-primary"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45109 0.343108L5.46396 1.36387L10.0063 1.42104L0.0568434 11.3704L0.787737 12.1013L10.7371 2.15194L10.7943 6.6942L11.8151 6.70706L11.736 0.422159L5.45109 0.343108Z"
                      fill="currentColor"
                    />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col className="md-6">
              <img src={image1} alt="" className="img-fluid " />
            </Col>
            <Col className="md-6">
              <div className="mb-2 text-primary text-uppercase sub-title">
                about us
              </div>
              <h2 className="text-secondary mb-lg-5 mb-4 text-capitalize">
                What They Say <br />
                <span className="text-primary">About Us</span>
              </h2>
              <p className="mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <div className="d-flex align-items-center mb-lg-5 mb-4 about-icon-box">
                <div className="p-2 border border-secondary rounded d-flex text-secondary align-items-center">
                  <svg
                    className=""
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5625 9.00008L7.6875 11.1251L11.9375 6.87508M15.8333 9.00008C15.8333 12.9121 12.662 16.0834 8.75 16.0834C4.83798 16.0834 1.66666 12.9121 1.66666 9.00008C1.66666 5.08806 4.83798 1.91675 8.75 1.91675C12.662 1.91675 15.8333 5.08806 15.8333 9.00008Z"
                      stroke="#001F4C"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mb-0 ms-1">400+ UI Components</span>
                </div>
                <div className="p-2 border border-secondary rounded d-flex text-secondary align-items-center ms-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M5.5625 9.00008L7.6875 11.1251L11.9375 6.87508M15.8333 9.00008C15.8333 12.9121 12.662 16.0834 8.75 16.0834C4.83798 16.0834 1.66666 12.9121 1.66666 9.00008C1.66666 5.08806 4.83798 1.91675 8.75 1.91675C12.662 1.91675 15.8333 5.08806 15.8333 9.00008Z"
                      stroke="#001F4C"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mb-0 ms-1">92+ CSS Designs</span>
                </div>
              </div>
              <Link to="#" className="btn btn-primary mt-2">
                Get Started
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="mb-2 text-primary text-uppercase sub-title">
                Download now
              </div>
              <h2 className="text-secondary mb-lg-5 mb-4 text-capitalize">
                Fast, easy, and <br />{" "}
                <span className="text-primary">Affordable</span>
              </h2>
              <p className="mb-lg-5 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <div className="d-flex align-items-center store-btn flex-wrap pt-2">
                <img src={image2} alt="04" className="img-fluid" />
                <img src={image3} alt="05" className="img-fluid ms-3" />
              </div>
              <div className="star-box mt-4">
                <div className="d-flex mb-2  align-items-center">
                  <div className="border-end pe-2">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5774)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5774">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5776)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5776">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5775)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5775">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1150_5780)">
                          <path
                            d="M7.63067 1.28789C7.76731 0.959376 8.23272 0.959376 8.36936 1.28789L10.0222 5.26187C10.0798 5.40037 10.2101 5.495 10.3596 5.50698L14.6498 5.85093C15.0045 5.87936 15.1483 6.32197 14.8781 6.55343L11.6094 9.35344C11.4954 9.45104 11.4457 9.60416 11.4805 9.75L12.4791 13.9366C12.5617 14.2826 12.1852 14.5562 11.8815 14.3707L8.20848 12.1273C8.08048 12.0491 7.91951 12.0491 7.7915 12.1273L4.11845 14.3707C3.81481 14.5562 3.43831 14.2826 3.52087 13.9366L4.51951 9.75C4.55431 9.60416 4.50456 9.45104 4.39065 9.35344L1.12193 6.55343C0.851714 6.32197 0.995529 5.87936 1.35019 5.85093L5.64043 5.50698C5.78995 5.495 5.92019 5.40037 5.9778 5.26187L7.63067 1.28789Z"
                            fill="#FDB022"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1150_5780">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        className="ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.65623 2.03398C9.80257 1.58357 10.4398 1.58358 10.5861 2.03398L12.1443 6.82956C12.2097 7.03099 12.3974 7.16737 12.6092 7.16737H17.6516C18.1252 7.16737 18.3221 7.77338 17.939 8.05174L13.8596 11.0156C13.6883 11.1401 13.6166 11.3607 13.682 11.5622L15.2402 16.3577C15.3865 16.8081 14.871 17.1827 14.4879 16.9043L10.4085 13.9405C10.2372 13.816 10.0052 13.816 9.83382 13.9405L5.75445 16.9043C5.37131 17.1827 4.85581 16.8081 5.00215 16.3577L6.56033 11.5622C6.62578 11.3607 6.55408 11.1401 6.38274 11.0156L2.30337 8.05174C1.92024 7.77338 2.11714 7.16737 2.59072 7.16737H7.6331C7.84489 7.16737 8.0326 7.03099 8.09805 6.82956L9.65623 2.03398Z"
                          fill="#D9D9D9"
                        ></path>
                        <mask
                          id="mask0_1182_915"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="2"
                          y="1"
                          width="17"
                          height="16"
                        >
                          <path
                            d="M9.65623 2.03398C9.80257 1.58357 10.4398 1.58358 10.5861 2.03398L12.1443 6.82956C12.2097 7.03099 12.3974 7.16737 12.6092 7.16737H17.6516C18.1252 7.16737 18.3221 7.77338 17.939 8.05174L13.8596 11.0156C13.6883 11.1401 13.6166 11.3607 13.682 11.5622L15.2402 16.3577C15.3865 16.8081 14.871 17.1827 14.4879 16.9043L10.4085 13.9405C10.2372 13.816 10.0052 13.816 9.83382 13.9405L5.75445 16.9043C5.37131 17.1827 4.85581 16.8081 5.00215 16.3577L6.56033 11.5622C6.62578 11.3607 6.55408 11.1401 6.38274 11.0156L2.30337 8.05174C1.92024 7.77338 2.11714 7.16737 2.59072 7.16737H7.6331C7.84489 7.16737 8.0326 7.03099 8.09805 6.82956L9.65623 2.03398Z"
                            fill="#F2B827"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_1182_915)">
                          <rect
                            x="-1"
                            y="0.603027"
                            width="13"
                            height="19"
                            fill="#F2B827"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <img
                    src={image21}
                    alt="02"
                    className="img-fluid ps-2 star-icon"
                  />
                </div>
                <h6 className="mb-0 mt-1 text-black">
                  <span>500k+</span> Downloads
                </h6>
              </div>
            </Col>
            <Col lg={7} className="mt-lg-0 mt-5">
              <img src={image4} alt="" className="img-fluid d-block mx-auto" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <p className="mb-2 text-primary text-uppercase sub-title">
                Pricing
              </p>
              <h2 className="text-secondary mb-lg-5 mb-4 text-capitalize">
                Our{" "}
                <span className="text-primary">
                  Price
                  <br /> Plans
                </span>
              </h2>
              <p className="mb-lg-5 mb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <Link href="#" className="btn btn-primary mt-2">
                View demo
              </Link>
            </Col>
            <Col lg={8} className="col-lg-8 mt-4 mt-lg-0">
              <Row className="iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-2 text-center">
                <Col className="col">
                  <Card className="shadow-lg">
                    <Card.Body className="my-2">
                      <h5 className="my-0 fw-normal mb-4">Pro</h5>
                      <div className="d-flex justify-content-center align-items-baseline  mb-4">
                        <h4 className="card-title pricing-card-title mb-0 text-primary">
                          $15{" "}
                        </h4>
                        <h6 className="mb-0"> / month</h6>
                      </div>
                      <p className="text-black mb-0">Billed Yearly</p>
                      <p className="text-black">$169.99 Billed Monthly</p>
                      <ul className="list-unstyled my-3 p-0">
                        <li className="mb-4">20 users included</li>
                        <li className="mb-4">10GB of storage</li>
                        <li className="mb-4">Priority Email support</li>
                        <li className="mb-4">Help center access</li>
                        <li className="mb-4">Help center access</li>
                        <li>
                          <p>Help center access</p>
                        </li>
                      </ul>
                      <button type="button" className="btn btn-primary w-100">
                        Get Started
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="iq-star-inserted-3">
                  <Card className="my-5">
                    <Card.Body className="page-bg">
                      <h5 className="my-0 fw-normal mb-4">Premium</h5>
                      <div className="d-flex justify-content-center align-items-baseline  mb-4">
                        <h4 className="card-title pricing-card-title mb-0 text-primary">
                          $49
                        </h4>
                        <h6 className="mb-0"> / month</h6>
                      </div>
                      <p className="text-black mb-0">Billed Yearly</p>
                      <p className="text-black">$169.99 Billed Monthly</p>
                      <ul className="list-unstyled my-3 p-0">
                        <li className="mb-3">30 users included</li>
                        <li className="mb-3">15GB of storage</li>
                        <li className="mb-3">Call and email support</li>
                        <li className="mb-3 text-decoration-line-through">
                          Help center access
                        </li>
                        <li className="mb-3">Help center access</li>
                        <li>Help center access</li>
                      </ul>
                      <button
                        type="button"
                        className="btn custom-btn btn-white w-100 shadow"
                      >
                        Get Started
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="inner-box overflow-hidden">
        <div className="container-fluid">
          <Row>
            <div className="col-md-12 text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">
                App Screenshots
              </div>
              <h2 className="text-secondary mb-4 mb-lg-5 text-capitalize">
                Seamless User Experience, Assured!
              </h2>
              <p className="mb-4 mb-lg-5 pb-4 pb-lg-5">
                It is specially designed for any kind of mobile app, software,
                sass, startup, <br /> marketing, one page and other online
                businesses.{" "}
              </p>
            </div>
          </Row>
          <Row className=" align-items-center justify-content-center">
            <div className="col-lg-2 col-md-6">
              <img
                src={image6}
                alt="10"
                className="img-fluid d-block mx-auto"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="col-lg-2 col-md-6">
              <img
                src={image7}
                alt="11"
                className="img-fluid d-block mx-auto"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="col-lg-3 col-md-12">
              <img
                src={image8}
                alt="12"
                className="img-fluid d-block mx-auto"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="col-lg-2 col-md-6">
              <img
                src={image22}
                alt="13"
                className="img-fluid d-block mx-auto"
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="col-lg-2 col-md-6">
              <img
                src={image23}
                alt="14"
                className="img-fluid d-block mx-auto"
                style={{ filter: "invert(0)" }}
              />
            </div>
          </Row>
        </div>
      </div>

      <div className="section-card-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">team</div>
              <h2 className="text-secondary mb-5 text-capitalize">
                We are a team of dedicated
                <br /> <span className="text-primary">Professionals</span>
              </h2>
              <p className="mb-5">It is a long established fact that a reader will be distracted by the readable
                content<br /> of a page when looking at its layout.
              </p>
            </Col>

          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 pt-5">
            <Col>
              <Card className="team-image">
                <Team
                  teamImage={image9}
                  teamTitle="Darlene Robertson"
                  teamText="Founder"
                />
              </Card>
            </Col>
            <Col>
              <Card className="team-image">
                <Team
                  teamImage={image10}
                  teamTitle="Floyd Miles"
                  teamText="UI designer"
                />
              </Card>
            </Col>
            <Col>
              <Card className="team-image">
                <Team
                  teamImage={image11}
                  teamTitle="Arlene McCoy"
                  teamText="Researcher"
                />
              </Card>
            </Col>
            <Col>
              <Card className="team-image">
                <Team
                  teamImage={image12}
                  teamTitle="Darlene Robertson"
                  teamText="Founder"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <p className="mb-2 text-uppercase text-primary sub-title">Blog</p>
              <h2 className="text-secondary mb-5 text-capitalize">
                All the <span className="text-primary">Support you Need</span>
              </h2>
            </Col>
            <div
              className="overflow-hidden slider-circle-btn mt-5 app-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
              id="app-slider"
            >
              <Swiper
                className="p-0 m-0 swiper-wrapper list-inline"
                id="swiper-wrapper-ece6bc7df0d2e1b6"
                slidesPerView={3}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                  nextEl: "#app-slider-next",
                  prevEl: "#app-slider-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 3 },
                  1500: { slidesPerView: 3 },
                  1920: { slidesPerView: 3 },
                  2040: { slidesPerView: 4 },
                  2440: { slidesPerView: 4 },
                }}
              >
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image13}
                    blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="August 16,2023"
                    Id="1"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image14}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="August 17,2023"
                    Id="2"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image15}
                    blogTitle="Generating the best online environment."
                    blogDate="August 18,2023"
                    Id="3"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image13}
                    blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="August 19,2023"
                    Id="4"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image14}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="August 20,2023"
                    Id="5"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image15}
                    blogTitle="Generating the best online environment."
                    blogDate="August 21,2023"
                    Id="6"
                  />
                </SwiperSlide>
              </Swiper>
              <div
                className="swiper-button swiper-button-next"
                tabIndex="0"
                id="app-slider-prev"
                role="button"
                aria-label="Next slide"
                aria-controls="swiper-wrapper-ece6bc7df0d2e1b6"
                aria-disabled="false"
              ></div>
              <div
                className="swiper-button swiper-button-prev"
                tabIndex="0"
                id="app-slider-prev"
                role="button"
                aria-label="Previous slide"
                aria-controls="swiper-wrapper-ece6bc7df0d2e1b6"
                aria-disabled="false"
              ></div>
            </div>
          </Row>
        </Container>
      </div>

      <div className="section-padding bg-body">
        <Container>
          <Row>
            <Col className="col-md-12 text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">Build better & Faster</div>
              <h2 className="text-secondary mb-5 text-capitalize">Make something<br />
                <span className="text-primary">great </span>
                Out of nothing
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center text-center row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mt-5">
            <Col className="col mb-lg-0 mb-4 border-end">
              <h2 className=" mb-3 counter text-primary">
                <CountUp
                  start={0}
                  end={3}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
              </h2>
              <h6 className="mb-0">Best Designer Award</h6>
            </Col>
            <Col className="col mb-lg-0 mb-4 border-end">
              <h2 className=" mb-3 counter text-primary">
                <CountUp
                  start={0}
                  end={50}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="mb-0">Loyal Clients</h6>
            </Col>
            <Col className="border-end">
              <h2 className=" mb-3 counter text-primary" >
                <CountUp
                  start={0}
                  end={158}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="mb-0">Nominee Awards</h6>
            </Col>
            <Col>
              <h2 className=" mb-3 counter text-primary">
                <CountUp
                  start={0}
                  end={92}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="mb-0">CSS Designs</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-secondary position-relative">
        <Container className="client-list">
          <ul className="p-0 m-0 d-flex align-items-center gap-3  client-mrquee list-unstyled">
            <li className="highway-car ">
              <Client clientImage={image16} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image17} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image18} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image19} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image20} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image16} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image17} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image18} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image19} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image20} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image16} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image17} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image18} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image19} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image20} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image16} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image17} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image18} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image19} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image20} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image16} />
            </li>
            <li className="highway-car ">
              <Client clientImage={image17} />
            </li>

          </ul>
        </Container>
      </div>

      <div className="section-padding">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-2 text-uppercase text-primary sub-title">Testimony</div>
              <h2 className="text-secondary customer-txt mb-5 text-capitalize">
                What our{" "}
                <span className="text-primary">
                  Customer’s
                </span> are saying
              </h2>
            </Col>
            <div
              className="overflow-hidden slider-circle-btn mt-3 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" id="testimonial-slider">
              <Swiper
                className="p-0 m-0 mb-2 swiper-wrapper list-inline"
                slidesPerView={1}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                  nextEl: "#testimonial-slider-next",
                  prevEl: "#testimonial-slider-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 1 },
                  991: { slidesPerView: 1 },
                  1400: { slidesPerView: 1 },
                  1500: { slidesPerView: 1 },
                  1920: { slidesPerView: 1 },
                  2040: { slidesPerView: 1 },
                  2440: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Elsa Schmidt"
                    testSubtitle="Spa"
                    testImage={image24}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Leslie Alexander"
                    testSubtitle="Hair stylist"
                    testImage={image25}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Robert Fox"
                    testSubtitle="Trainer"
                    testImage={image26}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Leslie Alexander"
                    testSubtitle="Hair Stylist"
                    testImage={image25}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Robert Fox"
                    testSubtitle="Trainer"
                    testImage={image24}
                  />
                </SwiperSlide>
              </Swiper>
              <div
                className="swiper-button swiper-button-next"
                id="testimonial-slider-next"
              ></div>
              <div
                className="swiper-button swiper-button-prev"
                id="testimonial-slider-prev"
              ></div>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

Home.displayName = "Home";
export default Home;
