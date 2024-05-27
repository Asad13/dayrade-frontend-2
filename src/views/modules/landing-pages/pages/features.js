import React, { Fragment, memo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import BlogWidget from "../components/widgets/blog";
import SubHeader from "../components/widgets/sub-header";
import TestimonialOne from "../components/widgets/testimonial-one";
import FeatureWidget from "../components/widgets/features";
// import TestimonialTwo from '../modules/landing-pages/components/widgets/testimonial-two'

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// image
import Image1 from "../../../../assets/modules/landing-pages/images/home-1/04.webp";
import Image2 from "../../../../assets/modules/landing-pages/images/home-1/05.webp";
import image3 from "../../../../assets/modules/landing-pages/images/home-1/06.webp";
import image4 from "../../../../assets/modules/landing-pages/images/home-2/user-1.webp";
import image5 from "../../../../assets/modules/landing-pages/images/home-2/user-2.webp";
import image6 from "../../../../assets/modules/landing-pages/images/home-2/user-3.webp";

const Features = memo(() => {
  return (
    <Fragment>
      <SubHeader title={"Features"} />
      <div className="section-card-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">
                Features
              </div>
              <h2 className="mb-4 mb-lg-5">
                Features Provided <span className="text-primary">For You </span>
              </h2>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3">
            <Col>
              <Card className="feature-card card-block card-stretch card-height">
                <Card.Body>
                  <svg
                    className="mb-4"
                    width="50"
                    height="50"
                    viewBox="0 0 54 54"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.0737 9.81457C22.2095 10.091 22.2992 10.3871 22.3394 10.6914L23.0819 21.7312L23.4504 27.28C23.4542 27.8507 23.5438 28.4176 23.7161 28.9626C24.1613 30.02 25.2321 30.692 26.3971 30.6452L44.1499 29.484C44.9186 29.4713 45.661 29.7588 46.2136 30.2832C46.6742 30.7203 46.9715 31.292 47.0652 31.9069L47.0966 32.2803C46.362 42.4529 38.8908 50.9376 28.7393 53.1278C18.5878 55.3181 8.17798 50.6913 3.16157 41.7596C1.71537 39.1647 0.812075 36.3125 0.504693 33.3704C0.376284 32.4995 0.319742 31.6198 0.335619 30.74C0.319765 19.8338 8.08626 10.4051 18.9579 8.13201C20.2664 7.92827 21.5491 8.62096 22.0737 9.81457Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M29.3199 0.335436C41.4796 0.644789 51.6994 9.38869 53.6665 21.166L53.6477 21.2529L53.5941 21.3793L53.6015 21.7262C53.5737 22.1858 53.3962 22.628 53.0904 22.9852C52.7719 23.3573 52.3367 23.6107 51.8574 23.709L51.5652 23.7491L31.0831 25.0762C30.4018 25.1434 29.7234 24.9237 29.2168 24.4718C28.7946 24.0952 28.5246 23.5868 28.4484 23.0391L27.0736 2.58675C27.0497 2.5176 27.0497 2.44263 27.0736 2.37347C27.0924 1.80971 27.3405 1.27682 27.7626 0.893865C28.1847 0.510905 28.7456 0.309784 29.3199 0.335436Z"
                      fill="#3A57E8"
                    ></path>
                  </svg>
                  <FeatureWidget
                    featurTitle="Funtionality"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card card-block card-stretch card-height">
                <Card.Body>
                  <svg
                    className="mb-3"
                    width="50"
                    height="50"
                    viewBox="0 0 44 54"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21.9914 35.4656C10.49 35.4656 0.666016 37.2789 0.666016 44.5322C0.666016 51.7882 10.4287 53.6656 21.9914 53.6656C33.4927 53.6656 43.3167 51.8549 43.3167 44.5989C43.3167 37.3429 33.5567 35.4656 21.9914 35.4656Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M21.9909 28.5565C29.8256 28.5565 36.1029 22.2765 36.1029 14.4445C36.1029 6.61252 29.8256 0.33252 21.9909 0.33252C14.1589 0.33252 7.87891 6.61252 7.87891 14.4445C7.87891 22.2765 14.1589 28.5565 21.9909 28.5565Z"
                      fill="#3A57E8"
                    ></path>
                  </svg>
                  <FeatureWidget
                    featurTitle="User Friendly"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card card-block card-stretch card-height">
                <Card.Body>
                  <svg
                    className="mb-3"
                    width="50"
                    height="50"
                    viewBox="0 0 64 64"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      opacity="0.4"
                      d="M32.2303 58.6666C31.9001 58.6666 31.5699 58.5908 31.2719 58.4365L21.669 53.4655C18.9441 52.0535 16.8125 50.4689 15.148 48.6227C11.505 44.5853 9.47808 39.4026 9.44586 34.0263L9.33311 16.3313C9.31969 14.289 10.6378 12.456 12.6084 11.7657L30.241 5.61802C31.288 5.24409 32.4558 5.23886 33.5216 5.59972L51.2214 11.5382C53.2027 12.1997 54.5423 14.0197 54.553 16.0593L54.6658 33.7675C54.7007 39.1359 52.7436 44.3395 49.1569 48.4214C47.5112 50.2937 45.3984 51.9018 42.7004 53.34L33.1834 58.4234C32.8881 58.5829 32.5605 58.664 32.2303 58.6666Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      d="M30.1837 38.1891C29.6682 38.1917 29.1528 38.0061 28.7554 37.6243L23.6439 32.7083C22.8546 31.9447 22.8466 30.7052 23.6278 29.9365C24.409 29.1651 25.6842 29.1572 26.4762 29.9182L30.1541 33.4535L39.1342 24.5994C39.9181 23.828 41.1933 23.8202 41.9826 24.5811C42.7746 25.3447 42.7826 26.5868 42.0014 27.3529L31.6038 37.606C31.2119 37.993 30.6991 38.1865 30.1837 38.1891Z"
                      fill="#3A57E8"
                    ></path>
                  </svg>
                  <FeatureWidget
                    featurTitle="Data Security"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card card-block card-stretch card-height mb-4 mb-lg-0">
                <Card.Body>
                  <svg
                    className="mb-3"
                    width="50"
                    height="50"
                    viewBox="0 0 64 64"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      opacity="0.4"
                      d="M26.8884 42.5544H9.35373C7.13448 42.5544 5.33301 44.3243 5.33301 46.5046C5.33301 48.6821 7.13448 50.4549 9.35373 50.4549H26.8884C29.1077 50.4549 30.9092 48.6821 30.9092 46.5046C30.9092 44.3243 29.1077 42.5544 26.8884 42.5544Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M58.666 17.0095C58.666 14.8321 56.8645 13.0623 54.6482 13.0623H37.1135C34.8942 13.0623 33.0928 14.8321 33.0928 17.0095C33.0928 19.1899 34.8942 20.9598 37.1135 20.9598H54.6482C56.8645 20.9598 58.666 19.1899 58.666 17.0095Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      d="M23.6736 17.0095C23.6736 21.9873 19.57 26.0219 14.5033 26.0219C9.43965 26.0219 5.33301 21.9873 5.33301 17.0095C5.33301 12.0346 9.43965 8 14.5033 8C19.57 8 23.6736 12.0346 23.6736 17.0095Z"
                      fill="#3A57E8"
                    ></path>
                    <path
                      d="M58.6668 46.3979C58.6668 51.3728 54.5631 55.4074 49.4965 55.4074C44.4328 55.4074 40.3262 51.3728 40.3262 46.3979C40.3262 41.4201 44.4328 37.3855 49.4965 37.3855C54.5631 37.3855 58.6668 41.4201 58.6668 46.3979Z"
                      fill="#3A57E8"
                    ></path>
                  </svg>
                  <FeatureWidget
                    featurTitle="Flexibility"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card card-block card-stretch card-height mb-4 mb-lg-0">
                <Card.Body>
                  <svg
                    className="mb-3"
                    width="50"
                    height="50"
                    viewBox="0 0 64 64"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.6471 12.6333C40.6471 18.556 45.4554 23.3572 51.3867 23.3572C52.0399 23.354 52.6913 23.2913 53.333 23.1699V44.4304C53.333 53.3748 48.057 58.6665 39.0995 58.6665H19.59C10.609 58.6665 5.33301 53.3748 5.33301 44.4304V24.9494C5.33301 16.005 10.609 10.6665 19.59 10.6665H40.8347C40.7087 11.3145 40.6458 11.9732 40.6471 12.6333ZM35.0663 39.7241L42.6872 29.8899V29.8431C43.3396 28.9664 43.1731 27.7302 42.312 27.0567C41.8952 26.735 41.3656 26.5957 40.8441 26.6707C40.3227 26.7457 39.8539 27.0286 39.545 27.4548L33.12 35.7202L25.8039 29.9602C25.3862 29.6348 24.8549 29.4911 24.3298 29.5616C23.8048 29.6321 23.3303 29.9108 23.0135 30.3348L15.1347 40.4967C14.8577 40.8419 14.7086 41.272 14.7126 41.7143C14.6669 42.6082 15.2313 43.4202 16.086 43.69C16.9407 43.9598 17.87 43.6193 18.3472 42.8616L24.9363 34.3387L32.2524 40.0753C32.6685 40.4108 33.2034 40.5629 33.7341 40.4966C34.2648 40.4304 34.7457 40.1515 35.0663 39.7241Z"
                      fill="#3A57E8"
                    ></path>
                    <ellipse
                      opacity="0.4"
                      cx="51.9997"
                      cy="11.9999"
                      rx="6.66667"
                      ry="6.66667"
                      fill="#3A57E8"
                    ></ellipse>
                  </svg>
                  <FeatureWidget
                    featurTitle="Portability"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="feature-card card-block card-stretch card-height">
                <Card.Body>
                  <svg
                    className="mb-3"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.4">
                      <path
                        d="M20.1098 9.021C19.6052 9.021 18.9368 9.011 18.1046 9.011C16.075 9.011 14.4062 7.508 14.4062 5.675V2.459C14.4062 2.206 14.1793 2 13.9005 2H7.98876C5.22989 2 3 4.026 3 6.509V17.284C3 19.889 5.33613 22 8.21894 22H17.0212C19.7712 22 22 19.987 22 17.502V9.471C22 9.217 21.7742 9.012 21.4932 9.013C21.0217 9.016 20.454 9.021 20.1098 9.021Z"
                        fill="#3A57E8"
                      ></path>
                      <path
                        d="M20.1098 14.979C19.6052 14.979 18.9368 14.989 18.1046 14.989C16.075 14.989 14.4062 16.492 14.4062 18.325V21.541C14.4062 21.794 14.1793 22 13.9005 22H7.98876C5.22989 22 3 19.974 3 17.491V6.716C3 4.111 5.33613 2 8.21894 2H17.0212C19.7712 2 22 4.013 22 6.498V14.529C22 14.783 21.7742 14.988 21.4932 14.987C21.0217 14.984 20.454 14.979 20.1098 14.979Z"
                        fill="#3A57E8"
                      ></path>
                    </g>
                    <path
                      d="M8.50545 12.9067C8.06053 12.9067 7.70117 13.2801 7.70117 13.7423V16.9867C7.70117 17.4401 8.06053 17.8134 8.49689 17.8134C8.94181 17.8134 9.30117 17.4401 9.30117 16.9867V13.7423C9.30117 13.2801 8.94181 12.9067 8.50545 12.9067"
                      fill="#3A57E8"
                    ></path>
                    <path
                      d="M12.5965 9.28003C12.1601 9.28003 11.8008 9.65336 11.8008 10.1156V16.9867C11.8008 17.44 12.1601 17.8134 12.5965 17.8134C13.0414 17.8134 13.4008 17.44 13.4008 16.9867V10.1156C13.4008 9.65336 13.0414 9.28003 12.5965 9.28003"
                      fill="#3A57E8"
                    ></path>
                    <path
                      d="M16.6961 6C16.2597 6 15.9004 6.37333 15.9004 6.83556V16.9867C15.9004 17.44 16.2597 17.8133 16.6961 17.8133C17.141 17.8133 17.5004 17.44 17.5004 16.9867V6.83556C17.5004 6.37333 17.141 6 16.6961 6"
                      fill="#3A57E8"
                    ></path>
                  </svg>
                  <FeatureWidget
                    featurTitle="Fast Progress"
                    featurText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-card-padding bg-body">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <div className="mb-2 text-primary text-uppercase sub-title">
                Reviews
              </div>
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
                className="p-0 m-0 mb-2 swiper-wrapper list-inline"
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
                      testImage={image4}
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
                      testImage={image5}
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
                      testImage={image6}
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
                      testImage={image4}
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
                      testImage={image5}
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
                      testImage={image6}
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
      <div className="section-card-padding">
        <Container>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
              <div className="mb-2 text-uppercase text-primary sub-title">
                Blog
              </div>
              <h2 className="text-secondary mb-5 pb-5">
                All The <span className="text-primary">Support you Need</span>
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
                    blogImage={Image1}
                    blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="August 16,2023"
                    Id="1"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={Image2}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="August 17,2023"
                    Id="2"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image3}
                    blogTitle="Generating the best online environment."
                    blogDate="August 18,2023"
                    Id="3"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={Image1}
                    blogTitle="The Cheapest Destinations Of All Time, A List Of Beauty And Budget."
                    blogDate="August 19,2023"
                    Id="4"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={Image2}
                    blogTitle="Technology that unwinds your potential."
                    blogDate="August 20,2023"
                    Id="5"
                  />
                </SwiperSlide>
                <SwiperSlide className="card-slide mb-0 overflow-hidden">
                  <BlogWidget
                    blogImage={image3}
                    blogTitle="Generating the best online environment."
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
    </Fragment>
  );
});
Features.displayName = "Features";
export default Features;
