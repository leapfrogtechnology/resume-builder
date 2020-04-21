import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { View, ViewHidden } from '~/assets/image';

const Contact = ({ label, value }) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="contact-content">
      <div className="contact-content__l">
        <div className="key">{label}</div>
        <div className="value text-link">{value}</div>
      </div>
      <div className="contact-content__r" onClick={e => setHidden(!hidden)}>
        <img src={!hidden ? View : ViewHidden} alt="Edit" />
      </div>
    </div>
  );
};

Contact.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Contact;
