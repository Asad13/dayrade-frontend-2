import React, { memo, Fragment } from "react";

//React-bootstrap
import { Image, Modal, Form, Button } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Component
import Card from "../../../../components/bootstrap/card";
import Postheader from "./post-header";
import Friendcomment from "./friend-comment";

//Img
import img1 from "../../../../assets/modules/social/images/app/01.png";
import img2 from "../../../../assets/modules/social/images/avatar/01.png";
import img3 from "../../../../assets/modules/social/images/avatar/11.png";
import img4 from "../../../../assets/modules/social/images/avatar/05.png";
import img5 from "../../../../assets/modules/social/images/avatar/09.png";

const Imagemodal = memo((props) => {
  return (
    <Fragment>
      <Modal
        className="iq-modal"
        show={props.show}
        onHide={props.onclick}
        dialogClassName="modal-fullscreen-sm-down modal-fullscreen-lx-down image-modal"
      >
        <div className="model-header relative">
          <Button
            variant="close"
            style={{
              position: "absolute",
              right: "0",
              zIndex: "1",
              padding: "10px",
            }}
            onClick={props.onclick}
          ></Button>
        </div>
        <Modal.Body className="p-0">
          <div className="d-flex gap-2">
            <div>
              <Card style={{ height: "100%", width: "100%" }}>
                <Image
                  src={img1}
                  className="img-fluid"
                  alt="post-image"
                  style={{ height: "100%", width: "100%" }}
                  loading="lazy"
                />
              </Card>
            </div>
            <div className=" mt-4">
              <Card className=" mb-0">
                <Postheader
                  userName="Joshua Martin"
                  postStatus="Added New Post"
                  postDuration="3 hrs"
                  userprofile={img2}
                />
                <div className="mt-3 border-bottom"></div>
                <Card.Body>
                  <ul className="list-inline mb-0">
                    <li className="mb-4">
                      <Friendcomment
                        userName="Larry Robbins"
                        userComment="Great Picture Loved It."
                        commentDuration="5 Min Ago"
                        userImage={img3}
                      />
                    </li>
                    <li className="mb-4">
                      <Friendcomment
                        userName="David Willey"
                        userComment="Wow nice place."
                        commentDuration="10 Min Ago"
                        userImage={img4}
                      />
                    </li>
                    <li>
                      <Friendcomment
                        userName="Chaeyoung Park"
                        userComment="Loved It"
                        commentDuration="25 Min Ago"
                        userImage={img5}
                      />
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer className="pt-0">
                  <Form className="iq-social-comment-text position-relative d-flex align-items-center">
                    <Form.Control type="text" placeholder="Add a comment" />
                    <div className="iq-social-comment-attagement d-flex position-absolute gap-3">
                      <Link to="#" className=" text-body">
                        <svg
                          width="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.9999 14.7024V16.0859C21.9999 16.3155 21.9899 16.5471 21.9699 16.7767C21.6893 19.9357 19.4949 22 16.3286 22H7.67126C6.06806 22 4.71535 21.4797 3.74341 20.5363C3.36265 20.1864 3.042 19.7753 2.7915 19.3041C3.12217 18.9021 3.49291 18.462 3.85363 18.0208C4.46485 17.289 5.05603 16.5661 5.42677 16.0959C5.97788 15.4142 7.43078 13.6196 9.44481 14.4617C9.85563 14.6322 10.2164 14.8728 10.547 15.0833C11.3586 15.6247 11.6993 15.7851 12.2705 15.4743C12.9017 15.1335 13.3125 14.4617 13.7434 13.76C13.9739 13.388 14.2043 13.0281 14.4548 12.6972C15.547 11.2736 17.2304 10.8926 18.6332 11.7348C19.3346 12.1559 19.9358 12.6872 20.4969 13.2276C20.6172 13.3479 20.7374 13.4592 20.8476 13.5695C20.9979 13.7198 21.4989 14.2211 21.9999 14.7024Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M16.3387 2H7.67134C4.27455 2 2 4.37607 2 7.91411V16.086C2 17.3181 2.28056 18.4119 2.79158 19.3042C3.12224 18.9022 3.49299 18.4621 3.85371 18.0199C4.46493 17.2891 5.05611 16.5662 5.42685 16.096C5.97796 15.4143 7.43086 13.6197 9.44489 14.4618C9.85571 14.6323 10.2164 14.8729 10.5471 15.0834C11.3587 15.6248 11.6994 15.7852 12.2705 15.4734C12.9018 15.1336 13.3126 14.4618 13.7435 13.759C13.9739 13.3881 14.2044 13.0282 14.4549 12.6973C15.5471 11.2737 17.2305 10.8927 18.6333 11.7349C19.3347 12.1559 19.9359 12.6873 20.497 13.2277C20.6172 13.348 20.7375 13.4593 20.8477 13.5696C20.998 13.7189 21.499 14.2202 22 14.7025V7.91411C22 4.37607 19.7255 2 16.3387 2Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.4543 8.79668C11.4543 10.2053 10.2809 11.3783 8.87313 11.3783C7.46632 11.3783 6.29297 10.2053 6.29297 8.79668C6.29297 7.38909 7.46632 6.21509 8.87313 6.21509C10.2809 6.21509 11.4543 7.38909 11.4543 8.79668Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                      <Link to="#" className="text-body">
                        <svg
                          width="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.71 10.0721C16.71 10.5715 17.11 10.9711 17.61 10.9711C18.11 10.9711 18.52 10.5715 18.52 10.0721C18.52 9.57263 18.11 9.16309 17.61 9.16309C17.11 9.16309 16.71 9.57263 16.71 10.0721ZM14.77 16.1054C14.06 16.8146 13.08 17.2541 12 17.2541C10.95 17.2541 9.97 16.8446 9.22 16.1054C8.48 15.3562 8.07 14.3773 8.07 13.3285C8.06 12.2896 8.47 11.3107 9.21 10.5615C9.96 9.81236 10.95 9.40282 12 9.40282C13.05 9.40282 14.04 9.81236 14.78 10.5515C15.52 11.3007 15.93 12.2896 15.93 13.3285C15.92 14.4172 15.48 15.3962 14.77 16.1054ZM12 10.9012C11.35 10.9012 10.74 11.1509 10.27 11.6204C9.81 12.0798 9.56 12.6892 9.57 13.3185V13.3285C9.57 13.9777 9.82 14.5871 10.28 15.0465C10.74 15.506 11.35 15.7558 12 15.7558C13.34 15.7558 14.42 14.667 14.43 13.3285C14.43 12.6792 14.18 12.0699 13.72 11.6104C13.26 11.1509 12.65 10.9012 12 10.9012Z"
                            fill="currentColor"
                          ></path>
                          <path
                            opacity="0.4"
                            d="M17.44 6.2364L17.34 6.01665C17.07 5.44728 16.76 4.78801 16.57 4.40844C16.11 3.50943 15.32 3.00999 14.35 3H9.64C8.67 3.00999 7.89 3.50943 7.43 4.40844C7.23 4.80799 6.89 5.52719 6.61 6.11654L6.55 6.2364C6.52 6.31632 6.44 6.35627 6.36 6.35627C3.95 6.35627 2 8.3141 2 10.7114V16.6448C2 19.0422 3.95 21 6.36 21H17.64C20.04 21 22 19.0422 22 16.6448V10.7114C22 8.3141 20.04 6.35627 17.64 6.35627C17.55 6.35627 17.48 6.30633 17.44 6.2364Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                      <Link to="#" className="text-body">
                        <svg
                          width="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M16.6667 2H7.33333C3.92889 2 2 3.92889 2 7.33333V16.6667C2 20.0622 3.92 22 7.33333 22H16.6667C20.0711 22 22 20.0622 22 16.6667V7.33333C22 3.92889 20.0711 2 16.6667 2Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M15.3205 12.7083H12.7495V15.257C12.7495 15.6673 12.4139 16 12 16C11.5861 16 11.2505 15.6673 11.2505 15.257V12.7083H8.67955C8.29342 12.6687 8 12.3461 8 11.9613C8 11.5765 8.29342 11.2539 8.67955 11.2143H11.2424V8.67365C11.2824 8.29088 11.6078 8 11.996 8C12.3842 8 12.7095 8.29088 12.7495 8.67365V11.2143H15.3205C15.7066 11.2539 16 11.5765 16 11.9613C16 12.3461 15.7066 12.6687 15.3205 12.7083Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </Form>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});
Imagemodal.displayName = "Imagemodal";
export default Imagemodal;
