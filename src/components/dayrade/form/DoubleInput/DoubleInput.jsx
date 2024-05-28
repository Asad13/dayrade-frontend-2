import React from 'react';

const DoubleInput = ({ firstInput, secondInput }) => {
  return (
    <div>
      <input
        {...firstInput}
        id={firstInput.name}
        className="double-input-form-control double-input-form-control-left"
      />
      <input
        {...secondInput}
        id={secondInput.name}
        className="double-input-form-control double-input-form-control-right"
      />
    </div>
  );
};

export default DoubleInput;
