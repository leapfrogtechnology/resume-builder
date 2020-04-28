/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputSelect from '~/components/inputselect/InputSelect';
import * as skillUtils from '../../../utilities/objects/Skill';

const AddSkill = ({ onClose }) => {
  const { preview, data } = useContext(FormContext);

  const validateSkill = Yup.object().shape({
    skill: Yup.string().required(),
  });

  const submitHandler = values => {
    const skillObj = skillUtils.getSkillObject({ ...values });

    if (data.get.skills) {
      data.get['skills'].push(skillObj);
    } else {
      data.get['skills'] = [];
      data.get['skills'].push(skillObj);
    }

    data.set(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      <FormHeader title="Add Skill" />
      <Formik
        initialValues={{
          skill: '',
          subSkills: '',
        }}
        onSubmit={values => {
          submitHandler(values);
        }}
        validationSchema={validateSkill}
      >
        {({ values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <div className="form__content">
              <InputSelect name="skill" label="Select your skill" />
              <InputText name="subSkills" label="Add Sub Skill" />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Add Skill" type="submit" />
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

export default AddSkill;
