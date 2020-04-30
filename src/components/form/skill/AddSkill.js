/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputSelect from '~/components/inputselect/InputSelect';
import * as skillUtils from '../../../utilities/objects/Skill';

const AddSkill = ({ onClose, isEdit, values }) => {
  const { preview, data } = useContext(FormContext);

  const validateSkill = Yup.object().shape({
    skill: Yup.string().required(),
  });

  let initialValues = {};

  const handleSubmit = formValues => {
    if (isEdit) {
      handleSubmitOnEdit(formValues);
    } else {
      handleSubmitOnAdd(formValues);
    }

    data.set(prevState => ({ ...prevState, ...data }));
  };

  const handleSubmitOnAdd = formValues => {
    const skillObj = skillUtils.getSkillObject({ ...formValues });

    if (data.get.skills) {
      data.get['skills'].push(skillObj);
    } else {
      data.get['skills'] = [];
      data.get['skills'].push(skillObj);
    }
  };

  const handleSubmitOnEdit = formValues => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      return;
    } else {
      const skillObj = skillUtils.getSkillObject({ ...formValues });
      const skills = data.get['skills'];

      const index = skills.findIndex(skill => {
        return skill.name === values.name;
      });

      data.get['skills'][index] = skillObj;
    }
  };

  const getInitialValues = () => {
    if (isEdit) {
      initialValues = {
        skill: values.name,
        subSkills: values.subSkills
          .map(subSkill => {
            return subSkill.name;
          })
          .join(),
      };
    } else {
      initialValues = {
        skill: '',
        subSkills: '',
      };
    }
    return initialValues;
  };

  return (
    <>
      <FormHeader title={!isEdit ? 'Add Skill' : 'Edit Skill'} />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateSkill}
        validateOnChange={validateSkill}
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

AddSkill.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddSkill;
