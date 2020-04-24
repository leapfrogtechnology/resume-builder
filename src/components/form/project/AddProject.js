import React from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import CheckboxInput from '~/components/checkbox/CheckboxInput';
import InputTextArea from '~/components/inputtextarea/InputTextArea';
import InputRadio from '~/components/inputradio/InputRadio';

const AddProject = () => {
  return (
    <div className="modal">
      <div className="form">
        <div className="card">
          <div className="close-option">
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Project" />
          <div className="form__content">
            <InputText label="Title of your Project" />
            <div className="form__date-field">
              <InputDate label="Start Date" placeholder="Select date" modifier={true} />
              <InputDate label="End Date" placeholder="Select date" modifier={true} />
            </div>
            <div className="form__checkbox-field">
              <CheckboxInput value="This project is currently ongoing" />
            </div>
            <div className="form__radio-field">
              <label className="input__label">What Type of Project was This?</label>
              <div className="form__radio-field-content">
                <InputRadio value="Professional" placeholder="Professional" />
                <InputRadio value="Personal" placeholder="Personal" />
                <InputRadio value="Social" placeholder="Social" />
              </div>
            </div>
            <InputTextArea label="Describe this Project (optional)" placeholder="eg. I helped create..." />
            <div className="form-button">
              <div className="form-button__left">
                <Button content="Add Project" />
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

export default AddProject;
