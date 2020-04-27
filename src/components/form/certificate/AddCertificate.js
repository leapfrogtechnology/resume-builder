import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { FormContext } from '../../FormContext';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import * as certificateUtils from '~/utilities/objects/Certificate';
import validateCertificateInformation from '~/validations/Certificate';

const AddCertificate = () => {
  const { preview, data } = useContext(FormContext);

  const handleSubmit = values => {
    const certificateObj = certificateUtils.getCertificateObject({ ...values });

    if (data.get.certificates) {
      data.get['certificates'].push(certificateObj);
    } else {
      data.get['certificates'] = [];
      data.get['certificates'].push(certificateObj);
    }

    data.set(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      <FormHeader title="Add Certificate" />
      <Formik
        initialValues={{
          name: '',
          link: '',
          date: '',
          description: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateCertificateInformation}
      >
        {({ values }) => (
          <Form>
            <div className="form__content">
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <InputText name="name" label="Title of your Certificate" />
              <InputText name="link" label="Link to this Certificate" placeholder="https://" />
              <InputDate name="date" label="Date you received the Certificate" />
              <InputText
                name="description"
                label="Describe this Certificate (optional)"
                placeholder="eg. I was awarded ..."
                type="text-area"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Add Certificate" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" isCancel={true} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

AddCertificate.propTypes = {
  onClose: PropTypes.func,
};

export default AddCertificate;
