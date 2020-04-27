import React, { useState } from 'react';
import { View } from '~/assets/image';
import AddContactInformation from '../form/contact/AddContact';
import OpenModal from '../modal/OpenModal';

const Contact = ({ label, value }) => {
  const [showModel, setModal] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  return (
    <div className="contact-content">
      <div className="contact-content__l">
        <div className="key">{label}</div>
        <div className="value text-link">{value}</div>
      </div>
      <div className="contact-content__r" onClick={editBtnHandler}>
        <img src={View} alt="Edit" />
      </div>
      {showModel && <OpenModal component={AddContactInformation} onClose={closeBtnHandler} />}
    </div>
  );
};

export default Contact;
