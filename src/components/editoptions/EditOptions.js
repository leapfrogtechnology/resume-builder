import React from 'react';
import PropTypes from 'prop-types';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

const EditOptions = ({ isHidden = false, onHiddenIconClicked, showModal, onEdit, onClose, onDelete, component }) => {
  return (
    <>
      <div className="edit-options">
        <span className="edit-options__item" onClick={e => onHiddenIconClicked(e)}>
          <img src={isHidden ? ViewHidden : View} alt="View" />
        </span>
        <span className="edit-options__item" onClick={e => onEdit(e)}>
          <img src={EditGray} alt="Edit" />
        </span>
        <span className="edit-options__item" onClick={e => onDelete(e)}>
          <img src={Trash} alt="Trash" />
        </span>
      </div>
      {showModal && <OpenModal component={component} onClose={onClose} showModal={showModal} />}
    </>
  );
};

EditOptions.propTypes = {
  isHidden: PropTypes.bool,
  showModal: PropTypes.bool,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  component: PropTypes.func,
  onHiddenIconClicked: PropTypes.func,
};

export default EditOptions;
