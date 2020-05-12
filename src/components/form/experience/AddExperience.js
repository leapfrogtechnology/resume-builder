import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import validateExperience from '~/validations/Experience';
import FormHeader from '~/components/formheader/FormHeader';
import InputRadio from '~/components/inputradio/InputRadio';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

const AddExperience = ({ onClose }) => {
  const { data } = useContext(FormContext);

  const handleSubmit = values => {
    if (data.get.experience) {
      data.get.experience = { ...values };
    } else {
      data.get['experience'] = { ...values };
    }

    data.set(prevState => ({ ...prevState, ...data.get }));

    storage.saveResume(data.get);

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
    <OutsideClickDetector onClose={onClose}>
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
                  <Button content="Cancel" isCancel={true} type="button" onclick={onClose} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </OutsideClickDetector>
  );
};

AddExperience.propTypes = {
  onClose: PropTypes.func,
};

export default AddExperience;
