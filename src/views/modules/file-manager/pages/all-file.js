import React, { useState, memo, Fragment } from "react";

// React-boostrap
import { Row, Col, Modal, Button } from "react-bootstrap";

// Componet
import Document from "../components/document.js";
import Images from "../components/images.js";
import Video from "../components/video.js";

//Img
import img1 from "../../../../assets/modules/file-manager/images/5.png";
import img2 from "../../../../assets/modules/file-manager/images/6.png";
import img3 from "../../../../assets/modules/file-manager/images/7.png";
import img4 from "../../../../assets/modules/file-manager/images/8.png";
import pdf from "../../../../assets/modules/file-manager/images/pdf.svg";
import excel from "../../../../assets/modules/file-manager/images/excel.svg";
import word from "../../../../assets/modules/file-manager/images/word.svg";
import pptx from "../../../../assets/modules/file-manager/images/ppt.svg";
import UppyDashboard from "../../../../components/UppyDashboard.js";

const Allfile = memo(() => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="border-bottom pb-3 d-flex align-items-center justify-content-between">
        <h5>All-Files</h5>
        <Button variant="primary " onClick={handleShow}>
          <div className="d-flex justify-content-center ">
            <svg
              className="icon-22"
              width="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07996 6.6499V6.6599C7.64896 6.6599 7.29996 7.0099 7.29996 7.4399C7.29996 7.8699 7.64896 8.2199 8.07996 8.2199H11.069C11.5 8.2199 11.85 7.8699 11.85 7.4289C11.85 6.9999 11.5 6.6499 11.069 6.6499H8.07996ZM15.92 12.7399H8.07996C7.64896 12.7399 7.29996 12.3899 7.29996 11.9599C7.29996 11.5299 7.64896 11.1789 8.07996 11.1789H15.92C16.35 11.1789 16.7 11.5299 16.7 11.9599C16.7 12.3899 16.35 12.7399 15.92 12.7399ZM15.92 17.3099H8.07996C7.77996 17.3499 7.48996 17.1999 7.32996 16.9499C7.16996 16.6899 7.16996 16.3599 7.32996 16.1099C7.48996 15.8499 7.77996 15.7099 8.07996 15.7399H15.92C16.319 15.7799 16.62 16.1199 16.62 16.5299C16.62 16.9289 16.319 17.2699 15.92 17.3099Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="ms-3 mb-0">Add Files</p>
          </div>
        </Button>
      </div>
      <h4 className="py-3 mb-0">Documents</h4>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
        <Col>
          <Document
            imageDate="Dec 13, 2020"
            media="pdf"
            imgName="Doc-123472578.pdf"
            imgLink="just now"
            imgChange={pdf}
            imgMb="5mb"
            docType="PDF"
            docName="demo.pdf"
          ></Document>
        </Col>
        <Col>
          <Document
            imageDate="Dec 13, 2020"
            media="xlxs"
            imgName="Doc-25783.xlsx"
            imgLink="2 days ago"
            imgChange={excel}
            imgMb="2mb"
            docType="XLSX"
            docName="demo.xlsx"
          ></Document>
        </Col>
        <Col>
          <Document
            imageDate="Dec 13, 2020"
            media="word"
            imgName="abc-25783.doc"
            imgLink="a month ago"
            imgChange={word}
            imgMb="7mb"
            docType="DOCX"
            docName="demo.docx"
          ></Document>
        </Col>
        <Col>
          <Document
            imageDate="Dec 13, 2020"
            media="xlxs"
            imgName="xyz-25783.pptx"
            imgLink="2 days ago"
            imgChange={pptx}
            imgMb="12mb"
            docType="XLSX"
            docName="demo.xlsx"
          ></Document>
        </Col>
      </Row>
      <h3 className="my-3">Image</h3>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
        <Col>
          <Images
            imageDate="Dec 13, 2020"
            imgName="1234725783"
            imgLink="just now"
            imgChange={img1}
            id={6}
          ></Images>
        </Col>
        <Col>
          <Images
            imageDate="Dec 13, 2020"
            imgName="25783"
            imgLink="2 day ago"
            imgChange={img2}
            id={5}
          ></Images>
        </Col>
        <Col>
          <Images
            imageDate="Dec 13, 2020"
            imgName="49895383"
            imgLink="a month ago"
            imgChange={img3}
            id={2}
          ></Images>
        </Col>
        <Col>
          <Images
            imageDate="Dec 13, 2020"
            imgName="4509853"
            imgLink="2 day ago"
            imgChange={img4}
            id={1}
          ></Images>
        </Col>
      </Row>
      <h3 className="my-3">Videos</h3>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
        <Col>
          <Video
            imageDate="Dec 13, 2020"
            imgName="1234725783.mp4"
            imgLink="just now"
            imgChange={img1}
            id={6}
          ></Video>
        </Col>
        <Col>
          <Video
            imageDate="Dec 13, 2020"
            imgName="25783.mkv"
            imgLink="2 day ago"
            imgChange={img2}
            id={5}
          ></Video>
        </Col>
        <Col>
          <Video
            imageDate="Dec 13, 2020"
            imgName="25783.mkv"
            imgLink="a month ago"
            imgChange={img3}
            id={2}
          ></Video>
        </Col>
        <Col>
          <Video
            imageDate="Dec 13, 2020"
            imgName="25783.mkv"
            imgLink="2 day ago"
            imgChange={img4}
            id={1}
          ></Video>
        </Col>
      </Row>
      <Modal
        className="fade file-manager-modal"
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <UppyDashboard />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});

Allfile.displayName = "Allfile";
export default Allfile;
