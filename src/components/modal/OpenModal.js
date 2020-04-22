import React from 'react';

const OpenModal = ({ component, onClose }) => {
  const Component = component;
  return <Component onClose={onClose} />;
};

export default OpenModal;
