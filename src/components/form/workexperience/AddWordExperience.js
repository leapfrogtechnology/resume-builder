import React from 'react';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import CheckboxInput from '~/components/checkbox/CheckboxInput';

const AddWorkExperience = () => {
  return (
    <>
      <div className="close-option">
        <img src={Close} alt="close" />
      </div>
      <FormHeader title="Add Work Experience" />
      <div className="form__content">
        <InputText label="Name of the organization" placeholder="eg. Apple" />
        <InputText label="Your Title or Position" placeholder="eg. Software Engineer" />
        <div className="form__date-field">
          <InputDate label="Start Date" placeholder="Select date" modifier="secondary" />
          <InputDate label="End Date" placeholder="Select date" modifier="secondary" />
        </div>
        <CheckboxInput value="I currently work here" />
        <InputText
          type="text-area"
          label="Describe Your Roles and Responsibilities"
          placeholder="eg. I am responsible for..."
        />
        <InputText
          type="text-area"
          label="List out your Achievements and Tasks (optional)"
          placeholder="eg. I was awarded with..."
        />
        <InputText
          label="Name of your Referee (optional)"
          placeholder="eg. someone we can reach out for more info if needed"
        />
        <InputText label="Contact number or phone (optional)" placeholder="eg. how we can contact your referee" />
        <div className="form-button">
          <div className="form-button__left">
            <Button content="Add Experience" />
          </div>
          <div className="form-button__right">
            <img src={Trash} alt="Delete" />
            <Button content="Cancel" modifier="secondary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWorkExperience;
