import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewHidden } from '~/assets/image';

const PersonalInfoItem = ({ label, value, hidden = false, bold, preview }) => {
  if (preview && hidden) {
    return null;
  }
  return (
    <div className="personal-info-row">
      <div className="personal-info-row__item">
        <div className="personal-info-row__label">Your {label}</div>
        <p className={bold ? 'personal-info-row__value  personal-info-row__value--strong' : 'personal-info-row__value'}>
          {value}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </p>
      </div>
      {!preview && (
        <div className="personal-info-row__icon">
          <img src={!hidden ? View : ViewHidden} alt="View" />
        </div>
      )}
    </div>
  );
};

PersonalInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  visibility: PropTypes.bool,
  preview: PropTypes.bool,
  bold: PropTypes.bool,
};

export default PersonalInfoItem;
