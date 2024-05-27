import React, { Fragment, memo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Client from "../components/widgets/client";

//Count-up
import CountUp from "react-countup";
import Testiominal from "../components/widgets/testiominal";
import Team from "../components/widgets/team";
import BlogWidget from "../components/widgets/blog";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// image
import image1 from "../../../../assets/modules/landing-pages/images/home-3/banner-right.webp";
import image2 from "../../../../assets/modules/landing-pages/images/home-1/07.webp";
import image3 from "../../../../assets/modules/landing-pages/images/home-1/08.webp";
import image4 from "../../../../assets/modules/landing-pages/images/home-1/09.webp";
import image5 from "../../../../assets/modules/landing-pages/images/home-1/10.webp";
import image6 from "../../../../assets/modules/landing-pages/images/home-1/11.webp";
import image7 from "../../../../assets/modules/landing-pages/images/home-3/business.webp";
import image8 from "../../../../assets/modules/landing-pages/images/home-3/audience.webp";
import image10 from "../../../../assets/modules/landing-pages/images/home-1/team1.webp";
import image11 from "../../../../assets/modules/landing-pages/images/home-1/team2.webp";
import image12 from "../../../../assets/modules/landing-pages/images/home-1/team-3.webp";
import image13 from "../../../../assets/modules/landing-pages/images/home-1/team-4.webp";
import image14 from "../../../../assets/modules/landing-pages/images/home-1/04.webp";
import image15 from "../../../../assets/modules/landing-pages/images/home-1/05.webp";
import image16 from "../../../../assets/modules/landing-pages/images/home-1/06.webp";
import star from "../../../../assets/modules/landing-pages/images/home-1/13.webp";
import test1 from "../../../../assets/modules/landing-pages/images/home-1/14.webp";
import test2 from "../../../../assets/modules/landing-pages/images/home-1/17.webp";
import test3 from "../../../../assets/modules/landing-pages/images/home-1/18.webp";

const SassMarketingLandingPage = memo(() => {
  return (
    <Fragment>
      <div className="banner-one-app section-padding bg-body">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="mb-2 text-primary text-uppercase sub-title">
                Business Development
              </div>
              <h2 className="text-secondary mb-lg-5 mb-4">
                Hope UI is Just What{" "}
                <span className="text-primary">Your Business Need</span>
              </h2>
              <p className="mb-lg-5 mb-4">
                HopeUI CRM and Promoting mechanization stage was built to assist
                your commerce to capture more leads, sustain & near deals.
              </p>
              <div className="d-flex align-items-center store-btn pt-2">
                <Link to="#" className="btn btn-primary">
                  Download Free
                </Link>
                <Link to="#" className="btn btn-secondary ms-4">
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
                    src={star}
                    alt="02"
                    className="img-fluid ps-2 star-icon"
                  ></img>
                </div>
                <h6 className="mb-0 mt-1 text-black">
                  <span>500k+</span> Downloads
                </h6>
              </div>
            </Col>
            <Col lg={7} className="mt-4 mt-lg-0">
              <img src={image1} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="client-box text-center">
        <Container className="container client-list bg-secondary inner-box rounded-3">
          <ul className="p-0 m-0 d-flex align-items-center gap-3  client-mrquee list-unstyled">
            <li className="highway-car ">
              <Client clientImage={image2} alt="01" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image3} alt="02" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image4} alt="03" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image5} alt="04" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image6} alt="05" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image2} alt="01" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image3} alt="02" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image4} alt="03" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image5} alt="04" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image6} alt="05" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image2} alt="01" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image3} alt="02" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image4} alt="03" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image5} alt="04" />
            </li>
            <li className="highway-car ">
              <Client clientImage={image6} alt="05" />
            </li>
          </ul>
        </Container>
      </div>
      <div className="section-padding bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <img src={image7} alt="" className="img-fluid " />
            </Col>
            <Col md={5}>
              <p className="mb-2 text-uppercase text-primary sub-title">
                grow your business
              </p>
              <h2 className="text-secondary mb-lg-5 mb-4">
                Grow{" "}
                <span className="text-primary">
                  Your <br />
                  Activity
                </span>
              </h2>
              <p className="mb-lg-5 mb-4">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize Saasworld to chat or
                video call, share records, and track extend breakthroughs from
                your desktop or versatile.
              </p>
              <Link to="/landing-pages/about" className="btn btn-primary mt-2">
                About us
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <p className="mb-2 text-uppercase text-primary sub-title">
                Grow your audience
              </p>
              <h2 className="mb-lg-5 mb-4 text-capitalize">Improve <span className="text-primary">your<br /> Audience.</span>
                </h2>
              <p className="mb-lg-5 mb-4">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize Saasworld to chat or
                video call, share records, and track extend breakthroughs from
                your desktop or versatile.
              </p>
              <Link
                to="/landing-pages/blog-detail"
                className="btn btn-primary mt-2"
              >
                About us
              </Link>
            </Col>
            <Col md={7}>
              <img src={image8} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-secondary">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-white sub-title">
                Build better &amp; Faster
              </div>
              <h2 className="text-white mb-lg-5 mb-4 pb-4 pb-lg-5 text-capitalize">
                Make something
                <br />
                great out of nothing
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center text-center row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
            <Col className="mb-lg-0 mb-4 border-end border-color-light">
              <h2 className="text-white">
                <CountUp
                  start={0}
                  end={3}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
              </h2>
              <h6 className="text-white">Best Designer Award</h6>
            </Col>
            <Col className="mb-lg-0 mb-4 border-end border-color-light">
              <h2 className="text-white">
                <CountUp
                  start={0}
                  end={50}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="text-white">Loyal Clients</h6>
            </Col>
            <Col className="border-end border-color-light">
              <h2 className="text-white">
                <CountUp
                  start={0}
                  end={158}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="text-white">Nominee Awards</h6>
            </Col>
            <Col>
              <h2 className="text-white">
                <CountUp
                  start={0}
                  end={92}
                  duration={10}
                  useEasing={true}
                  separator=","
                />
                +
              </h2>
              <h6 className="text-white">CSS Designs</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 text-primary text-uppercase sub-title">
                work
              </div>
              <h2 className="text-capitalize">
                How <span className="text-primary">we work</span>{" "}
              </h2>
              <p className="mb-lg-5 mb-4 pb-lg-5 pb-4">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize
                <br /> Saasworld to chat or video call, share records.
              </p>
            </Col>
            <Col lg={4} md={6} className="text-center">
              <div className="services bg-primary-subtle rounded-pill text-center mx-auto mb-4">
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.065 11.1082C22.065 11.8574 22.665 12.4567 23.415 12.4567C24.165 12.4567 24.78 11.8574 24.78 11.1082C24.78 10.3591 24.165 9.74475 23.415 9.74475C22.665 9.74475 22.065 10.3591 22.065 11.1082ZM19.155 20.1582C18.09 21.222 16.62 21.8813 15 21.8813C13.425 21.8813 11.955 21.2669 10.83 20.1582C9.72 19.0344 9.105 17.5661 9.105 15.9928C9.09 14.4345 9.705 12.9662 10.815 11.8424C11.94 10.7187 13.425 10.1044 15 10.1044C16.575 10.1044 18.06 10.7187 19.17 11.8274C20.28 12.9512 20.895 14.4345 20.895 15.9928C20.88 17.626 20.22 19.0944 19.155 20.1582ZM15 12.3519C14.025 12.3519 13.11 12.7264 12.405 13.4307C11.715 14.1199 11.34 15.0339 11.355 15.9778V15.9928C11.355 16.9667 11.73 17.8807 12.42 18.5699C13.11 19.2592 14.025 19.6338 15 19.6338C17.01 19.6338 18.63 18.0006 18.645 15.9928C18.645 15.0189 18.27 14.1049 17.58 13.4157C16.89 12.7264 15.975 12.3519 15 12.3519Z"
                    fill="#3A57E8"
                  />
                  <path
                    opacity="0.4"
                    d="M23.16 5.35461L23.01 5.02497C22.605 4.17092 22.14 3.18202 21.855 2.61265C21.165 1.26415 19.98 0.514983 18.525 0.5H11.46C10.005 0.514983 8.835 1.26415 8.145 2.61265C7.845 3.21199 7.335 4.29079 6.915 5.17481L6.825 5.35461C6.78 5.47447 6.66 5.53441 6.54 5.53441C2.925 5.53441 0 8.47114 0 12.0671V20.9673C0 24.5633 2.925 27.5 6.54 27.5H23.46C27.06 27.5 30 24.5633 30 20.9673V12.0671C30 8.47114 27.06 5.53441 23.46 5.53441C23.325 5.53441 23.22 5.45949 23.16 5.35461Z"
                    fill="#3A57E8"
                  />
                </svg>
              </div>
              <h5 className="mb-4">Capture</h5>
              <p className="mb-0">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize Saasworld to chat or
                video call.
              </p>
            </Col>
            <Col lg={4} md={6} className="text-center">
              <div className="services bg-primary-subtle rounded-pill text-center mx-auto mb-4">
                <svg
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M20.2865 0H7.715C3.155 0 0.5 2.67 0.5 7.245V22.74C0.5 27.39 3.155 30 7.715 30H20.2865C24.92 30 27.5 27.39 27.5 22.74V7.245C27.5 2.67 24.92 0 20.2865 0Z"
                    fill="#3A57E8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.12 6.97498V6.98998C7.4735 6.98998 6.95 7.51498 6.95 8.15998C6.95 8.80498 7.4735 9.32998 8.12 9.32998H12.6035C13.25 9.32998 13.775 8.80498 13.775 8.14348C13.775 7.49998 13.25 6.97498 12.6035 6.97498H8.12ZM19.88 16.11H8.12C7.4735 16.11 6.95 15.585 6.95 14.94C6.95 14.295 7.4735 13.7685 8.12 13.7685H19.88C20.525 13.7685 21.05 14.295 21.05 14.94C21.05 15.585 20.525 16.11 19.88 16.11ZM19.88 22.965H8.12C7.67 23.025 7.235 22.8 6.995 22.425C6.755 22.035 6.755 21.54 6.995 21.165C7.235 20.775 7.67 20.565 8.12 20.61H19.88C20.4785 20.67 20.93 21.18 20.93 21.795C20.93 22.3935 20.4785 22.905 19.88 22.965Z"
                    fill="#3A57E8"
                  />
                </svg>
              </div>
              <h5 className="mb-4">Follow up</h5>
              <p className="mb-0">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize Saasworld to chat or
                video call.
              </p>
            </Col>
            <Col lg={4} md={6} className="text-center mt-4 mt-lg-0">
              <div className="services bg-primary-subtle rounded-pill text-center mx-auto mb-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M21.5105 -0.000244141H8.50546C3.42046 -0.000244141 0.000457764 3.56976 0.000457764 8.87976V21.1348C0.000457764 26.4298 3.42046 29.9998 8.50546 29.9998H21.5105C26.5955 29.9998 30.0005 26.4298 30.0005 21.1348V8.87976C30.0005 3.56976 26.5955 -0.000244141 21.5105 -0.000244141Z"
                    fill="#3A57E8"
                  />
                  <path
                    d="M13.2201 19.8719C12.8841 19.8719 12.5481 19.7444 12.2916 19.4879L8.7321 15.9284C8.2191 15.4154 8.2191 14.5844 8.7321 14.0729C9.2451 13.5599 10.0746 13.5584 10.5876 14.0714L13.2201 16.7039L19.4121 10.5119C19.9251 9.99895 20.7546 9.99895 21.2676 10.5119C21.7806 11.0249 21.7806 11.8559 21.2676 12.3689L14.1486 19.4879C13.8921 19.7444 13.5561 19.8719 13.2201 19.8719Z"
                    fill="#3A57E8"
                  />
                </svg>
              </div>
              <h5 className="mb-4">Close</h5>
              <p className="mb-0">
                Get qualified proposition inside 24 hours. Meet favorites and
                enlist the most excellent fit. Utilize Saasworld to chat or
                video call.
              </p>
            </Col>
            <Col md={12} className="mt-3 mt-lg-5 pt-2 text-center">
              <Link to="#" className="btn btn-primary">
                Know more
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-body">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="mb-2 text-uppercase text-primary sub-title">
                Testimony
              </div>
              <h2 className="text-secondary customer-txt mb-lg-5 mb-4 pb-lg-5 pb-4 text-capitalize">
                What our <span className="text-primary">Customer’s</span> are
                saying
              </h2>
            </Col>
            <div
              className="overflow-hidden slider-circle-btn"
              id="testimonial-slider"
            >
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
                    testImage={test1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Elsa Schmidt"
                    testSubtitle="Spa"
                    testImage={test2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Elsa Schmidt"
                    testSubtitle="Spa"
                    testImage={test3}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Elsa Schmidt"
                    testSubtitle="Spa"
                    testImage={test1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Testiominal
                    testText="Torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis.hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea. Mea facilisis urbanitas.Torquatos nec eu, detr periculis ex, nihil expetendis in mei."
                    testOwner="Elsa Schmidt"
                    testSubtitle="Spa"
                    testImage={test2}
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
      <div className="position-relative video-box">
        <div className="iq-popup-video">
          <div className="iq-video-icon position-absolute ">
            <div className="iq-video bg-primary position-absolute text-center d-inline-block iq-fslightbox-img">
              <Link
                to="https://www.youtube.com/watch?v=VeDdpy4CdeM"
                className="d-blok"
              >
                <svg
                  width="48"
                  className="text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="waves"></div>
          </div>
        </div>
      </div>
      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 sub-title text-uppercase text-primary">
                team
              </div>
              <h2 className="text-secondary mb-lg-5 mb-4 pb-4 pb-lg-5">
                Expert <span className="text-primary">Teams</span>
              </h2>
            </Col>
            <Col lg={3} md={6} sm={2}>
              <Card className="team-image">
                <Team
                  teamImage={image10}
                  teamTitle="Darlene Robertson"
                  teamText="Founder"
                />
              </Card>
            </Col>
            <Col lg={3} md={6} sm={2}>
              <Card className="team-image">
                <Team
                  teamImage={image11}
                  teamTitle="Floyd Miles"
                  teamText="UI designer"
                />
              </Card>
            </Col>
            <Col lg={3} md={6} sm={2}>
              <Card className="team-image">
                <Team
                  teamImage={image12}
                  teamTitle="Arlene McCoy"
                  teamText="Researcher"
                />
              </Card>
            </Col>
            <Col lg={3} md={6} sm={2}>
              <Card className="team-image">
                <Team
                  teamImage={image13}
                  teamTitle="Darlene Robertson"
                  teamText="Founder"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="mb-2 text-primary text-uppercase sub-title">
                Pricing
              </div>
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
              <Link
                to="/landing-pages/contact-us"
                className="btn btn-primary mt-2"
              >
                Contact Us
              </Link>
            </Col>
            <Col lg={8} className="mt-4 mt-lg-0">
              <Row className="iq-star-inserted row-cols-1 row-cols-md-2 row-cols-lg-2 text-center">
                <Col>
                  <Card className="mb-4 mb-lg-0 shadow-lg bg-white">
                    <Card.Body>
                      <h5 className="my-0 fw-normal mb-4">Pro</h5>
                      <div className="d-flex justify-content-center align-items-baseline  mb-4">
                        <h4 className="card-title pricing-card-title mb-0 text-primary">
                          $15
                        </h4>

                        <h6 className="mb-0"> / month</h6>
                      </div>
                      <p className="text-black mb-0">Billed Yearly</p>
                      <p className="text-black">$169.99 Billed Monthly</p>
                      <ul className="list-unstyled my-3 p-0">
                        <li>
                          <p className="mb-4">20 users included</p>
                        </li>
                        <li>
                          <p className="mb-4">10GB of storage</p>
                        </li>
                        <li>
                          <p className="mb-4">Priority email support</p>
                        </li>
                        <li>
                          <p className="mb-4">Help center access</p>
                        </li>
                        <li>
                          <p className="mb-4">Help center access</p>
                        </li>
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
                      <p className="mb-0 text-black">Billed Yearly</p>
                      <p className=" text-black">$169.99 Billed Monthly</p>
                      <ul className="list-unstyled my-3 p-0">
                        <li className="mb-3">30 users included</li>
                        <li className="mb-3">15GB of storage</li>
                        <li className="mb-3">Call and email support</li>
                        <li className="mb-3  text-decoration-line-through">
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
      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <p className="mb-2 text-uppercase text-primary sub-title">Blog</p>
              <h2 className="text-secondary mb-lg-5 mb-4 pb-lg-5 pb-4">
                All the <span className="text-primary">Support you Need</span>
              </h2>
            </Col>
            <div className="overflow-hidden slider-circle-btn" id="app-slider">
              <Swiper
                className="p-0 m-0 mb-2 swiper-wrapper list-inline"
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
                    blogImage={image14}
                    blogTitle="Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="16 August,2023"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image15}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="17 August,2023"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image16}
                    blogTitle="Generating the best online environment."
                    blogDate="18 August,2023"
                  />
                  ``{" "}
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image14}
                    blogTitle="Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="19 August,2023"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image15}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="20 August,2023"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image16}
                    blogTitle="Generating the best online environment."
                    blogDate="21 August,2023"
                  />
                </SwiperSlide>
              </Swiper>
              <div
                className="swiper-button swiper-button-next"
                id="app-slider-next"
              ></div>
              <div
                className="swiper-button swiper-button-prev"
                id="app-slider-prev"
              ></div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="section-padding pt-0">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-uppercase text-primary sub-title mb-2">
                faq
              </div>
              <h2 className="pb-4 pb-lg-5 mb-lg-5 mb-4">
                The Foremost Common{" "}
                <span className="text-primary">Questions</span>
              </h2>
            </Col>
            <Col lg={12}>
              <div
                className="accordion custom-accordion faq"
                id="accordionExample"
              >
                <div className="accordion-item mb-4 pb-2 border-bottom rounded-0">
                  <div className="accordion-header" id="headingOne">
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
                  </div>
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
                  <div className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed px-0 h5 mb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What projects can be done on SAASworld?
                    </button>
                  </div>
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
                  <div className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed h5 px-0 mb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What is the Top Rated program?
                    </button>
                  </div>
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
                  <div className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed h5 px-0 mb-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What’s the difference between finding clients online
                      locally?
                    </button>
                  </div>
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
                  <div className="accordion-header" id="headingFive">
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
                  </div>
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
    </Fragment>
  );
});

export default SassMarketingLandingPage;