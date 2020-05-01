import * as Yup from 'yup';
import { Formik, Form, isInteger } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import * as storage from '~/storage/LocalStorage';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputRadio from '~/components/inputradio/InputRadio';

const AddExperience = ({ onClose, value }) => {
  const { preview, data } = useContext(FormContext);

  const validateExperience = Yup.object().shape({
    value: Yup.number().label('Your proffessional experience').min(0).integer(),
    type: Yup.string().required('This is required'),
  });

  const handleSubmit = values => {
    if (data.get.experience) {
      data.get.experience = { ...values };
    } else {
      data.get['experience'] = { ...values };
    }
    data.set(prevState => ({ ...prevState, ...data.get }));
    storage.saveResume(localStorage, data.get);
  };

  const getInitialValues = () => {
    if (!data.get.experience) {
      return {
        value: 0,
        type: '',
      };
    } else {
      return data.get.experience;
    }
  };

  return (
    <>
      <FormHeader title="Professional Experience" />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateExperience}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form__content">
              <InputText name="value" label="Your proffessional experience (optional)" />
              <div className="form__radio-field">
                <label className="input__label">In years or months?</label>
                <div className="form__radio-field-content">
                  <InputRadio
                    name="type"
                    value="Year"
                    placeholder="Years"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                  <InputRadio
                    name="type"
                    value="Month"
                    placeholder="Months"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                </div>
              </div>
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

export default AddExperience;
