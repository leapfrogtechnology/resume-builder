/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { ADD } from '~/components/icons/icon';
import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import * as storage from '~/storage/LocalStorage';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import * as skillUtils from '../../../utilities/objects/Skill';

const AddSkill = ({ onClose, isEdit, values }) => {
  const { data } = useContext(FormContext);

  let skillsList = [];

  const validateSkill = Yup.object().shape({
    skill: Yup.string().required(),
  });

  let initialValues = {};

  const handleSubmit = (formValues, setFieldError) => {
    if (isEdit) {
      handleSubmitOnEdit(formValues);
    } else {
      handleSubmitOnAdd(data, formValues, skillsList, storage, setFieldError);
    }
  };

  const handleOnAdd = (e, formValues, setFieldError, setFieldTouched, resetForm) => {
    e.preventDefault();
    if (!formValues.skill) {
      setFieldError('skill', 'Skill is required');
      setFieldTouched('skill', true);
    }

    const skillObj = skillUtils.getSkillObject({ ...formValues });

    skillsList.push(skillObj);

    resetForm();
  };

  const handleSubmitOnAdd = (data, formValues, skillsList, storage, setFieldError) => {
    if (formValues.skill) {
      const skillObj = skillUtils.getSkillObject({ ...formValues });

      if (data.get.skills) {
        data.get['skills'].push(skillObj);
      } else {
        data.get['skills'] = [];

        data.get['skills'].push(skillObj);
      }
    }
    if (skillsList.length > 0) {
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
    }

    data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, data.get);

    onClose();
  };

  const handleSubmitOnEdit = formValues => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      onClose();
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
        onSubmit={(values, { setFieldError }) => {
          handleSubmit(values, setFieldError);
        }}
        validationSchema={validateSkill}
      >
        {({ values, setFieldError, setFieldTouched, resetForm }) => (
          <Form>
            <div className="form__content">
              <InputText name="skill" label="Enter your skill" />
              <InputText name="subSkills" label="Add Sub Skill" placeholder="Add comma separated values" />
              {!isEdit && (
                <div
                  className="input add-container"
                  onClick={e => {
                    handleOnAdd(e, values, setFieldError, setFieldTouched, resetForm);
                  }}
                >
                  <span className="card__footer-icon">{ADD}</span>
                  <span className="card__footer-label add-container__text">Add another skill</span>
                </div>
              )}
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Done" type="submit" />
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
