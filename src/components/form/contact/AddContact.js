import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import * as contactUtils from '~/utilities/objects/Contact';
import validateContactInformation from '~/validations/Contact';

const AddContactInformation = ({ onClose }) => {
  const { preview, data } = useContext(FormContext);

  const handleSubmit = values => {
    console.log(values);
    // const contactObj = contactUtils.getContactObject({ ...values });
    // setData(prevState => ({ ...prevState, ...contactObj }));
    // console.log(data);
  };

  return (
    <>
      <FormHeader title="Contact Information" />
      <Formik
        initialValues={{
          email: '',
          phone: '',
          gitHub: '',
          stackOverFlow: '',
          linkedIn: '',
        }}
        onSubmit={values => {
          console.log('inside submit');
          handleSubmit(values);
        }}
        validationSchema={validateContactInformation}
      >
        {({ values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <div className="form__content">
              <InputText name="email" label="Your Email" />
              <InputText name="phone" label="Phone Number (optional)" />
              <InputText name="gitHub" label="Github (optional)" />
              <InputText name="stackOverFlow" label="StackOverflow (optional)" />
              <InputText name="linkedIn" label="LinkedIn (optional)" />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Save Info" type="submit" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" isCancel={true} type="button" onclick={onClose} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddContactInformation;
