/* eslint-disable require-jsdoc */
import * as Yup from 'yup';
import React, { Component } from 'react';
import { Formik, Form } from 'formik';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

class AddPersonalInformation extends Component {
  constructor({ onClose }) {
    super();
  }

  validatePersonalInformation = Yup.object().shape({
    name: Yup.string().min(15, 'Above 15 characters.').max(35, 'Limit 35 characters').required(),
    role: Yup.string().max(40, 'Limit 40 characters').required(),
    introduction: Yup.string().max(200, 'Limit 200 characters').required(),
  });

  render() {
    return (
      <div className="form-container">
        <div className="form">
          <div className="card">
            <div className="close-option" onClick={this.props.onClose}>
              <img src={Close} alt="close" />
            </div>
            <FormHeader title="Personal Information" />
            <Formik
              initialValues={{
                name: '',
                role: '',
                introduction: '',
              }}
              validationSchema={this.validatePersonalInformation}
            >
              <Form>
                <div className="form__content">
                  <InputText name="name" label="Your Name" />
                  <InputText name="role" label="Your Role" />
                  <InputText name="introduction" label="Your Introduction" type="text-area" />
                  <div className="form-button">
                    <div className="form-button__left">
                      <Button content="Save Info" />
                    </div>
                    <div className="form-button__right">
                      <Button content="Cancel" isCancel={true} />
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPersonalInformation;
