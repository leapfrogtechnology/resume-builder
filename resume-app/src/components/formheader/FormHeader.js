import React from "react";
import PropTypes from "prop-types";

const FormHeader = ({ title, modifier }) => {
  return (
    <div
      className={
        modifier ? `form__header form__header--${modifier}` : "form__header"
      }
    >
      {title}
    </div>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string,
  modifier: PropTypes.string,
};

export default FormHeader;
