import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery-bar-rating";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import { Card, Col, Row } from "react-bootstrap";

const RatingPage = () => {
  const ratingRef = useRef();

  useEffect(() => {
    $("#square-rating").barrating("show", {
      theme: "bars-square",
      showValues: true,
      showSelectedRating: false,
    });

    $("#horizontal-rating").barrating("show", {
      theme: "bars-horizontal",
      reverse: true,
      hoverState: false,
      initialRating: 4,
    });

    $("#bars-number").barrating("show", {
      theme: "bars-1to10",
    });

    $("#pill-rating").barrating("show", {
      theme: "bars-pill",
      initialRating: "A",
      showValues: true,
      showSelectedRating: false,
      allowEmpty: true,
      emptyValue: "-- no rating selected --",
      onSelect: function (value, text) {
        alert("Selected rating: " + value);
      },
    });

    $("#movie-rating").barrating("show", {
      theme: "bars-movie",
    });

    $("#example-reversed").barrating("show", {
      theme: "bars-reversed",
      showSelectedRating: true,
      reverse: true,
      initialRating: 3,
    });
  }, []);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Rating</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Rating Plugin refer
                  <a href="https://www.npmjs.com/package/jquery-bar-rating">
                    {" "}
                    Documentation
                  </a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Square Rating</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <select
                ref={ratingRef}
                style={{ display: "none" }}
                id="square-rating"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Horizontal Rating</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <select style={{ display: "none" }} id="horizontal-rating">
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1" defaultValue={1}>
                  1
                </option>
              </select>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">1/10 Rating</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <select id="bars-number" style={{ display: "none" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Pill Rating</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <select id="pill-rating" style={{ display: "none" }}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Movie Rating</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <select id="movie-rating" style={{ display: "none" }}>
                <option value="Bad">Bad</option>
                <option value="Mediocre">Mediocre</option>
                <option value="Good">Good</option>
                <option value="Awesome">Awesome</option>
              </select>
            </div>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h4 className="card-title">Reversed Rating</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <select
                id="example-reversed"
                name="rating"
                style={{ display: "none" }}
              >
                <option value={1} data-html="Strongly Agree">
                  Strongly Agree
                </option>
                <option value={2} data-html="Agree">
                  Agree
                </option>
                <option
                  value={3}
                  data-html="Neither Agree or Disagree"
                  defaultValue={3}
                >
                  Neither Agree or Disagree
                </option>
                <option value={4} data-html="Disagree">
                  Disagree
                </option>
                <option value={5} data-html="Strongly Disagree">
                  Strongly Disagree
                </option>
              </select>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RatingPage;
