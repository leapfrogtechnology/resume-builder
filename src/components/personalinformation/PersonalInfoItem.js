import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { VIEW_HIDDEN, VIEW } from '~/components/icons/icon';

const PersonalInfoItem = ({ label, value, hidden, bold, preview, onclick, showIcon = false }) => {
  const [isHidden, setHidden] = useState(hidden);

  if (preview && hidden) {
    return null;
  }

  const onHiddenIconClicked = () => {
    onclick(label);
    setHidden(!isHidden);
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
          {isHidden && <span className="hidden-tag">Hidden</span>}
        </div>
      </div>
      {!preview && showIcon && (
        <div className="personal-info-row__icon icon" onClick={onHiddenIconClicked}>
          {isHidden ? VIEW_HIDDEN : VIEW}
        </div>
      )}
    </div>
  );
};

PersonalInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  bold: PropTypes.bool,
  showIcon: PropTypes.bool,
  onclick: PropTypes.func,
};

export default PersonalInfoItem;
