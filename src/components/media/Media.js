import React from 'react';
import PropTypes from 'prop-types';

const Media = props => {
  const { icon, label } = props;

  return (
    <div className="media">
      <span className="media__icon">{icon}</span>
      <span className="media__body">{label}</span>
    </div>
  );
};

Media.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default Media;
