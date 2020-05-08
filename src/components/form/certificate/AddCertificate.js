import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import * as certificateUtils from '~/utilities/objects/Certificate';
import validateCertificateInformation from '~/validations/Certificate';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

const AddCertificate = ({ onClose, isEdit, values }) => {
  const { data } = useContext(FormContext);

  const handleSubmit = formValues => {
    if (isEdit) {
      handleSubmitOnEdit(formValues);
    } else {
      handleSubmitOnAdd(formValues);
    }

    data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, data.get);

    onClose();
  };

  const handleSubmitOnAdd = formValues => {
    const certificateObj = certificateUtils.getCertificateObject({ ...formValues });

    if (data.get.certificates) {
      data.get['certificates'].push(certificateObj);
    } else {
      data.get['certificates'] = [];

      data.get['certificates'].push(certificateObj);
    }
  };

  const handleSubmitOnEdit = formValues => {
    const isEqual = _.isEqual(formValues, values);

    if (isEqual) {
      return;
    } else {
      const certificateObj = certificateUtils.getCertificateObject({ ...formValues });
      const certificates = data.get.certificates;

      const index = certificates.findIndex(certificate => {
        return certificate.name === values.name && certificate.link === values.link;
      });

      data.get['certificates'][index] = certificateObj;
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

AddCertificate.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddCertificate;
