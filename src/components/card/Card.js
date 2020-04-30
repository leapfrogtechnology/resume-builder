import React from 'react';
import PropTypes from 'prop-types';

import CloseModal from '../modalclose/CloseModal';

const Card = ({ children, className = '', onClose, showModal, isEdit, data }) => {
  const Component = children;

  return (
    <div className={`card ${className}`}>
      {showModal && <CloseModal onClose={onClose} />}
      <Component onClose={onClose} isEdit={isEdit} values={data} />
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  isEdit: PropTypes.bool,
  data: PropTypes.object || PropTypes.string,
};

export default Card;
