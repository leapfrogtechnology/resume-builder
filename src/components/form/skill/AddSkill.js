import React from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputSelect from '~/components/inputselect/InputSelect';

const AddContactInformation = () => {
  return (
    <div className="modal">
      <div className="form">
        <div className="card">
          <div className="close-option">
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Skill" />
          <div className="form__content">
            <InputSelect label="Select your skill" />
            <InputText label="Add Sub Skill" />
            <div className="form-button">
              <div className="form-button__left">
                <Button content="Add Skill" />
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
