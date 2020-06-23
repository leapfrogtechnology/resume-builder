import React from "react";
import PropTypes from "prop-types";

import CloseModal from "components/modalclose/CloseModal";
import OutsideClickDetector from "components/detector/OutsideClickDetector";

const Card = ({
  children,
  className = "",
  onClose,
  showModal,
  isEdit,
  data,
}) => {
  const Component = children;

  return (
    <OutsideClickDetector onClose={onClose}>
      <div className={`card ${className}`}>
        {showModal && <CloseModal onClose={onClose} />}
        <Component onClose={onClose} isEdit={isEdit} values={data} />
      </div>
    </OutsideClickDetector>
  );
};

Card.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  onClose: PropTypes.func,
  showModal: PropTypes.bool,
  isEdit: PropTypes.bool,
  data: PropTypes.object || PropTypes.string,
};

export default Card;
