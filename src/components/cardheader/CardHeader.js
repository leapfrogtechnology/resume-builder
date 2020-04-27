import React from 'react';
import PropTypes from 'prop-types';

import OpenModal from '~/components/modal/OpenModal';

const CardHeader = ({ title, icon = null, hideIcon = false, component, onEdit, onClose, showModal }) => {
  return (
    <>
      <div className="card-header">
        <div className="card-header__l">
          <div className="title">{title}</div>
        </div>
        {icon && !hideIcon && (
          <div className="card-header__r" onClick={e => onEdit(e)}>
            <img src={icon} alt="Edit" />
          </div>
        )}
      </div>
      {showModal && <OpenModal component={component} onClose={onClose} showModal={showModal} />}
    </>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
};

export default CardHeader;
