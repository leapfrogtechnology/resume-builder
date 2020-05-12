import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext, useState } from 'react';

import { ADD } from '~/components/icons/icon';
import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import * as skillUtils from '~/utilities/objects/Skill';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

const AddSkill = ({ onClose, isEdit, values }) => {
  const { data } = useContext(FormContext);

  const [error, setError] = useState({ status: false, message: 'Skill is a required field' });

  const skillsList = [];

  let initialValues = {};

  const handleOnInputChange = value => {
    if (value) {
      const err = { status: false, message: '' };

      setError(prevState => ({ ...prevState, ...err }));
    }
  };

  const handleSubmit = formValues => {
    if (isEdit) {
      if (!formValues.skill) {
        const err = { status: true, message: 'Skill is a required field' };

        setError(prevState => ({ ...prevState, ...err }));

        return;
      }
      handleSubmitOnEdit(formValues);
    } else {
      if (!formValues.skill && skillsList.length < 1) {
        const err = { status: true, message: 'Skill is a required field' };

        setError(prevState => ({ ...prevState, ...err }));

        return;
      }
      handleSubmitOnAdd(data, formValues, skillsList, storage);
    }
  };

  const handleOnAdd = (e, formValues, resetForm) => {
    e.preventDefault();

    if (!formValues.skill) {
      const err = { status: true, message: 'Skill is a required field' };

      setError(prevState => ({ ...prevState, ...err }));

      return;
    }

    const skillObj = skillUtils.getSkillObject({ ...formValues });

    skillsList.push(skillObj);

    resetForm();
  };

  const handleSubmitOnAdd = (data, formValues, skillsList, storage) => {
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

    storage.saveResume(data.get);

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

    storage.saveResume(data.get);

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
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ values, resetForm, setFieldValue }) => (
          <Form>
            <div className="form__content">
              <InputText
                name="skill"
                label="Enter your skill"
                error={error}
                onchange={handleOnInputChange}
                setFieldValue={setFieldValue}
              />
              <InputText name="subSkills" label="Add Sub Skill" placeholder="Add comma separated values" />
              {!isEdit && (
                <div
                  className="input add-container"
                  onClick={e => {
                    handleOnAdd(e, values, resetForm);
                  }}
                >
                  <span className="card__footer-icon">{ADD('#B3B3B3')}</span>
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
