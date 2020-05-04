import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import * as storage from '~/storage/LocalStorage';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import * as contactUtils from '~/utilities/objects/Contact';
import validateContactInformation from '~/validations/Contact';

const AddContactInformation = ({ onClose, isEdit }) => {
  const { data } = useContext(FormContext);

  const handleSubmit = values => {
    const contactObj = contactUtils.getContactObject({ ...values });

    data.set(prevState => ({ ...prevState, ...contactObj }));

    storage.saveResume(localStorage, data.get);

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
    <>
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

AddContactInformation.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default AddContactInformation;
