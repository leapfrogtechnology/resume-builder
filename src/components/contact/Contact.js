import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { View, ViewHidden } from '~/assets/image';

const Contact = ({ id, label, value, preview, onHiddenIconClicked }) => {
  const [hidden, setHidden] = useState(false);

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, id);
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
        <div className="value text-link">{value}</div>
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
};

export default Contact;
