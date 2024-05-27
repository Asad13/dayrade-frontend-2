import React, { memo, Fragment, useEffect } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

//Choice
import ChoicesJs from "../../../../components/choices";

// Components
import Card from "../../../../components/bootstrap/card";
import Choices from "choices.js";

const options1 = [
  { value: "1", lable: "1" },
  { value: "2", lable: "2" },
  { value: "3", lable: "3" },
  { value: "4", lable: "4" },
];

const options2 = [
  { value: "Choice 1", lable: "Choice 1" },
  { value: "Choice 2", lable: "Choice 2" },
  { value: "Choice 3", lable: "Choice 3" },
  { value: "Choice 4", lable: "Choice 4" },
];

const options3 = [
  { value: "Dropdown item 1", label: "Dropdown item 1" },
  { value: "Dropdown item 2", label: "Dropdown item 2" },
  { value: "Dropdown item 3", label: "Dropdown item 3" },
  { value: "Dropdown item 4", label: "Dropdown item 4" },
  { value: "Dropdown item 5", label: "Dropdown item 5" },
  { value: "Dropdown item 6", label: "Dropdown item 6" },
  { value: "Dropdown item 7", label: "Dropdown item 7" },
  { value: "Dropdown item 8", label: "Dropdown item 8" },
  { value: "Dropdown item 9", label: "Dropdown item 9" },
  { value: "Dropdown item 10", label: "Dropdown item 10" },
];

const options4 = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", lable: "Item 2" },
  { value: "Item 3", lable: "Item 3" },
  { value: "Item 4", lable: "Item 4" },
  { value: "Item 5", lable: "Item 5" },
];

const Choisejs = memo(() => {
  useEffect(() => {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const choicesemailfilter = document.querySelector("#choices-email-filter");
    if (choicesemailfilter) {
      new Choices(choicesemailfilter, {
        editItems: true,
        addItemFilter: function (value) {
          if (!value) {
            return false;
          }
          const regex = EMAIL_REGEX;
          const expression = new RegExp(regex.source, "i");
          return expression.test(value);
        },
      }).setValue(["joe@bloggs.com"]);
    }
    const choicesremove = document.querySelector("#choices-remove-button");
    if (choicesremove) {
      new Choices(choicesremove, {
        delimiter: ",",
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
      });
    }
    const choicestextdisabled = document.querySelector(
      "#choices-text-disabled"
    );
    if (choicestextdisabled) {
      new Choices(choicestextdisabled, {
        addItems: false,
        removeItems: false,
      });
    }
  });

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Choicejs</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Choisejs Plugin refer
                  <Link to="https://uppy.io"> Documentation</Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">A Basic</h4>
              <p>
                In this method, selecting only one option from a lots of options
                while only using up as much space as a single option excepted.
              </p>
            </div>
            <Card.Body className="">
              <ChoicesJs
                options={options1}
                name="choices-multiple-remove-button"
                select="one"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">Multiple Choice</h4>
              <p>
                when the multiple attribute is used with the select element, we
                can enable the selection of multiple options from the list.
              </p>
            </div>
            <Card.Body className="">
              <ChoicesJs
                options={options2}
                name="choices-multiple-remove-button"
                select="multi"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">Text Inputs</h4>
              <p>
                An input element can be displayed in many ways, depending on the
                type attribute. Displays a single-line text input field.
              </p>
            </div>
            <Card.Body className="">
              <input
                className="form-control"
                id="choices-remove-button"
                type="text"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">Option Group</h4>
              <p>
                The optgroup tag is used to group related options in a select
                element (drop-down list).
              </p>
            </div>
            <Card.Body className="">
              <div className="box">
                <select className=" form-control" id="choices-optiongroup">
                  <optgroup label="UK">
                    <option defaultValue="London">London</option>
                    <option defaultValue="Manchester">Manchester</option>
                  </optgroup>
                  <optgroup label="France">
                    <option defaultValue="Paris">Paris</option>
                    <option defaultValue="Marseille">Marseille</option>
                  </optgroup>
                </select>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">Dropdown Items</h4>
              <p>
                A dropdown allows a user to select a value from a series of
                options. A selection dropdown can allow multiple search
                selections.
              </p>
            </div>
            <Card.Body className="">
              {/* <select className="form-control" id="choices-dropdown">
                <option defaultValue="Dropdown item 1">Dropdown item 1</option>
                <option defaultValue="Dropdown item 2">Dropdown item 2</option>
                <option defaultValue="Dropdown item 3">Dropdown item 3</option>
                <option defaultValue="Dropdown item 4">Dropdown item 4</option>
                <option defaultValue="Dropdown item 5">Dropdown item 5</option>
                <option defaultValue="Dropdown item 6">Dropdown item 6</option>
                <option defaultValue="Dropdown item 7">Dropdown item 7</option>
                <option defaultValue="Dropdown item 8">Dropdown item 8</option>
              </select> */}
              <ChoicesJs
                options={options3}
                name="choices-multiple-remove-button"
                select="one"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header">
              <h4 className="card-title">Items Input</h4>
              <p>
                A dropdown allows a user to select a value from a series of
                options(Limit is 5 items).
              </p>
            </div>
            <Card.Body className="">
              {/* <select className="form-control" id="choices-selectitem">
                <option defaultValue="Item 1">Item 1</option>
                <option defaultValue="Item 2">Item 2</option>
                <option defaultValue="Item 3">Item 3</option>
                <option defaultValue="Item 4">Item 4</option>
                <option defaultValue="Item 1">Item 5</option>
                <option defaultValue="Item 2">Item 6</option>
                <option defaultValue="Item 3">Item 7</option>
                <option defaultValue="Item 4">Item 8</option>
                <option defaultValue="Item 1">Item 9</option>
                <option defaultValue="Item 2">Item 10</option>
              </select> */}
              <ChoicesJs
                options={options4}
                name="choices-multiple-remove-button"
                select="multi"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header ">
              <h4 className="card-title">Only Email Address</h4>
              <p>
                An email address identifies an email box to which messages are
                delivered.Only Email type content is available.
              </p>
            </div>
            <Card.Body>
              <input
                className="form-control"
                id="choices-email-filter"
                type="text"
                placeholder="This is a placeholder"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <div className="card-header  ">
              <h4 className="card-title">Email Disable</h4>
              <p>
                An email address identifies an email box to which messages are
                delivered.Only Email type content is available.
              </p>
            </div>
            <Card.Body className="text-start">
              <input
                className="form-control"
                id="choices-text-disabled"
                type="text"
                defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                placeholder="This is a placeholder"
                disabled
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Choisejs.displayName = "Choisejs";
export default Choisejs;
