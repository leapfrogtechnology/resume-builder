import React from 'react';

const CheckboxInput = ({ value }) => {
  return (
    <div className="input">
      <input type="checkbox" className="input__checkbox" />
      <label className="input__label input__label--dark">{value}</label>
    </div>
  );
};

export default CheckboxInput;
