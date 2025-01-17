import React, { memo, Fragment } from "react";

// react-bootstrap
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogWidget = memo((props) => {
  return (
    <Fragment>
      <Card className={props.cardClass}>
        <img
          src={props.blogImage}
          alt={props.id}
          className={`img-fluid rounded ${props.className}`}
          loading="lazy"
        />
        <Card.Body className="blog-card">
          <div className="sub-title text-primary mb-2">{props.blogDate}</div>

          <Link to="/landing-pages/blog-detail" className="mt-2 h5 line-count-2">
            {props.blogTitle}
          </Link>
          <div className="mt-5">
            <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M6.2108 0.102935L6.22367 1.1237L10.766 1.18087L0.816548 11.1303L1.54744 11.8612L11.4969 1.91176L11.554 6.45402L12.5748 6.46689L12.4957 0.181986L6.2108 0.102935Z" fill="currentColor"></path>
            </svg>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
});
BlogWidget.displayName = "BlogWidget";
export default BlogWidget;
