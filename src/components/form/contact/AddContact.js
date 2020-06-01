import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

import { PLACEHOLDER_LINK } from '~/constant/contact';
import * as contactUtils from '~/utilities/objects/Contact';
import validateContactInformation from '~/validations/Contact';

const AddContactInformation = ({ onClose, isEdit }) => {
  const { data, updateCV } = useContext(FormContext);

  const handleSubmit = values => {
    const contactObj = contactUtils.getContactObject({ ...values });
    const prevData = { ...data.get };

    Object.assign(prevData, contactObj);

    updateCV(prevData);
    onClose();
  };

  const getInitialValues = () => {
    let initialValues = {};

    if (isEdit) {
      initialValues = {
        email: data.get.email ? data.get.email.value : '',
        phone: data.get.phone ? data.get.phone.value : '',
        gitHub: data.get.github ? data.get.github.value : '',
        stackOverFlow: data.get.stackOverflow ? data.get.stackOverflow.value : '',
        linkedIn: data.get.linkedIn ? data.get.linkedIn.value : '',
      };
    } else {
      initialValues = {
        email: '',
        phone: '',
        gitHub: '',
        stackOverFlow: '',
        linkedIn: '',
      };
    }

    return initialValues;
  };

  return (
    <OutsideClickDetector onClose={onClose}>
      <FormHeader title="Edit Contact Information" />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateContactInformation}
      >
        {() => (
          <Form>
            <div className="form__content">
              <InputText name="email" label="Your Email" />
              <InputText name="phone" label="Phone Number (optional)" />
              <InputText name="gitHub" label="Github (optional)" placeholder={PLACEHOLDER_LINK} />
              <InputText name="stackOverFlow" label="StackOverflow (optional)" placeholder={PLACEHOLDER_LINK} />
              <InputText name="linkedIn" label="LinkedIn (optional)" placeholder={PLACEHOLDER_LINK} />
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
    </OutsideClickDetector>
  );
};

AddContactInformation.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default AddContactInformation;
