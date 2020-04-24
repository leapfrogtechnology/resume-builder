import React from 'react';
import PropTypes from 'prop-types';

const InputRadio = ({ label, value, placeholder }) => {
  return (
    <div className="input__label-container">
      <input type="radio" className="input__radio-field" value={value} />
      <label className="input__radio-label">{placeholder}</label>
    </div>
  );
};

InputRadio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputRadio;
