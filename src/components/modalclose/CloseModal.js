import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '~/assets/image';

const CloseModal = ({ onClose }) => {
  return (
    <div className="close-option-container">
      <div
        className="close-option icon"
        onClick={e => {
          onClose(e);
        }}
      >
        <img src={Close} alt="close" />
      </div>
    </div>
  );
};

CloseModal.propTypes = {
  onClose: PropTypes.func,
};

export default CloseModal;
