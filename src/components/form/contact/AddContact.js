import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import validateContactInformation from '~/validations/Contact';

const AddContactInformation = ({ onClose }) => {
  const { data, setData } = useContext(FormContext);

  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option" onClick={onClose}>
            <img src={Close} alt="close" />
          </div>
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
              setData(prevState => ({ ...prevState, ...values }));
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
                      <Button content="Save Info" />
                    </div>
                    <div className="form-button__right">
                      <Button content="Cancel" isCancel={true} />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddContactInformation;
