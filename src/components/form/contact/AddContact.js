import React from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

const AddContactInformation = () => {
  return (
    <div className="modal">
      <div className="form">
        <div className="card">
          <div className="close-option">
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Contact Information" />
          <div className="form__content">
            <InputText label="Your Email" />
            <InputText label="Phone Number (optional)" />
            <InputText label="Github (optional)" />
            <InputText label="StackOverflow (optional)" />
            <InputText label="LinkedIn (optional)" />
            <div className="form-button">
              <div className="form-button__left">
                <Button content="Save Info" />
              </div>
              <div className="form-button__right">
                <Button content="Cancel" isCancel={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContactInformation;
