import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ title, icon = null, hideIcon = false }) => {
  return (
    <div className="card__header">
      <div className="card__header_l">
        <div className="title">{title}</div>
      </div>
      {icon && !hideIcon && (
        <div className="card__header_r">
          <img src={icon} alt="Edit" />
        </div>
      )}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  hideIcon: PropTypes.bool,
};

export default CardHeader;
