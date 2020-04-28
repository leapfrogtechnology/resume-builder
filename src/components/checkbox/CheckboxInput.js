import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ value }) => {
  return (
    <div className="input">
      <input type="checkbox" className="input__checkbox" />
      <label className="input__label input__label--dark">{value}</label>
    </div>
  );
};

CheckboxInput.propTypes = {
  value: PropTypes.string,
};

export default CheckboxInput;
