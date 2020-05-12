import React from 'react';
import PropTypes from 'prop-types';

import { ADD } from '~/components/icons/icon';
import OpenModal from '~/components/modal/OpenModal';

const CardFooter = ({ label, modifier, onAdd, component, onClose, showModal, hide }) => {
  return (
    !hide && (
      <>
        <div className={modifier ? `card__footer card__footer--${modifier}` : 'card__footer'} onClick={e => onAdd(e)}>
          <span className="card__footer-icon">{ADD('#29B6F6')}</span>
          <span className="card__footer-label text-link">{label}</span>
        </div>
        {showModal ? <OpenModal component={component} onClose={onClose} showModal={showModal} /> : ''}
      </>
    )
  );
};

CardFooter.propTypes = {
  label: PropTypes.string,
  modifier: PropTypes.string,
  onAdd: PropTypes.func,
  component: PropTypes.func,
  onClose: PropTypes.func,
  hide: PropTypes.bool,
  showModal: PropTypes.bool,
};

export default CardFooter;
