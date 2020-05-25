/* eslint-disable require-jsdoc */
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import validatePersonalInformation from '~/validations/PersonalInformation';
import * as personalInfoUtils from '~/utilities/objects/PersonalInformation';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

const AddPersonalInformation = ({ onClose, isEdit }) => {
  const { data, updateCV } = useContext(FormContext);

  const handleSubmit = values => {
    const personalInfoObj = personalInfoUtils.getPersonalInfoObject({ ...values });
    const prevData = { ...data.get };

    Object.assign(prevData, personalInfoObj);

    updateCV(prevData, onClose);
  };

  const getInitialState = () => {
    let initialValues = {};

    if (isEdit) {
      initialValues = {
        name: data.get.name ? data.get.name : '',
        role: data.get.role ? data.get.role.label : '',
        introduction: data.get.introduction ? data.get.introduction.value : '',
      };
    } else {
      initialValues = {
        name: '',
        role: '',
        introduction: '',
      };
    }

    return initialValues;
  };

  return (
    <OutsideClickDetector onClose={onClose}>
      <FormHeader title="Edit Personal Information" />
      <Formik
        initialValues={getInitialState()}
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
                <Button content="Save Info" type="submit" />
              </div>
              <div className="form-button__right">
                <Button content="Cancel" modifier="secondary" type="button" onclick={onClose} />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </OutsideClickDetector>
  );
};

AddPersonalInformation.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default AddPersonalInformation;
