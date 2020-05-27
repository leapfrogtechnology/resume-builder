import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

import * as certificateUtils from '~/utilities/objects/Certificate';
import validateCertificateInformation from '~/validations/Certificate';

const AddCertificate = ({ onClose, isEdit, values }) => {
  const { data, updateCV } = useContext(FormContext);

  const handleSubmit = formValues => {
    const prevData = { ...data.get };

    if (isEdit) {
      handleSubmitOnEdit(formValues, prevData);
    } else {
      handleSubmitOnAdd(formValues, prevData);
    }

    updateCV(prevData);
    onClose();
  };

  const handleSubmitOnAdd = (formValues, prevData) => {
    const certificateObj = certificateUtils.getCertificateObject({ ...formValues });

    if (prevData.certificates) {
      prevData['certificates'].push(certificateObj);
    } else {
      prevData['certificates'] = [];

      prevData['certificates'].push(certificateObj);
    }
  };

  const handleSubmitOnEdit = (formValues, prevData) => {
    const isEqual = _.isEqual(formValues, values);

    if (isEqual) {
      onClose();
      return;
    } else {
      const certificateObj = certificateUtils.getCertificateObject({ ...formValues });
      const certificates = data.get.certificates;

      const index = certificates.findIndex(certificate => {
        return certificate.name === values.name && certificate.link === values.link;
      });

      prevData['certificates'][index] = certificateObj;
    }
  };

  const getInitialValues = () => {
    let initialValues = {};

    if (isEdit) {
      initialValues = { ...values };
    } else {
      initialValues = {
        name: '',
        link: '',
        date: '',
        description: '',
      };
    }

    return initialValues;
  };

  return (
    <OutsideClickDetector onClose={onClose}>
      <FormHeader title={!isEdit ? 'Add Certificate' : 'Edit Certificate'} />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateCertificateInformation}
        validateOnChange={validateCertificateInformation}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form__content">
              <InputText name="name" label="Title of your Certificate" />
              <InputText name="link" label="Link to this Certificate" placeholder="https://" />
              <InputDate
                name="date"
                label="Date you received the Certificate"
                placeholder="Select date"
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
              <InputText
                name="description"
                label="Describe this Certificate (optional)"
                placeholder="eg. I was awarded ..."
                type="text-area"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content={!isEdit ? 'Add Certificate' : 'Save Info'} type="submit" />
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

AddCertificate.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddCertificate;
