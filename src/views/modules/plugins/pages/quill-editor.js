/* eslint-disable no-unused-vars */
import React, { useState, memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Collapse } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

//Quill
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

//Components
import Card from "../../../../components/bootstrap/card";

const BasicQuill = (props) => {
    const { quillRef } = useQuill();
    return (
        <>
            <div ref={quillRef} style={{ height: 200 }}>{props.children}</div>
        </>
    );
};

const Quilleditor = memo(() => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                        <h4 className="me-2 h4">Quill</h4>
                                    </div>
                                </div>
                                <small>
                                    For more Information regarding quill Plugin refer
                                    <Link to="#"> Documentation</Link>
                                </small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Introduction</h4>
                                <p>
                                    Quill allows several ways to customize it to suit your needs.
                                    This section is dedicated to tweaking existing functionality.
                                </p>
                            </Card.Header.Title>

                        </Card.Header>
                        <Card.Body>
                            <Collapse in={open}>
                                <div>

                                </div>
                            </Collapse>
                            <BasicQuill ></BasicQuill>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
});

Quilleditor.displayName = "Quilleditor";
export default Quilleditor;
