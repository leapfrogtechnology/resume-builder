import React from 'react';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

const EditOptions = ({ isHidden, component, onEdit, onClose, showModal, onDelete }) => {

  return (
    <div className="edit-options">
      <span className="edit-options__item">
        <img src={isHidden ? ViewHidden : View} alt="View" />
      </span>
      <span className="edit-options__item" onClick={e => onEdit(e)}>
        <img src={EditGray} alt="Edit" />
      </span>
      <span className="edit-options__item" onClick={e => onDelete(e)}>
        <img src={Trash} alt="Trash" />
      </span>
      {showModal ? <OpenModal component={component} onClose={onClose} /> : ''}
    </div>
  );
}

export default EditOptions;
