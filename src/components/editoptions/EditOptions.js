import React from 'react';
import PropTypes from 'prop-types';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

const EditOptions = ({ isHidden, onHiddenIconClicked }) => {
  return (
    <div className="edit-options">
      <span className="edit-options__item" onClick={e => onHiddenIconClicked(e)}>
        <img src={isHidden ? ViewHidden : View} alt="View" />
      </span>
      <span className="edit-options__item">
        <img src={EditGray} alt="Edit" />
      </span>
      <span className="edit-options__item">
        <img src={Trash} alt="Trash" />
      </span>
    </div>
  );
};

EditOptions.propTypes = {
  isHidden: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
};

export default EditOptions;
