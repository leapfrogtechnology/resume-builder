import React from 'react';
import PropTypes from 'prop-types';

import OpenModal from '~/components/modal/OpenModal';

const CardHeader = ({ title, icon = null, hideIcon = false, component, onEdit, onClose, showModal, isEdit }) => {
  return (
    <>
      <div className="card__header">
        <div className="card__header_l">
          <div className="title">{title}</div>
        </div>
        {icon && !hideIcon && (
          <div className="card__header_r" onClick={e => onEdit(e)}>
            <img src={icon} alt="Edit" />
          </div>
        )}
      </div>
      {showModal && <OpenModal component={component} onClose={onClose} showModal={showModal} isEdit={isEdit} />}
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
