import React from 'react';
import PropTypes from 'prop-types';

const Media = ({ icon, label }) => {
  return (
    <div className="media">
      <span className="media__icon">{icon}</span>
      <span className="media__body">{label}</span>
    </div>
  );
};

Media.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
};

export default Media;
