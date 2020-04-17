import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = props => {
  const { title, icon = null } = props;

  return (
    <div className="card-header">
      <div className="card-header__l">
        <div className="title">{title}</div>
      </div>
      {!icon ? (
        ''
      ) : (
        <div className="card-header__r">
          <img src={icon} alt="Edit" />
        </div>
      )}
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object | null,
};
export default CardHeader;
