import React from 'react';
import PropTypes from 'prop-types';
import { EDIT } from '~/components/icons/icon';

const Media = ({ icon, label, preview, onclick }) => {
  return (
    <div className="media">
      <span className="media__icon">{icon}</span>
      <span className="media__body">{label}</span>
      {!preview && (
        <div className="media__body icon" onClick={onclick}>
          {EDIT('#29B6F6')}
        </div>
      )}
    </div>
  );
};

Media.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  preview: PropTypes.bool,
  onclick: PropTypes.func,
};

export default Media;
