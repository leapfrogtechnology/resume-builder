import React from 'react';
import Card from '~/components/card/Card';

const OpenModal = ({ component, onClose, showModal }) => {
  const Component = component;

  return (
    <div className="modal-container">
      <div className="form">
        <Card children={Component} onClose={onClose} showModal={showModal} />
      </div>
    </div>
  );
};

export default OpenModal;
