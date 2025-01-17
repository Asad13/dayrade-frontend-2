import React, { useState, memo, Fragment } from "react";

//React-bootstrap
import { Dropdown } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Component
import CustomToggle from "../../../../components/dropdowns";
import ShareOffcanvasNew from "../../../../components/partials/components/shareOffcanvasNew";

const Likeshare = memo((props) => {
  const [save, setSave] = useState(false);
  return (
    <Fragment>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <div className="total-like-block">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                variant="text-body d-flex align-items-center gap-2"
              >
                <svg
                  width="20"
                  className="icon-20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M11.7761 21.8374C9.49311 20.4273 7.37081 18.7645 5.44807 16.8796C4.09069 15.5338 3.05404 13.8905 2.41735 12.0753C1.27971 8.53523 2.60399 4.48948 6.30129 3.2884C8.2528 2.67553 10.3752 3.05175 12.0072 4.29983C13.6398 3.05315 15.7616 2.67705 17.7132 3.2884C21.4105 4.48948 22.7436 8.53523 21.606 12.0753C20.9745 13.8888 19.944 15.5319 18.5931 16.8796C16.6686 18.7625 14.5465 20.4251 12.265 21.8374L12.0161 22L11.7761 21.8374Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.0109 22.0001L11.776 21.8375C9.49013 20.4275 7.36487 18.7648 5.43902 16.8797C4.0752 15.5357 3.03238 13.8923 2.39052 12.0754C1.26177 8.53532 2.58605 4.48957 6.28335 3.28849C8.23486 2.67562 10.3853 3.05213 12.0109 4.31067V22.0001Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.2304 9.99922C18.0296 9.98629 17.8425 9.8859 17.7131 9.72157C17.5836 9.55723 17.5232 9.3434 17.5459 9.13016C17.5677 8.4278 17.168 7.78851 16.5517 7.53977C16.1609 7.43309 15.9243 7.00987 16.022 6.59249C16.1148 6.18182 16.4993 5.92647 16.8858 6.0189C16.9346 6.027 16.9816 6.04468 17.0244 6.07105C18.2601 6.54658 19.0601 7.82641 18.9965 9.22576C18.9944 9.43785 18.9117 9.63998 18.7673 9.78581C18.6229 9.93164 18.4291 10.0087 18.2304 9.99922Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className=" d-none d-sm-block">
                  {props.noLikes} Likes
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Max Emum</Dropdown.Item>
                <Dropdown.Item>Bill Yerds</Dropdown.Item>
                <Dropdown.Item>Hap E. Birthday</Dropdown.Item>
                <Dropdown.Item>Tara Misu</Dropdown.Item>
                <Dropdown.Item>Midge Itz</Dropdown.Item>
                <Dropdown.Item>Sal Vidge</Dropdown.Item>
                <Dropdown.Item>Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="total-comment-block">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                variant="text-body d-flex align-items-center gap-2"
              >
                <svg
                  width="20"
                  className="icon-20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className=" d-none d-sm-block">
                  {props.noComments} Comments
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Max Emum</Dropdown.Item>
                <Dropdown.Item>Bill Yerds</Dropdown.Item>
                <Dropdown.Item>Hap E. Birthday</Dropdown.Item>
                <Dropdown.Item>Tara Misu</Dropdown.Item>
                <Dropdown.Item>Midge Itz</Dropdown.Item>
                <Dropdown.Item>Sal Vidge</Dropdown.Item>
                <Dropdown.Item>Other</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <ShareOffcanvasNew share={props.share} />
        </div>
        <Link
          to="#"
          onClick={() => setSave(!save)}
          className={`d-flex align-items-center gap-2 text-body save ${
            save === true ? "active" : ""
          } `}
        >
          <svg
            width="20"
            className="icon-20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z"
              fill="currentColor"
            ></path>
          </svg>
          <span id="save">Save</span>
        </Link>
      </div>
    </Fragment>
  );
});

Likeshare.displayName = "Likeshare";
export default Likeshare;
