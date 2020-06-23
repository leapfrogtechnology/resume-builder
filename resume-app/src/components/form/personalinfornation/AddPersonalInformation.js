import React from "react";
import Button from "components/button/Button";
import { CLOSE } from "components/icons/icon";
import InputText from "components/inputtext/InputText";
import FormHeader from "components/formheader/FormHeader";
import InputTextArea from "components/inputtextarea/InputTextArea";

const AddPersonalInformation = () => {
  return (
    <div className="modal">
      <div className="form">
        <div className="card">
          <div className="close-option">{CLOSE}</div>
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
                <Button content="Cancel" modifier="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPersonalInformation;
