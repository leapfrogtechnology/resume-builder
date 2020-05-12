import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, isCancel, type, onclick = null, submitProps }) => {
  if (onclick) {
    return (
      <button
        className={isCancel ? 'btn btn--cancel' : 'btn'}
        type={type}
        onClick={!submitProps ? onclick : onclick({ ...submitProps })}
      >
        {content}
      </button>
    );
  } else {
    return (
      <button className={isCancel ? 'btn btn--cancel' : 'btn'} type={type}>
        {content}
      </button>
    );
  }
};

Button.propTypes = {
  content: PropTypes.string,
  isCancel: PropTypes.bool,
  onclick: PropTypes.func,
  submitProps: PropTypes.object,
};

export default Button;
