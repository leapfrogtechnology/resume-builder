import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ label, placeholder }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input type="text" className="input__text-field" placeholder={placeholder} />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
