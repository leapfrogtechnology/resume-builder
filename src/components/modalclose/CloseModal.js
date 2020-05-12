import React from 'react';
import PropTypes from 'prop-types';
import { CLOSE } from '~/components/icons/icon';

const CloseModal = ({ onClose }) => {
  return (
    <div className="close-option-container">
      <div
        className="close-option icon"
        onClick={e => {
          onClose(e);
        }}
      >
        {CLOSE}
      </div>
    </div>
  );
};

CloseModal.propTypes = {
  onClose: PropTypes.func,
};

export default CloseModal;
