import React, { memo, Fragment } from "react";

// react-bootstrap
import { Card } from "react-bootstrap";

const Team = memo((props) => {
  return (
    <Fragment>
      <img
        src={props.teamImage}
        alt="team-details"
        className="img-fluid rounded-top"
        loading="lazy"
      />
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="my-2 line-count-1">{props.teamTitle}</h6>
          <svg className="text-primary" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g>
              <path d="M7.45109 2.34305L7.46396 3.36381L12.0063 3.42098L2.05684 13.3704L2.78774 14.1013L12.7371 4.15187L12.7943 8.69414L13.8151 8.707L13.736 2.4221L7.45109 2.34305Z" fill="currentColor"></path>
            </g>
            <defs>

              <rect width="16" height="16" rx="5" fill="white"></rect>

            </defs>
          </svg>
        </div>
        <p className="mb-0 text-primary">{props.teamText}</p>
      </Card.Body>
    </Fragment>
  );
});
Team.displayName = "Team";
export default Team;
