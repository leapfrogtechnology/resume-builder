import React from 'react';
import PropTypes from 'prop-types';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';
import DeletePopup from '../form/delete/DeletePopup';

const EditOptions = ({ isHidden = false, onHiddenIconClicked, onEditButtonClicked, onDeleteButtonClicked, isEditClicked, isDeleteClicked, onConfirm, onCancel }) => {
  return (
    <>
      <div className="edit-options">
        <span className="edit-options__item" onClick={e => onHiddenIconClicked(e)}>
          <img src={isHidden ? ViewHidden : View} alt="View" />
        </span>
        <span className="edit-options__item" onClick={e => onEditButtonClicked(e)}>
          <img src={EditGray} alt="Edit" />
        </span>
        <span className="edit-options__item" onClick={e => onDeleteButtonClicked(e)}>
          <img src={Trash} alt="Trash" />
        </span>
        {isDeleteClicked ? <DeletePopup onConfirm={onConfirm} onCancel={onCancel} /> : <></>}
      </div>
    </>
  );
};

EditOptions.propTypes = {
  isHidden: PropTypes.bool,
  showModal: PropTypes.bool,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  component: PropTypes.func,
  onHiddenIconClicked: PropTypes.func,
};

export default EditOptions;
