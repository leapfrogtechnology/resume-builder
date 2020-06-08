import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputRadio from '~/components/inputradio/InputRadio';

import validateExperience from '~/validations/Experience';

const AddExperience = ({ onClose }) => {
  const { data, updateCV } = useContext(FormContext);

  const handleSubmit = values => {
    const prevData = { ...data.get };

    if (prevData.experience) {
      prevData.experience = { ...values };
    } else {
      prevData['experience'] = { ...values };
    }

    updateCV(prevData);
    onClose();
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
      <FormHeader title="Edit Professional Experience" modifier="dark" />
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
              <InputText name="value" label="Your professional experience (optional)" />
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
                  <Button content="Cancel" modifier="secondary" type="button" onclick={onClose} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

AddExperience.propTypes = {
  onClose: PropTypes.func,
};

export default AddExperience;
