import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ icon, label }) => {
  return (
    <div className="card__footer">
      <span className="card__footer-icon">
        <img src={icon} alt="Add" />
      </span>
      <span className="card__footer-label text-link">{label}</span>
    </div>
  );
};

CardFooter.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default CardFooter;
