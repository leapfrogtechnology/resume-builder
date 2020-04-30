import React from 'react';
import PropTypes from 'prop-types';
import { Edit } from '~/assets/image';

const Media = ({ icon, label, onclick }) => {
  return (
    <div className="media">
      <span className="media__icon">{icon}</span>
      <span className="media__body">{label}</span>
      <div className="media__body" onClick={onclick}>
        <img src={Edit} alt="Edit" />
      </div>
    </div>
  );
};

Media.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  onclick: PropTypes.func,
};

export default Media;
