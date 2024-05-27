import React, { Fragment, memo } from "react";

export const Client = memo((props) => {
  return (
    <Fragment>
      <img
        src={props.clientImage}
        alt={`client-details-${props.alt}`}
        loading="lazy"
      />
    </Fragment>
  );
});
export default Client;
