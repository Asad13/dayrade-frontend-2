import React, { memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import Card from "../../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

const Uicolor = memo(() => {
  const appName = useSelector(SettingSelector.app_name);
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Similar to the contextual text color classes, easily set the
                background of an element to any contextual class. Anchor
                components will darken on hover, just like the text classes.
                Background utilities{" "}
                <strong>
                  do not set <code>color</code>
                </strong>
                , so in some cases you’ll want to use <code>.text-*</code>{" "}
                utilities.
              </p>
              <Row className="row mt-4">
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
                  <h6>primary</h6>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
                  <h6>Secondary</h6>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-success pt-5 pb-5 text-center rounded"></p>
                  <h6>Success</h6>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
                  <h6>Danger</h6>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
                  <h6>Warning</h6>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-info pt-5 pb-5 text-center rounded"></p>
                  <h6>Info</h6>
                </Col>
                <Col lg={2} md={6} className="text-center mt-4">
                  <p className="bg-light pt-5 pb-5 text-center rounded"></p>
                  <h6>Light</h6>
                </Col>
                <Col lg={2} md={6} className="text-center mt-4">
                  <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
                  <h6>Dark</h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Similar to the contextual text color classes, easily set the
                background of an element to any contextual class. Anchor
                components will darken on hover, just like the text classes.
                Background utilities{" "}
                <strong>
                  do not set <code>color</code>
                </strong>
                , so in some cases you’ll want to use <code>.text-*</code>{" "}
                utilities.
              </p>
              <Row className="mt-4">
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-primary-subtle pt-5 pb-5 text-center rounded font-size-18">
                    primary
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-secondary-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Secondary
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-success-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Success
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-danger-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Danger
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-warning-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Warning
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center">
                  <p className="bg-info-subtle pt-5 pb-5 text-center rounded font-size-18">
                    Info
                  </p>
                </Col>
                <Col lg={2} md={6} className="text-center mt-4">
                  <p className="bg-dark-subtle pt-5 pb-5 text-center rounded font-size-18 text-white">
                    Dark
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Text Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p className="text-primary">.text-primary</p>
              <p className="text-secondary">.text-secondary</p>
              <p className="text-success">.text-success</p>
              <p className="text-danger">.text-danger</p>
              <p className="text-warning">.text-warning</p>
              <p className="text-bg-info">.text-bg-info</p>
              <p className="text-light bg-dark">.text-light</p>
              <p className="text-dark">.text-dark</p>
              <p className="text-muted">.text-muted</p>
              <p className="text-white bg-dark">.text-white</p>
              <p className="text-black-50">.text-black-50</p>
              <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Text Color</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p>
                <Link to="#" className="text-primary">
                  primary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-secondary">
                  Secondary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-success">
                  Success link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-danger">
                  Danger link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-warning">
                  Warning link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-bg-info">
                  bg-Info link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-light bg-dark">
                  Light link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-dark">
                  Dark link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-muted">
                  Muted link
                </Link>
              </p>
              <p className="mb-0">
                <Link to="#" className="text-white bg-dark">
                  White link
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Text Color</h4>
              </div>
            </div>
            <div className="card-body">
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                primary link
              </p>
              <p className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Secondary link
              </p>
              <p className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Success link
              </p>
              <p className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Danger link
              </p>
              <p className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                Warning link
              </p>
              <p className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded">
                bg-Info link
              </p>
              <p className="bg-dark-subtle text-white ps-3 pe-3 pt-2 pb-2 rounded mb-0">
                Dark link
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{appName} Text Color</h4>
              </div>
            </div>
            <div className="card-body">
              <p>
                Contextual text classes also work well on anchors with the
                provided hover and focus states.{" "}
                <strong>
                  Note that the <code>.text-white</code> and{" "}
                  <code>.text-muted</code> class has no additional link styling
                  beyond underline.
                </strong>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-primary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  primary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-secondary-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Secondary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-success-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Success link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-danger-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Danger link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-warning-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Warning link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="bg-info-subtle ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  bg-Info link
                </Link>
              </p>
              <p className="mb-0">
                <Link
                  to="#"
                  className="bg-dark-subtle text-white ps-3 pe-3 pt-2 pb-2 rounded d-inline-block"
                >
                  Dark link
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Fragment>
  );
});

Uicolor.displayName = "Uicolor";
export default Uicolor;
