import React, { useState, useEffect, memo, Fragment, createRef } from "react";

// React-bootstrap
import { Row, Col, Image, Modal, Form, Button } from "react-bootstrap";

// Component
import Card from "../../../../components/bootstrap/card";
import ChoicesJs from "../../../../components/choices";

//Flatpickr
import Flatpickr from "react-flatpickr";

//Moment
import moment from "moment";

//Full calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";

//Img
import img1 from "../../../../assets/modules/appointment/images/users/01.png";
import img2 from "../../../../assets/modules/appointment/images/users/02.png";

const options1 = [
  { value: "Anesthetics", label: "Anesthetics" },
  { value: "Cardiology", label: "Cardiology" },
  { value: "ENT", label: "ENT" },
  { value: "Gastroenterology", label: "Gastroenterology" },
];

const Bookappointment = memo(() => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [isEdit, setIsEdit] = useState(false);

  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : r;
        return v.toString(16);
      }
    );
  };

  const defaultForm = {
    id: uuidv4(),
    title: "",
    start: moment(new Date(), "YYYY-MM-DD").format("YYYY-MM-DD"),
    end: moment(new Date(), "YYYY-MM-DD").format("YYYY-MM-DD"),
    description: "",
    clinics: [],
    backgroundColor: "rgba(58,87,232,0.2)",
    textColor: "rgba(58,87,232,1)",
    borderColor: "rgba(58,87,232,1)",
  };

  const [form, setForm] = useState(defaultForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [events, setEvents] = useState([
    {
      id: uuidv4(),
      title: "5:30a Click for Google 1",
      // url: 'http://google.com/',
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-20, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-20, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
      description: "test",
    },
    {
      id: uuidv4(),
      title: "5:30a All Day Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-18, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-18, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(108,117,125,0.2)",
      textColor: "rgba(108,117,125,1)",
      borderColor: "rgba(108,117,125,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Long Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-16, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-13, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(8,130,12,0.2)",
      textColor: "rgba(8,130,12,1)",
      borderColor: "rgba(8,130,12,1)",
    },

    {
      id: uuidv4(),
      title: "5:30a Repeating Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-12, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-12, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(235,153,27,0.2)",
      textColor: "rgba(235,153,27,1)",
      borderColor: "rgba(235,153,27,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Repeating Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-10, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-10, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(206,32,20,0.2)",
      textColor: "rgba(206,32,20,1)",
      borderColor: "rgba(206,32,20,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Birthday Party",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-8, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-8, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Meeting",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-6, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-6, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Birthday Party",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-5, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-5, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(235,153,27,0.2)",
      textColor: "rgba(235,153,27,1)",
      borderColor: "rgba(235,153,27,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Birthday Party",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(-2, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD")
        .add(-2, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(235,153,27,0.2)",
      textColor: "rgba(235,153,27,1)",
      borderColor: "rgba(235,153,27,1)",
    },

    {
      id: uuidv4(),
      title: "5:30a Meeting",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(0, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD").add(0, "days").format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Click for Google",
      url: "http://google.com/",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(0, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD").add(0, "days").format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Repeating Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(0, "days")
        .format("YYYY-MM-DD"),
      end: moment(new Date(), "YYYY-MM-DD").add(0, "days").format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Birthday Party",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(0, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(235,153,27,0.2)",
      textColor: "rgba(235,153,27,1)",
      borderColor: "rgba(235,153,27,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Doctor Meeting",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(0, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(235,153,27,0.2)",
      textColor: "rgba(235,153,27,1)",
      borderColor: "rgba(235,153,27,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a All Day Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(1, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Repeating Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(8, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
    {
      id: uuidv4(),
      title: "5:30a Repeating Event",
      start: moment(new Date(), "YYYY-MM-DD")
        .add(10, "days")
        .format("YYYY-MM-DD"),
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    },
  ]);
  const [eventupdateid, setEventUpdateid] = useState("");

  function submitForm() {
    if (isEdit) {
      setEvents(
        events.map((ev) => {
          if (ev.id === eventupdateid) {
            ev.title = form.title;
            ev.description = form.description;
            ev.start = moment(form.start, "YYYY-MM-DD").format("YYYY-MM-DD");
            ev.end = moment(form.end, "YYYY-MM-DD").format("YYYY-MM-DD");
            ev.backgroundColor = "rgba(58,87,232,0.2)";
            ev.textColor = "rgba(58,87,232,1)";
            ev.borderColor = "rgba(58,87,232,1)";
          }
          return ev;
        })
      );
    } else {
      setEvents([...events, form]);
    }
    setForm(defaultForm);
  }

  const handleEventClick = (arg) => {
    setIsEdit(true);
    setShow({ modal: !show });
    setForm({
      id: arg.event.id,
      title: arg.event.title,
      start: moment(arg.event.start, "YYYY-MM-DD").format("YYYY-MM-DD"),
      description: arg.event.description,
      clinics: [],
      backgroundColor: "rgba(58,87,232,0.2)",
      textColor: "rgba(58,87,232,1)",
      borderColor: "rgba(58,87,232,1)",
    });
    setEventUpdateid(arg.event.id);
  };

  useEffect(() => {
    return () => events;
  }, [events]);

  const calendarRef = createRef();
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body className=" d-flex align-items-center justify-content-between flex-wrap">
              <div className="card-title mb-0">
                <h4 className="mb-0">Book Appointment</h4>
              </div>
              <div className="card-action mt-2 mt-sm-0">
                <Button href="#" role="button" className="btn-primary">
                  Back
                </Button>{" "}
                <Button
                  variant="primary ms-2 "
                  onClick={() => {
                    setShow(true);
                    setIsEdit(false);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    className="icon-20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>{" "}
                  <span>Book Appointment</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Modal
          className="modal fade"
          id="add-appointment"
          data-bs-keyboard="true"
          tabIndex="-1"
          aria-hidden="true"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title as="h5">
              {isEdit ? "Edit" : "Add"} Appointment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="add-form" action="#javascript:void(0)" method="post">
              <div className="d-flex flex-column align-items-start">
                <input type="hidden" name="id" />
                <input type="hidden" name="appointment_type" />
                <div className=" w-100" id="v-pills-tabContent">
                  <div className="fade active show" id="-3">
                    <Form.Group className="row g-3 align-items-center mb-3">
                      <div className="col-2">
                        <Form.Label
                          htmlFor="addtitle"
                          className="col-form-label"
                        >
                          Title
                        </Form.Label>
                      </div>
                      <div className="col-10">
                        <input
                          type="text"
                          id="addtitle"
                          name="title"
                          onChange={handleChange}
                          className="form-control"
                          defaultValue={form.title}
                          aria-describedby="addtitle"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="row g-3 align-items-center mb-3 iq-muti-date">
                      <div className="col-2">
                        <label htmlFor="nametitle" className="col-form-label">
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.09265 9.40427H20.9166"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16.4421 13.3097H16.4514"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12.0046 13.3097H12.0139"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.5579 13.3097H7.56717"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16.4421 17.1962H16.4514"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M12.0046 17.1962H12.0139"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.5579 17.1962H7.56717"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16.0437 2V5.29078"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.96552 2V5.29078"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </label>
                      </div>
                      <div className="col-10">
                        <Flatpickr
                          value={form.start}
                          onChange={(value) =>
                            handleChange({
                              target: { name: "start", value: value },
                            })
                          }
                          className="form-control date_flatpicker "
                          placeholder="Select Date ..."
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="row g-3 align-items-center mb-3">
                      <div className="col-2">
                        <label className="col-form-label">
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7474 20.4429H21"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.0208 6.00092L16.4731 10.188"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </label>
                      </div>
                      <div className="col-10">
                        <ChoicesJs
                          options={options1}
                          name="choices-multiple-remove-button"
                          select="multi"
                        />
                      </div>
                    </Form.Group>
                    <Form.Group className="row g-3 align-items-center mb-3">
                      <div className="col-2">
                        <label className="col-form-label">
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M15.1655 4.60254L19.7315 9.16854"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </label>
                      </div>
                      <div className="col-10">
                        <textarea
                          name="description"
                          className="form-control"
                          rows="3"
                          placeholder="Detail"
                          defaultValue={form.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Form>
            <div className="d-flex align-items-center justify-content-center form-check">
              <input
                type="checkbox"
                className="form-check-input m-0"
                id="addconfirm2"
                name="confirm"
                value="Bike"
              />
              <label className="form-check-label ms-2" htmlFor="addconfirm2">
                Confirm Information
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="danger" onClick={handleClose}>
              Discard Changes
            </Button>
            <Button
              onClick={() => {
                submitForm();
                handleClose();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        <Col lg="7" className="calendar-s" id="bookingcalendar">
          <Row>
            <Col lg="12">
              <Row>
                <Col lg="12" className="col-lg-12">
                  <Card>
                    <Card.Body>
                      <FullCalendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin, listPlugin, bootstrapPlugin]}
                        dayMaxEvents={4}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                        }}
                        events={events}
                        eventClick={handleEventClick}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg="5">
          <Card>
            <Card.Header>
              <h4 className="mb-0">Available Doctor</h4>
            </Card.Header>
            <Card.Body>
              <div className="d-flex pb-4 gap-3 ">
                <div>
                  <Image
                    className="img-fluid rounded"
                    src={img1}
                    alt="users img"
                    loading="lazy"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
                  <div>
                    <h5 className="mb-0">Ross Geller</h5>
                    <span>Anesthetics</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-24"
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                        fill="#FFD329"
                      ></path>
                    </svg>
                    <p className="text-primary mb-0">5.0</p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <Image
                    className="img-fluid rounded"
                    src={img2}
                    alt="users img"
                    loading="lazy"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
                  <div>
                    <h5 className="mb-0">Ted Mosby</h5>
                    <span>Cardiology</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-24"
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
                        fill="#FFD329"
                      ></path>
                    </svg>
                    <p className="text-primary mb-0">4.5</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-header">
              <h4 className="mb-0">Clinic Map</h4>
            </div>
            <Card.Body>
              <div
                style={{ width: "100%", overflow: "hidden", height: "300px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39797.07748547086!2d5.46683904751879!3d51.433965676849986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d90575ca5e3d%3A0x55989f5f344b006!2sPrins+Hendrikstraat+5!5e0!3m2!1snl!2snl!4v1392716144537"
                  title="iq-map"
                  style={{
                    border: "0",
                    height: "600px",
                    width: "100%",
                    marginTop: "-150px",
                  }}
                  loading="lazy"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Bookappointment.displayName = "Bookappointment";
export default Bookappointment;
