import React from 'react';

const Button = ({ content, isCancel }) => {
  return <button className={isCancel ? 'btn--cancel' : 'btn'}>{content}</button>;
};

export default Button;
