import React, { Fragment, memo } from "react";
import { Card, Col, Row, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TestimonialTwo from "../components/widgets/testimonial-two";
import BlogWidget from "../components/widgets/blog";

//Count-up
import CountUp from "react-countup";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// image
import image1 from "../../../../assets/modules/landing-pages/images/home-4/slider-banner.webp";
import image2 from "../../../../assets/modules/landing-pages/images/home-4/banner-left.webp";
import image3 from "../../../../assets/modules/landing-pages/images/home-4/banner-right.webp";
import image4 from "../../../../assets/modules/landing-pages/images/home-4/service.webp";
import image5 from "../../../../assets/modules/landing-pages/images/home-4/Image-1.webp";
import image6 from "../../../../assets/modules/landing-pages/images/home-4/01.webp";
import image7 from "../../../../assets/modules/landing-pages/images/home-4/08.webp";
import image8 from "../../../../assets/modules/landing-pages/images/home-4/03.webp";
// import image9 from "../../../../assets/modules/landing-pages/images/home-4/01.webp";
import image11 from "../../../../assets/modules/landing-pages/images/home-4/04.webp";
import image12 from "../../../../assets/modules/landing-pages/images/home-4/05.webp";
import image13 from "../../../../assets/modules/landing-pages/images/home-4/02.webp";
import image14 from "../../../../assets/modules/landing-pages/images/home-4/contact.webp";
import client1 from "../../../../assets/modules/landing-pages/images/home-1/12.webp";
import client2 from "../../../../assets/modules/landing-pages/images/home-1/07.webp";
import client3 from "../../../../assets/modules/landing-pages/images/home-1/08.webp";
import client4 from "../../../../assets/modules/landing-pages/images/home-1/09.webp";
import client5 from "../../../../assets/modules/landing-pages/images/home-1/10.webp";
import client6 from "../../../../assets/modules/landing-pages/images/home-1/11.webp";
import customer1 from "../../../../assets/modules/landing-pages/images/home-4/06.webp";
import customer2 from "../../../../assets/modules/landing-pages/images/home-4/07.webp";
import customer3 from "../../../../assets/modules/landing-pages/images/home-4/12.webp";
 
const StartUpLandingPage = memo((props) => {
  return (
    <Fragment>
      <div className="inner-box bg-secondary">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="mb-2 text-uppercase sub-title">grow, with best</div>
              <h1 className="text-white mb-5 text-capitalize">
                Grow <br />
                Professionally <br />{" "}
                <span className="text-primary">With The Best</span>{" "}
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                nullam sit velit nulla. Sollicitudin sed tincidunt nulla sodales
                arcu a.
              </p>
              <div className="d-flex align-items-center mb-lg-0 mb-4 pt-2">
                <Link to="#" className="btn btn-primary text-capitalize">
                  try Free
                </Link>
                <Link to="#" className="btn text-secondary bg-white ms-4 text-capitalize">
                  start now
                </Link>
              </div>
            </Col>
            <Col lg={7}>
              <img src={image1} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <div className="mb-2 text-uppercase text-center text-primary sub-title">
                Our trusted Partners
              </div>
              <h2 className=" text-capitalize mb-4 mb-lg-5 pb-4 pb-lg-5 text-center">Client <span className="text-primary">
                Solutions</span></h2>
              <Row>
                <Col xl={2} lg={4} md={4}>
                  <div className="custom-icon custom-box mx-auto">
                    <img src={client1} alt="client-01" className="img-fluid" />
                  </div>
                </Col>
                <Col xl={2} lg={4} md={4} className="mt-5 mt-md-0">
                  <div className="custom-icon mx-auto">
                    <img src={client2} alt="client-02" className="img-fluid" />
                  </div>
                </Col>
                <Col xl={2} lg={4} md={4} className="mt-5 mt-md-0">
                  <div className="custom-icon custom-box mx-auto">
                    <img src={client3} alt="client-03" className="img-fluid" />
                  </div>
                </Col>
                <Col xl={2} lg={4} md={4} className="mt-5 mt-xl-0">
                  <div className="custom-icon mx-auto">
                    <img src={client4} alt="client-04" className="img-fluid" />
                  </div>
                </Col>
                <Col xl={2} lg={4} md={4} className="mt-5 mt-xl-0">
                  <div className="custom-icon custom-box mx-auto">
                    <img src={client5} alt="client-05" className="img-fluid" />
                  </div>
                </Col>
                <Col xl={2} lg={4} md={4} className="mt-5 mt-xl-0">
                  <div className="custom-icon mx-auto">
                    <img src={client6} alt="client-06" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding  page-bg">
        <Container>
          <Row className="align-items-center mb-4 mb-lg-5">
            <Col lg={6}>
              <div className="mb-2 text-uppercase text-primary sub-title">about us</div>
              <h2 className=" text-capitalize mb-0">
                Get{" "}
                <span className="text-primary">
                  Unique <br />
                  Solutions
                </span>{" "}
                With Us!
              </h2>
            </Col>
            <Col lg={6}>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum ac integer semper sit semper laoreet donec. Vitae
                turpis pretium placerat augue mauris, adipiscing. Risus pretium,
                amet mi fringilla gravida risus accumsan.
              </p>
              <Link to="#" className="btn btn-primary mt-4 mt-lg-5 mb-5 mb-lg-0">
                Know More
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center pt-4 pt-lg-5">
            <Col md={8}>
              <img src={image2} alt="" className="img-fluid mb-4 mb-lg-0" />
            </Col>
            <Col md={4}>
              <img src={image3} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">
                Build better &amp; Faster
              </div>
              <h2 className="text-secondary mb-5 text-capitalize">Make something<br />
                <span className="text-primary">great</span> out of nothing
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center text-center row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 mt-5">
            <Col className="mb-lg-0 mb-4 border-end">
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
            <Col className="mb-lg-0 mb-4 border-end">
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
              <h2 className=" mb-3 counter text-primary">
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
            <Col className="border-end">
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
      <div className="section-padding page-bg">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="mb-3 text-uppercase text-primary  sub-title">our services</div>
              <h2 className=" mb-5 text-secondary">
                Services <span className="text-primary">We Offer</span>
              </h2>
              <p className="mb-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <Link to="#" className="btn btn-primary mt-2 mb-5">
                Know More
              </Link>{" "}
              <img src={image4} alt="" className="img-fluid mt-3" />
            </Col>
            <Col lg={6}>
              <Row className="row-cols-1 row-cols-lg-2 row-cols-md-2">
                <Col>
                  <Card className="services-box-1 rounded-2">
                    <Card.Body className="p-0">
                      <h5 className="mb-4 text-primary">Branding</h5>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                      <Link to="#">Read More</Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="services-box-1 rounded-2">
                    <Card.Body className="p-0">
                      <h5 className="mb-4 text-primary">Design</h5>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                      <Link to="#">Read More</Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="services-box-1 rounded-2 mb-4 mb-lg-0">
                    <Card.Body className="p-0">
                      <h5 className="mb-4 text-primary">Development</h5>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                      <Link to="#">Read More</Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="services-box-1 rounded-2 mb-0">
                    <Card.Body className="p-0">
                      <h5 className="mb-4 text-primary">Marketing</h5>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                      <Link to="#">Read More</Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="mb-2 text-uppercase text-primary sub-title">Why choose us?</div>
              <h2 className=" mb-5">
                We Make{" "}
                <span className="text-primary">
                  Your <br />
                  Idea Come True
                </span>
              </h2>
              <p className="mb-5">
                Orci ipsum tempus amet libero turpis enim sed quis. Maecenas
                suspendisse ac integer orci, suspendisse nulla. Dignissim
                pretium enim neque facilisi faucibus magna lectus ipsum feugiat.
              </p>
              <Row className="row-cols-1 row-cols-lg-2 ">
                <Col className=" mb-4">
                  <div className="d-flex align-items-center">
                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M14.3402 0.499786H5.67024C2.28024 0.499786 0.000244141 2.87979 0.000244141 6.41979V14.5898C0.000244141 18.1198 2.28024 20.4998 5.67024 20.4998H14.3402C17.7302 20.4998 20.0002 18.1198 20.0002 14.5898V6.41979C20.0002 2.87979 17.7302 0.499786 14.3402 0.499786Z" fill="#3A57E8"></path>
                      <path d="M8.81332 13.7479C8.58932 13.7479 8.36532 13.6629 8.19432 13.4919L5.82132 11.1189C5.47932 10.7769 5.47932 10.2229 5.82132 9.88187C6.16332 9.53987 6.71632 9.53887 7.05832 9.88087L8.81332 11.6359L12.9413 7.50787C13.2833 7.16587 13.8363 7.16587 14.1783 7.50787C14.5203 7.84987 14.5203 8.40387 14.1783 8.74587L9.43232 13.4919C9.26132 13.6629 9.03732 13.7479 8.81332 13.7479Z" fill="white"></path>
                    </svg>
                    Easy Communication
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="d-flex align-items-center">
                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M14.3402 0.499786H5.67024C2.28024 0.499786 0.000244141 2.87979 0.000244141 6.41979V14.5898C0.000244141 18.1198 2.28024 20.4998 5.67024 20.4998H14.3402C17.7302 20.4998 20.0002 18.1198 20.0002 14.5898V6.41979C20.0002 2.87979 17.7302 0.499786 14.3402 0.499786Z" fill="#3A57E8"></path>
                      <path d="M8.81332 13.7479C8.58932 13.7479 8.36532 13.6629 8.19432 13.4919L5.82132 11.1189C5.47932 10.7769 5.47932 10.2229 5.82132 9.88187C6.16332 9.53987 6.71632 9.53887 7.05832 9.88087L8.81332 11.6359L12.9413 7.50787C13.2833 7.16587 13.8363 7.16587 14.1783 7.50787C14.5203 7.84987 14.5203 8.40387 14.1783 8.74587L9.43232 13.4919C9.26132 13.6629 9.03732 13.7479 8.81332 13.7479Z" fill="white"></path>
                    </svg>
                    Expert Advise
                  </div>
                </Col>
                <Col className="mb-2">
                  <div className="d-flex align-items-center">
                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M14.3402 0.499786H5.67024C2.28024 0.499786 0.000244141 2.87979 0.000244141 6.41979V14.5898C0.000244141 18.1198 2.28024 20.4998 5.67024 20.4998H14.3402C17.7302 20.4998 20.0002 18.1198 20.0002 14.5898V6.41979C20.0002 2.87979 17.7302 0.499786 14.3402 0.499786Z" fill="#3A57E8"></path>
                      <path d="M8.81332 13.7479C8.58932 13.7479 8.36532 13.6629 8.19432 13.4919L5.82132 11.1189C5.47932 10.7769 5.47932 10.2229 5.82132 9.88187C6.16332 9.53987 6.71632 9.53887 7.05832 9.88087L8.81332 11.6359L12.9413 7.50787C13.2833 7.16587 13.8363 7.16587 14.1783 7.50787C14.5203 7.84987 14.5203 8.40387 14.1783 8.74587L9.43232 13.4919C9.26132 13.6629 9.03732 13.7479 8.81332 13.7479Z" fill="white"></path>
                    </svg>
                    Security Assured
                  </div>
                </Col>
                <Col className="mb-2">
                  <div className="d-flex align-items-center">
                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M14.3402 0.499786H5.67024C2.28024 0.499786 0.000244141 2.87979 0.000244141 6.41979V14.5898C0.000244141 18.1198 2.28024 20.4998 5.67024 20.4998H14.3402C17.7302 20.4998 20.0002 18.1198 20.0002 14.5898V6.41979C20.0002 2.87979 17.7302 0.499786 14.3402 0.499786Z" fill="#3A57E8"></path>
                      <path d="M8.81332 13.7479C8.58932 13.7479 8.36532 13.6629 8.19432 13.4919L5.82132 11.1189C5.47932 10.7769 5.47932 10.2229 5.82132 9.88187C6.16332 9.53987 6.71632 9.53887 7.05832 9.88087L8.81332 11.6359L12.9413 7.50787C13.2833 7.16587 13.8363 7.16587 14.1783 7.50787C14.5203 7.84987 14.5203 8.40387 14.1783 8.74587L9.43232 13.4919C9.26132 13.6629 9.03732 13.7479 8.81332 13.7479Z" fill="white"></path>
                    </svg>
                    Pocket Friendly Prices
                  </div>
                </Col>
              </Row>{" "}
              <Link to="#" className="btn btn-primary mt-5">
                Know More
              </Link>
            </Col>
            <Col md={6}>
              <img src={image5} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-card-padding  bg-body">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">Our Projects</div>
              <h2 className="text-secondary mb-5 pb-5 text-capitalize">
                Some Of Our{" "}
                <span className="text-primary">Selected Projects</span>
              </h2>
            </Col>
            <div
              className="overflow-hidden slider-circle-btn  "
              id="app-slider"
            >
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
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image6}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Cubix</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
                </SwiperSlide>
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image8}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Radical Toast</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
                </SwiperSlide>
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image7}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Erbology</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
                </SwiperSlide>
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image6}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Cubix</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
                </SwiperSlide>
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image7}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Radical Toast</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
                </SwiperSlide>
                <SwiperSlide className="card card-slide overflow-hidden">
                  <img
                    src={image8}
                    alt="team-details"
                    className="img-fluid"
                    loading="lazy"
                  />
                  <Card.Body>
                    <h5 className="mb-3">Erbology</h5>
                    <p className="line-count-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate aliquet egestas vestibulum nulla diam tortor
                      aliquet facilisis.{" "}
                    </p>
                    <Link to="#">Read More</Link>
                  </Card.Body>
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
                      <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
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
                  <p className="border-bottom pb-4 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul className="list-unstyled pt-4">
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
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
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      10 users included
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M3.81344 6.87296C3.58944 6.87296 3.36544 6.78796 3.19444 6.61696L0.821441 4.24396C0.479441 3.90196 0.479441 3.34797 0.821441 3.00696C1.16344 2.66496 1.71644 2.66396 2.05844 3.00596L3.81344 4.76096L7.94144 0.632965C8.28344 0.290965 8.83644 0.290965 9.17844 0.632965C9.52044 0.974965 9.52044 1.52896 9.17844 1.87096L4.43244 6.61696C4.26144 6.78796 4.03744 6.87296 3.81344 6.87296Z" fill="currentColor"></path>
                      </svg>{" "}
                      2GB of storage
                    </li>
                    <li className="mb-2">
                    <svg className="text-success me-2" width="10" height="7" viewBox="0 0 10 7" fill="none">
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
      <div className="section-card-padding page-bg">
        <Container>
          <Row>
            <Col md={9}>
              <div className="mb-2 text-uppercase text-primary sub-title">Reviews</div>
              <h2 className="text-secondary mb-5 pb-5 text-capitalize">
                What Our{" "}
                <span className="text-primary">
                  Customer’s <br /> Are Saying{" "}
                </span>{" "}
              </h2>
            </Col>
            <Col md={3}></Col>
            <div
              className="overflow-hidden slider-circle-btn"
              id="testimonial-slider-two"
            >
              <Swiper
                className="p-0 m-0 mb-2 swiper-wrapper list-inline"
                slidesPerView={2}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                  nextEl: "#testimonial-slider-next",
                  prevEl: "#testimonial-slider-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 1 },
                  991: { slidesPerView: 2 },
                  1400: { slidesPerView: 2 },
                  1500: { slidesPerView: 2 },
                  1920: { slidesPerView: 2.24 },
                  2040: { slidesPerView: 2.5 },
                  2440: { slidesPerView: 3 },
                }}
              >
                <SwiperSlide className="card-slide overflow-hidden">
                  <TestimonialTwo
                    testImage={customer1}
                    Id="01"
                    testTitle="Eleen Rogers"
                    testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus.”"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden">
                  <TestimonialTwo
                    testImage={customer2}
                    Id="02"
                    testTitle="Eleen Rogers"
                    testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus.”"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden">
                  <TestimonialTwo
                    testImage={customer3}
                    Id="01"
                    testTitle="Eleen Rogers"
                    testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus.”"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden">
                  <TestimonialTwo
                    testImage={customer2}
                    Id="01"
                    testTitle="Eleen Rogers"
                    testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus.”"
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
      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">Blog</div>
              <h2 className="text-secondary mb-5 pb-5">
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
                    blogImage={image11}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 16,2023"
                    Id="1"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image12}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 17,2023"
                    Id="2"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image13}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 18,2023"
                    Id="3"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image11}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 19,2023"
                    Id="4"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image12}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 20,2023"
                    Id="5"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image13}
                    blogTitle="The Expierience: Travel Tales From India and Abroad."
                    blogDate="August 21,2023"
                    Id="6"
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
      <div className="section-padding contact-banner">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="mb-2 text-uppercase text-white sub-title">Contact Us</div>
              <h2 className="text-white mb-5 pb-2">
                Have any query? <br />{" "}
                <span className="text-primary"> Get in Touch.</span>
              </h2>
              <img
                src={image14}
                alt={props.Id}
                className="img-fluid"
                loading="lazy"
              />
            </Col>
            <Col lg={6} className="pt-4 pt-lg-5 mt-4 mt-lg-5 contact-box">
              <Row>
              <Form.Group className="form-group col-lg-6 col-md-6">
                <Form.Label htmlFor="first-name" className="form-label text-white">
                  First Name
                </Form.Label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group className="form-group col-lg-6 col-md-6">
                <Form.Label htmlFor="last-name" className="form-label text-white">
                  Last Name
                </Form.Label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group className="form-group col-lg-12">
                <Form.Label htmlFor="your-email" className="form-label text-white">
                  Email Id
                </Form.Label>
                <input
                  type="text"
                  className="form-control"
                  id="your-email"
                  placeholder="You@company.com"
                />
              </Form.Group>
              <Form.Group className="form-group col-lg-12">
                <Form.Label htmlFor="phone-number" className="form-label text-white">
                  Phone Number
                </Form.Label>
                <input
                  type="text"
                  className="form-control"
                  id="phone-number"
                  placeholder="+1(555)000-0000"
                />
              </Form.Group>
              <Form.Group className="form-group mb-4 col-lg-12">
                <Form.Label htmlFor="message" className="form-label text-white">
                  Message
                </Form.Label>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  className="form-control"
                  placeholder="    Leave Us a message..."
                ></textarea>
              </Form.Group>
              <Form.Group className="form-group mb-4 col-lg-12">
                <Form.Label htmlFor="message" className="form-label text-white">
                Services
                </Form.Label>
                <Row>
                            <Col lg={6} md={6} className="mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                <label className="form-check-label text-white ms-2" htmlFor="flexCheckDefault1">
                                    Website Design
                                </label>
                            </Col>
                            <Col lg={6} md={6} className="mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                <label className="form-check-label text-white ms-2" htmlFor="flexCheckDefault2">
                                   Content Creation
                                </label>
                            </Col>
                            <Col lg={6} md={6} className="mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                <label className="form-check-label text-white ms-2" htmlFor="flexCheckDefault3">
                                   UX Design
                                </label>
                            </Col>
                            <Col lg={6} md={6} className="mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                <label className="form-check-label ms-2 text-white" htmlFor="flexCheckDefault4">
                                  Strategy &amp; Consulting
                                </label>
                            </Col>
                            <Col lg={6} md={6}>
                                <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault5" />
                                <label className="form-check-label ms-2 text-white" htmlFor="flexCheckDefault5">
                                  User Research
                                </label>
                            </Col>
                            <Col lg={6} md={6} >
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                <label className="form-check-label ms-2 text-white" htmlFor="flexCheckDefault6">
                                  Other
                                </label>
                            </Col>
                        </Row>
              </Form.Group>
              <Col lg={12}>
              <Link to="#" className="btn btn-primary w-100">
                Submit
              </Link>
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

export default StartUpLandingPage;
