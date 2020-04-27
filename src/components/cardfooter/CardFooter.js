import React from 'react';
import OpenModal from '~/components/modal/OpenModal';

const CardFooter = ({ icon, label, onAdd, showModal, component, onClose }) => {
  return (
    <>
      <div className="card__footer" onClick={e => onAdd(e)}>
        <span className="card__footer-icon">
          <img src={icon} alt="Add" />
        </span>
        <span className="card__footer-label text-link">{label}</span>
      </div>
      {showModal ? <OpenModal component={component} onClose={onClose} showModal={showModal} /> : ''}
    </>
  );
};

export default CardFooter;
