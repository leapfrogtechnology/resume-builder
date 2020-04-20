import React from 'react';

const Media = ({ icon, label }) => {
  return (
    <div className="media">
      <span className="media__icon">{icon}</span>
      <span className="media__body">{label}</span>
    </div>
  )
}

export default Media;
