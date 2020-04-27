/* eslint-disable require-jsdoc */
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import * as personalInfoUtils from '~/utilities/objects/PersonalInformation';

const AddPersonalInformation = () => {
  const { preview, data } = useContext(FormContext);

  const validatePersonalInformation = Yup.object().shape({
    name: Yup.string().label('Name').min(10).max(35, 'Limit 35 characters').required(),
    role: Yup.string().label('Role').max(40, 'Limit 40 characters').required(),
    introduction: Yup.string().label('Introduction').max(200, 'Limit 200 characters').required(),
  });

  const handleSubmit = values => {
    const personalInfoObj = personalInfoUtils.getPersonalInfoObject({ ...values });
    data.set(prevState => ({ ...prevState, ...personalInfoObj }));
  };

  return (
    <>
      <FormHeader title="Personal Information" />
      <Formik
        initialValues={{
          name: '',
          role: '',
          introduction: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validatePersonalInformation}
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
    </>
  );
};

export default AddPersonalInformation;
