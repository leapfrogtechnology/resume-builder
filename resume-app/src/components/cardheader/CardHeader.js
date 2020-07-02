import React from "react";
import PropTypes from "prop-types";

import { EDIT } from "components/icons/icon";
import OpenModal from "components/modal/OpenModal";
import { EDIT_ICON_COLOR_BLUE } from "constant/color";

const CardHeader = ({
  title,
  icon = null,
  hideIcon = false,
  component,
  onEdit,
  onClose,
  showModal,
  isEdit,
}) => {
  return (
    <>
      <div className="card__header">
        <div className="card__header_l">
          <div className="title">{title}</div>
        </div>
        {icon && !hideIcon && (
          <div className="card__header_r icon" onClick={(e) => onEdit(e)}>
            {EDIT(EDIT_ICON_COLOR_BLUE)}
          </div>
        )}
      </div>
      {showModal && (
        <OpenModal
          component={component}
          onClose={onClose}
          showModal={showModal}
          isEdit={isEdit}
        />
      )}
    </>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
  component: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default CardHeader;
