import React, { useState } from "react";

// plugin
import ReactSlider from "react-slider";

const RangeSlider = () => {
  const [value, setValue] = useState([2.5, 100]);
  return (
    <>
      <div className="product-range">
        <ReactSlider
          className="horizontal-slider pb-2"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={value}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          onChange={(currentPriceState) => {
            setValue([...currentPriceState]);
          }}
          step={1}
        />
      </div>
      <div className="d-flex justify-content-between mt-5">
        <small id="lower-value">${Math.round(value[0] * 20)}</small>
        <small id="upper-value">${Math.round(value[1] * 20)}</small>
      </div>
    </>
  );
};

export default RangeSlider;
