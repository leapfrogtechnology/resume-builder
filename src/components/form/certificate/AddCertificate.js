import React from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import InputTextArea from '~/components/inputtextarea/InputTextArea';

const AddCertificate = () => {
  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option">
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Certificate" />
          <div className="form__content">
            <InputText label="Title of your Certificate" />
            <InputText label="Link to this Certificate" placeholder="https://" />
            <InputDate label="Date you received the Certificate" />
            <InputTextArea label="Describe this Certificate (optional)" placeholder="eg. I was awarded ..." />
            <div className="form-button">
              <div className="form-button__left">
                <Button content="Add Certificate" />
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

export default AddCertificate;
