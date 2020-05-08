import * as Yup from 'yup';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import * as skillUtils from '~/utilities/objects/Skill';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

const AddSkill = ({ onClose, isEdit, values }) => {
  const { data } = useContext(FormContext);

  const skillsList = [];

  const validateSkill = Yup.object().shape({
    skill: Yup.string().required(),
  });

  let initialValues = {};

  const handleSubmit = (formValues, resetForm) => {
    if (isEdit) {
      handleSubmitOnEdit(formValues);
    } else {
      handleOnAdd(formValues, resetForm);
    }
  };

  const handleOnAdd = (formValues, resetForm) => {
    const skillObj = skillUtils.getSkillObject({ ...formValues });

    skillsList.push(skillObj);

    resetForm();
  };

  const handleSubmitOnAdd = ({ data, skillsList, storage, setFieldError }) => {
    if (skillsList.length < 1) {
      setFieldError('skill', 'Add your skills first');
    } else {
      if (data.get.skills) {
        skillsList.forEach(skill => {
          data.get['skills'].push(skill);
        });
      } else {
        data.get['skills'] = [];

        skillsList.forEach(skill => {
          data.get['skills'].push(skill);
        });
      }

      data.set(prevState => ({ ...prevState, ...data }));

      storage.saveResume(localStorage, data.get);

      onClose();
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
    data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, data.get);

    onClose();
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
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
        validationSchema={validateSkill}
        validateOnChange={validateSkill}
      >
        {({ setFieldError }) => (
          <Form>
            <div className="form__content">
              <InputText name="skill" label="Enter your skill" />
              <InputText name="subSkills" label="Add Sub Skill" placeholder="Add comma separated values" />
              <div className="form-button">
                {!isEdit && (
                  <div className="form-button__left">
                    <Button
                      content="Submit Skill"
                      type="button"
                      onclick={handleSubmitOnAdd}
                      submitProps={{ data, skillsList, storage, setFieldError }}
                    />
                  </div>
                )}
                <div className="form-button__left">
                  <Button content={!isEdit ? 'Add Skill' : 'Edit Skill'} type="submit" />
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
