import React, { memo, Fragment } from "react";

//React-bootstrap
import { Image } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Componet
import Card from "../../../../components/bootstrap/card";

const Categoriescard = memo((props) => {
  return (
    <Fragment>
      <Card className="text-center">
        <div className="card-header card-thumbnail">
          <Image
            src={props.categoryimage}
            alt="post-category"
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <Card.Body className="card-thumbnail">
          <div className="d-flex flex-column">
            <Link
              to="/blog/blog-details"
              className="h5 mb-0 iq-product-detail mb-2"
            >
              {props.categoryname}
            </Link>
            <span className="text-muted">{props.postcount} Post</span>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
});

Categoriescard.displayName = "Categoriescard";
export default Categoriescard;
