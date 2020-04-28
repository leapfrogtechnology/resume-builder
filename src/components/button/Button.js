import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, isCancel, type, onclick = null }) => {
  if (onclick) {
    return (
      <button className={isCancel ? 'btn--cancel' : 'btn'} type={type} onClick={e => onclick(e)}>
        {content}
      </button>
    );
  } else {
    return (
      <button className={isCancel ? 'btn--cancel' : 'btn'} type={type}>
        {content}
      </button>
    );
  }
};

Button.propTypes = {
  content: PropTypes.string,
  isCancel: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Button;
