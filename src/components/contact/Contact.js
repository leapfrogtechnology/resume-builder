import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, ViewHidden } from '~/assets/image';

const Contact = ({ id, label, value, preview, onHiddenIconClicked, onLinkClicked }) => {
  const [hidden, setHidden] = useState(false);

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, id);
  };

  const handleOnLinkClicked = (e, value) => {
    e.preventDefault();
    onLinkClicked(e, value);
  };

  if (!value || (preview && hidden)) {
    return <></>;
  }

  return (
    <div className="contact-content">
      <div className="contact-content__l">
        <div className="key">
          {label}
          {hidden && !preview && <span className="hidden-tag">Hidden</span>}
        </div>
        <div
          className="value text-link"
          onClick={e => {
            handleOnLinkClicked(e, value);
          }}
        >
          {value}
        </div>
      </div>
      {!preview && (
        <div className="contact-content__r" onClick={e => onHiddenBtnClicked(e)}>
          <img src={!hidden ? View : ViewHidden} alt="Edit" />
        </div>
      )}
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onLinkClicked: PropTypes.func,
};

export default Contact;
