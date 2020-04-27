/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputSelect from '~/components/inputselect/InputSelect';
import { FormContext } from '../../FormContext';

const AddSkill = () => {
  const { data, setData } = useContext(FormContext);

  const validateSkill = Yup.object().shape({
    skill: Yup.string().required(),
  });

  return (
    <>
      <FormHeader title="Add Skill" />
      <Formik
        initialValues={{
          skill: '',
          subSkills: '',
        }}
        onSubmit={values => {
          setData(prevState => ({ ...prevState, ...values }));
        }}
        validationSchema={validateSkill}
      >
        <Form>
          <div className="form__content">
            <InputSelect name="skill" label="Select your skill" />
            <InputText name="subSkills" label="Add Sub Skill" />
            <div className="form-button">
              <div className="form-button__left">
                <Button content="Add Skill" />
              </div>
              <div className="form-button__right">
                <Button content="Cancel" isCancel={true} />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default AddSkill;
