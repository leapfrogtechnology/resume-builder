import React from "react";
import PropTypes from "prop-types";

const InputTextArea = ({ label, placeholder }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <textarea
        className="input__textarea"
        cols="30"
        rows="10"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

InputTextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputTextArea;
