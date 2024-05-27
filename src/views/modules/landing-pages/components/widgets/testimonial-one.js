import React, { Fragment, memo } from "react";
import { Card } from "react-bootstrap";
import RatingFill from "../widgets/rating-star";

// image
import Image from "../../../../../assets/modules/landing-pages/images/home-2/shape.webp";

const TestimonialOne = memo((props) => {
  return (
    <Fragment>
      <div className=" position-relative">
        <div className="shape">
          <img src={Image} alt={props.id} className="img-fluid" />
        </div>
        <Card.Body className="position-relative">
          <h6 className="mb-3 mt-4">{props.testTitle}</h6>
          <p className="mb-3 line-count-3">{props.testText}</p>
          <div className="border-bottom"></div>
          <div className="d-flex align-items-center mt-3">
            <img
              src={props.testImage}
              alt={props.id}
              className="img-fluid  rounded-pill"
            />
            <div className="ms-3">
              <p className="mb-2">{props.userTitle}</p>
              <div className="d-flex align-items-center">
                <RatingFill unfillStar={1} fillStar={4} />
              </div>
            </div>
          </div>
        </Card.Body>
      </div>
    </Fragment>
  );
});

export default TestimonialOne;
