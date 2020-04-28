import React from 'react';
import PropTypes from 'prop-types';

import OpenModal from '~/components/modal/OpenModal';

const CardFooter = ({ icon, label, hide, onAdd, showModal, component, onClose, modifier }) => {
  return (
    !hide && (
      <>
        <div className={modifier ? `card__footer card__footer--${modifier}` : 'card__footer'} onClick={e => onAdd(e)}>
          <span className="card__footer-icon">
            <img src={icon} alt="Add" />
          </span>
          <span className="card__footer-label text-link">{label}</span>
        </div>
        {showModal ? <OpenModal component={component} onClose={onClose} showModal={showModal} /> : ''}
      </>
    )
  );
};

CardFooter.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  hide: PropTypes.bool,
};

export default CardFooter;
