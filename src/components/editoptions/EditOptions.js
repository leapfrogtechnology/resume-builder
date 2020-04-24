import React from 'react';
import PropTypes from 'prop-types';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

const EditOptions = ({ isHidden = false, showModal, onEdit, onClose, onDelete, component }) => {
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
      {showModal && <OpenModal component={component} onClose={onClose} />}
    </div>
  );
};

EditOptions.propTypes = {
  isHidden: PropTypes.bool,
  showModal: PropTypes.bool,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  component: PropTypes.func,
};

export default EditOptions;
