import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, isCancel, onClick }) => {
  return (
    <button className={isCancel ? 'btn--cancel' : 'btn'} onClick={e => onClick(e)}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  isCancel: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
