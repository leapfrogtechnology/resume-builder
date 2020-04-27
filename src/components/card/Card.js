import React from 'react';
import CloseModal from '../modalclose/CloseModal';

const Card = ({ children, className = '', onClose, showModal }) => {
  const Component = children;

  return (
    <div className={`card ${className}`}>
      {showModal && <CloseModal onClose={onClose} />}
      <Component />
    </div>
  );
};

export default Card;
