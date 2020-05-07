import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { View, ViewHidden } from '~/assets/image';
import { VIEW_HIDDEN, VIEW } from '~/components/icons/icon';

const PersonalInfoItem = ({ label, value, bold, preview, onclick, showIcon = false }) => {
  const [hidden, setHidden] = useState(false);

  if (preview && hidden) {
    return null;
  }

  const onHiddenIconClicked = e => {
    e.preventDefault();
    onclick(e, label);
    setHidden(!hidden);
  };

  return (
    <div className="personal-info-row">
      <div className="personal-info-row__item">
        <div className="personal-info-row__label">Your {label}</div>
        <div className="personal-info-row__value-container">
          <span
            className={bold ? 'personal-info-row__value  personal-info-row__value--strong' : 'personal-info-row__value'}
          >
            {value}
          </span>
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
      </div>
      {!preview && showIcon && (
        <div className="personal-info-row__icon icon" onClick={e => onHiddenIconClicked(e)}>
          {
            isHidden ? VIEW_HIDDEN : VIEW
          }
        </div>
      )}
    </div>
  );
};

PersonalInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  preview: PropTypes.bool,
  bold: PropTypes.bool,
  showIcon: PropTypes.bool,
  onclick: PropTypes.func,
};

export default PersonalInfoItem;
