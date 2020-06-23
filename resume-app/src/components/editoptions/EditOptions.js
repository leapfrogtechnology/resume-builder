import React from "react";
import PropTypes from "prop-types";

import { EDIT, DELETE, VIEW, VIEW_HIDDEN } from "components/icons/icon";
import { EDIT_ICON_COLOR_GREY, DELETE_ICON_COLOR } from "constant/color";

const EditOptions = ({
  isHidden = false,
  onHiddenIconClicked,
  onEditButtonClicked,
  onDeleteButtonClicked,
}) => {
  return (
    <>
      <div className="edit-options">
        <span className="edit-options__item icon" onClick={onHiddenIconClicked}>
          {isHidden ? VIEW_HIDDEN : VIEW}
        </span>
        <span className="edit-options__item icon" onClick={onEditButtonClicked}>
          {EDIT(EDIT_ICON_COLOR_GREY)}
        </span>
        <span
          className="edit-options__item icon"
          onClick={onDeleteButtonClicked}
        >
          {DELETE(DELETE_ICON_COLOR)}
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
