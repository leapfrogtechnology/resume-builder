import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, isCancel }) => {
  return <button className={isCancel ? 'btn--cancel' : 'btn'}>{content}</button>;
};

Button.propTypes = {
  content: PropTypes.string,
  isCancel: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
