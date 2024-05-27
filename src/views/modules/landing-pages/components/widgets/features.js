import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";

const FeatureWidget = memo((props) => {
  return (
    <Fragment>
      <h6 className="mb-4">{props.featurTitle}</h6>
      <p className="mb-4">{props.featurText}</p>
      <Link to="#">Know More</Link>
    </Fragment>
  );
});
FeatureWidget.displayName = "FeatureWidget";
export default FeatureWidget;
