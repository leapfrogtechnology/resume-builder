import React from 'react';
import PropTypes from 'prop-types';

import { View } from '../../assets/image';

const Contact = props => {
  const { label, value } = props;

  return (
    <div className="contact-content">
      <div className="contact-content__l">
        <div className="key">{label}</div>
        <div className="value text-link">{value}</div>
      </div>
      <div className="contact-content__r">
        <img src={View} alt="Edit" />
      </div>
    </div>
  );
};

Contact.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Contact;
