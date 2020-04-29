import React from 'react';
import PropTypes from 'prop-types';

import Card from '~/components/card/Card';

const OpenModal = ({ component, onClose, showModal, isEdit }) => {
  const Component = component;

  return (
    <div className="modal-container">
      <div className="form">
        <Card children={Component} onClose={onClose} showModal={showModal} isEdit={isEdit} />
      </div>
    </div>
  );
};

OpenModal.propTypes = {
  component: PropTypes.func,
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default OpenModal;
