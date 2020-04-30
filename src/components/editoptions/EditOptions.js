import React from 'react';
import PropTypes from 'prop-types';

import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

const EditOptions = ({ isHidden = false, onHiddenIconClicked, onEditButtonClicked, onDeleteButtonClicked }) => {
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
      </div>
    </>
  );
};

EditOptions.propTypes = {
  isHidden: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onEditButtonClicked: PropTypes.func,
  onDeleteButtonClicked: PropTypes.func,
};

export default EditOptions;
