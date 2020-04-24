import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = ({ title }) => {
  return <div className="form__header">{title}</div>;
};

FormHeader.propTypes = {
  title: PropTypes.string,
};

export default FormHeader;
