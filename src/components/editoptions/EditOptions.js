import React from 'react';
import PropTypes from 'prop-types';

import { EDIT, DELETE, VIEW, VIEW_HIDDEN } from '~/components/icons/icon';

const EditOptions = ({ isHidden = false, onHiddenIconClicked, onEditButtonClicked, onDeleteButtonClicked }) => {
  return (
    <>
      <div className="edit-options">
        <span className="edit-options__item icon" onClick={onHiddenIconClicked}>
          {isHidden ? VIEW_HIDDEN : VIEW}
        </span>
        <span className="edit-options__item icon" onClick={onEditButtonClicked}>
          {EDIT('#B3B3B3')}
        </span>
        <span className="edit-options__item icon" onClick={onDeleteButtonClicked}>
          {DELETE('#D2D2D2')}
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
