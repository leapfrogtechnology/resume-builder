import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { content, onclick } = props;

  return (
    <button className="btn" onClick={e => onclick(e)}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  onclick: PropTypes.func,
};

export default Button;
