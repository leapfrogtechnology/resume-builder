import React from 'react';
import OpenModal from '~/components/modal/OpenModal';

const CardHeader = ({ title, icon = null, component, onEdit, onClose, showModal }) => {
  return (
    <div className="card-header">
      <div className="card-header__l">
        <div className="title">{title}</div>
      </div>
      {!icon ? (
        ''
      ) : (
        <div className="card-header__r" onClick={e => onEdit(e)}>
          <img src={icon} alt="Edit" />
        </div>
      )}
      {showModal && <OpenModal component={component} onClose={onClose} />}
    </div>
  );
};

export default CardHeader;
