import React, { memo, Fragment } from "react";

// react-bootstrap
import { Col, Row, Container, Card } from "react-bootstrap";

import Client from "../components/widgets/client";
import SubHeader from "../components/widgets/sub-header";
import TestimonialOne from "../components/widgets/testimonial-one";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// react-router
import { Link } from "react-router-dom";

// image
import image from "../../../../assets/modules/landing-pages/images/home-4/service.webp";
import Image1 from "../../../../assets/modules/landing-pages/images/home-4/banner-left.webp";
import Image2 from "../../../../assets/modules/landing-pages/images/home-4/banner-right.webp";
import Image4 from "../../../../assets/modules/landing-pages/images/home-4/Image-1.webp";
import image10 from "../../../../assets/modules/landing-pages/images/home-2/user-1.webp";
import image11 from "../../../../assets/modules/landing-pages/images/home-2/user-2.webp";
import image12 from "../../../../assets/modules/landing-pages/images/home-2/user-2.webp";
import client1 from "../../../../assets/modules//landing-pages/images/home-1/07.webp";
import client2 from "../../../../assets/modules//landing-pages/images/home-1/08.webp";
import client3 from "../../../../assets/modules//landing-pages/images/home-1/09.webp";
import client4 from "../../../../assets/modules//landing-pages/images/home-1/10.webp";
import client5 from "../../../../assets/modules//landing-pages/images/home-1/11.webp";
import client6 from "../../../../assets/modules//landing-pages/images/home-1/11.webp";

const About = memo(() => {
  return (
    <Fragment>
      <SubHeader title={"About Us"} />
      <div className="section-padding bg-white">
        <Container className="client-list">
          <Row className="align-items-center mb-4 mb-lg-5">
            <Col lg ={6}>
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
              </p>{" "}
              <Link to="#" className="btn btn-primary mt-4 mt-lg-5 mb-5 mb-lg-0">
                Know More
              </Link>
            </Col>
          </Row>
          <Row className="align-items-center pt-4 pt-lg-5">
            <Col md={8}>
              <img src={Image1} alt="" className="img-fluid mb-4 mb-lg-0" />
            </Col>
            <Col md={4}>
              <img src={Image2} alt="" className="img-fluid " />
            </Col>
            </Row>
            <Row className="align-items-center mt-4 mt-lg-5">
            <Col md={4} className="mt-4 mt-lg-0">
              <Card className="mb-lg-0">
                <Card.Body>
                  <h5 className="mb-4">Our Vision</h5>
                  <p className="mb-0">
                    It Is A Long Established Fact That A Reader Will Be
                    Distracted By The Readable Content Of A Page When Looking At
                    Its Layout.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-lg-0">
                <Card.Body>
                  <h5 className="mb-4">Our Mission</h5>
                  <p className="mb-0">
                    It Is A Long Established Fact That A Reader Will Be
                    Distracted By The Readable Content Of A Page When Looking At
                    Its Layout.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-lg-0">
                <Card.Body>
                  <h5 className="mb-4">Our Strategies</h5>
                  <p className="mb-0">
                    It Is A Long Established Fact That A Reader Will Be
                    Distracted By The Readable Content Of A Page When Looking At
                    Its Layout.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </Container>
      </div>
      <div className="section-padding bg-secondary">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="mb-3 text-uppercase text-white  sub-title">our services</div>
              <h2 className=" mb-4 mb-lg-5 text-white">
                Services <span className="text-white">We Offer</span>
              </h2>
              <p className="mb-4 mb-lg-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>{" "}
              <Link to="#" className="btn btn-primary mt-2 mb-4 mb-lg-5">
                Know More
              </Link>
              <img src={image} alt="" className="img-fluid mt-3" />
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
                  <Col>
                    <Card className="services-box-1 rounded-2 mb-4 mb-lg-0">
                      <Card.Body className="p-0">
                        <h5 className="mb-4 text-primary">Development</h5>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.{" "}
                        </p>
                        <Link to="#">Read More</Link>
                      </Card.Body>
                    </Card>
                  </Col>
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
                <Col className="mb-4">
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
                </Col>{" "}
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
              <Link to="#" className="btn btn-primary mt-4">
                Know More
              </Link>
            </Col>
            <Col md={6} className=" mt-4 mt-md-0">
              <img src={Image4} alt="" className="img-fluid " />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding bg-secondary position-relative">
      <Container className="client-list">
          <ul className="p-0 m-0 d-flex align-items-center gap-3  client-mrquee list-unstyled">
            <li className="highway-car ">
              <Client clientImage={client1} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client2} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client3} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client4} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client5} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client6} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client1} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client2} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client3} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client4} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client5} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client6} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client1} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client2} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client3} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client4} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client5} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client6} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client1} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client4} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client5} />
            </li>
            <li className="highway-car ">
              <Client clientImage={client6} />
            </li>
            
          </ul>
        </Container>
      </div>
      <div className="section-card-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <div className="mb-2 text-primary text-uppercase sub-title">Reviews</div>
              <h2 className="mb-4 mb-lg-5 pb-4 pb-lg-5 text-secondary text-capitalize">
                What our{" "}
                <span className="text-primary">Customer’s are saying</span>
              </h2>
            </Col>
            <div
              className="overflow-hidden slider-circle-btn"
              id="testimonial-one-slider"
            >
              <Swiper
                className="p-0 m-0 swiper-wrapper list-inline"
                slidesPerView={3}
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 3 },
                  1500: { slidesPerView: 3 },
                  1920: { slidesPerView: 3 },
                  2040: { slidesPerView: 3 },
                  2440: { slidesPerView: 3 },
                }}
              >
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="A true game changer."
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image10}
                      userTitle="Eleen Rogers"
                      Id="01"
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="Best you can Get"
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image11}
                      userTitle="Brooklyn Simmons"
                      Id="02"
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="Perfect poduct for your business"
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image12}
                      userTitle="Jenny Wilson"
                      Id="03"
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="A true game changer."
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image10}
                      userTitle="Eleen Rogers"
                      Id="01"
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="Best you can Get"
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image11}
                      userTitle="Brooklyn Simmons"
                      Id="02"
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide className="card-slide overflow-hidden mb-0">
                  <Card>
                    <TestimonialOne
                      testTitle="Perfect poduct for your business"
                      testText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, eget condimentum luctus nec nec tellus sem sed. Diam elementum tellus posuere ipsum tortor.”"
                      testImage={image12}
                      userTitle="Jenny Wilson"
                      Id="03"
                    />
                  </Card>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button swiper-button-next"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </div>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});
About.displayName = "About";
export default About;
