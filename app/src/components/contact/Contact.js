import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, ViewHidden } from '~/assets/image';

const Contact = ({ id, label, value, hidden, preview, onHiddenIconClicked, baseUrl = '' }) => {
  const [isHidden, setHidden] = useState(hidden);

  const onHiddenBtnClicked = () => {
    setHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  if (!value || (preview && hidden)) {
    return <></>;
  }

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-content__l">
          <div className="key">
            {label}
            {isHidden && !preview && <span className="hidden-tag">Hidden</span>}
          </div>
        </div>
        {!preview && (
          <div className="contact-content__r" onClick={onHiddenBtnClicked}>
            <img src={!isHidden ? View : ViewHidden} alt="Edit" />
          </div>
        )}
      </div>
      <div className="contact__value text-link">
        <a className="text-link" href={baseUrl + value} rel="noopener noreferrer" target="_blank">
          {value}
        </a>
      </div>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  baseUrl: PropTypes.string,
};

export default Contact;
