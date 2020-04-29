import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

const AddExperience = ({ onClose }) => {
  const { preview, data } = useContext(FormContext);

  const validateExperience = Yup.object().shape({
    experience: Yup.number().label('Your proffessional experience'),
  });

  const handleSubmit = values => {
    data.set(prevState => ({ ...prevState, ...values }));
  };

  return (
    <>
      <FormHeader title="Proffessional Experience" />
      <Formik
        initialValues={{
          experience: 0,
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateExperience}
      >
        <Form>
          <div className="form__content">
            <InputText name="experience" label="Your proffessional experience (optional)" />
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
      </Formik>
    </>
  );
};

export default AddExperience;
