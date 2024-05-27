import React, { useState, memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Components
import Card from "../../../../components/bootstrap/card";

//Cropper
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

//Img
import Picture from "../../../../assets/images/picture.jpg";

const Imagecopper = memo(() => {
  const [cropData, setCropData] = useState();
  console.log(cropData)
  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <Fragment>
      <Card>
        <Card.Header>
          <h4 className="mb-0">Cropper JS</h4>

          <div className="header-action">
            <a
              href="https://github.com/fengyuanchen/cropperjs#getting-started"
              target="_blank"
              data-bs-toggle="tooltip"
              title="Plugin Detail"
              rel="noreferrer"
            >
              Detail
            </a>
          </div>
        </Card.Header>

        <Card.Body>
          <Row>
            <Col md="9">
              <div className="docs-demo">
                <Cropper
                  src={Picture}
                  preview=".img-preview"
                  onInitialized={(instance) => {
                    setCropper(instance);
                  }}
                  className="img-container"
                />
              </div>
            </Col>
            <Col md="3">
              <div className="docs-preview clearfix">
                <div className="img-preview preview-lg"></div>
                <div className="img-preview preview-md"></div>
                <div className="img-preview preview-sm"></div>
                <div className="img-preview preview-xs"></div>
              </div>
            </Col>
            <Col md="3">
              <Row>
                <Col lg="12">
                  <div className="box">
                    <h1>Preview</h1>
                    <div
                      className="img-preview"
                      style={{
                        width: "100%",
                        height: "100px",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <Button variant="primary my-2" onClick={getCropData}>
                    Crop Image
                  </Button>
                  {cropData !== undefined ? <img style={{ width: "100%" }} src={cropData} alt="cropped" /> : ''}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

Imagecopper.displayName = "Imagecopper";
export default Imagecopper;
