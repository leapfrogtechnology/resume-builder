import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, modifier, type, onclick = null, submitProps }) => {
  if (onclick) {
    return (
      <button
        className={modifier ? `btn btn--${modifier}` : 'btn'}
        type={type}
        onClick={!submitProps ? onclick : onclick({ ...submitProps })}
      >
        {content}
      </button>
    );
  } else {
    return (
      <button className={modifier ? `btn btn--${modifier}` : 'btn'} type={type}>
        {content}
      </button>
    );
  }
};

Button.propTypes = {
  content: PropTypes.string,
  modifier: PropTypes.bool || PropTypes.string,
  onclick: PropTypes.func,
  submitProps: PropTypes.object,
};

export default Button;
