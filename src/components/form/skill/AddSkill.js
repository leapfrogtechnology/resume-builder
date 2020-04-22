/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputSelect from '~/components/inputselect/InputSelect';
import { FormContext } from '../../FormContext';

const AddSkill = ({ onClose }) => {
  const { data, setData } = useContext(FormContext);

  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option" onClick={onClose}>
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Skill" />
          <Formik
            initialValues={{
              skill: '',
              subSkills: [],
            }}
            onSubmit={values => {
              setData(prevState => ({ ...prevState, ...values }));
            }}
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
        </div>
      </div>
    </div>
  );
};

export default AddSkill;
