import React from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import InputTextArea from '~/components/inputtextarea/InputTextArea';

const AddPersonalInformation = () => {
  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option">
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Personal Information" />
          <div className="form__content">
            <InputText label="Your Name" />
            <InputText label="Your Role" />
            <InputTextArea label="Your Information" />
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

export default AddPersonalInformation;
