import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext, useState } from 'react';

import { ADD } from '~/components/icons/icon';
import Button from '~/components/button/Button';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';

import * as skillUtils from '~/utilities/objects/Skill';

const AddSkill = ({ onClose, isEdit, values }) => {
  const { data, updateCV } = useContext(FormContext);

  const [error, setError] = useState({ status: false, message: 'Skill is a required field' });

  const [skills] = useState([]);

  let initialValues = {};

  const handleOnInputChange = value => {
    if (value) {
      const err = { status: false, message: '' };

      setError(prevState => ({ ...prevState, ...err }));
    }
  };

  const handleSubmit = async formValues => {
    if (isEdit) {
      if (!formValues.skill) {
        const err = { status: true, message: 'Skill is a required field' };

        setError(prevState => ({ ...prevState, ...err }));

        return;
      }
      handleSubmitOnEdit(formValues);
    } else {
      if (!formValues.skill && skills.length < 1) {
        const err = { status: true, message: 'Skill is a required field' };

        setError(prevState => ({ ...prevState, ...err }));

        return;
      }
      handleSubmitOnAdd(data, formValues, skills);
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

    skills.push(skillObj);

    resetForm();
  };

  const handleSubmitOnAdd = async (data, formValues, skillsList) => {
    const prevData = { ...data.get };

    if (skillsList.length > 0) {
      if (prevData.skills) {
        skillsList.forEach(skill => {
          prevData['skills'].push(skill);
        });
      } else {
        prevData['skills'] = [];

        skillsList.forEach(skill => {
          prevData['skills'].push(skill);
        });
      }
    }

    if (formValues.skill) {
      const skillObj = skillUtils.getSkillObject({ ...formValues });

      if (prevData.skills) {
        prevData['skills'].push(skillObj);
      } else {
        prevData['skills'] = [];

        prevData['skills'].push(skillObj);
      }
    }

    updateCV(prevData);
    onClose();
  };

  const handleSubmitOnEdit = async formValues => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      onClose();

      return;
    } else {
      const skillObj = skillUtils.getSkillObject({ ...formValues });
      const prevData = { ...data.get };
      const skills = prevData['skills'];

      const index = skills.findIndex(skill => {
        return skill.name === values.name;
      });

      prevData['skills'][index] = skillObj;

      updateCV(prevData);
      onClose();
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
                  <Button content="Cancel" modifier="secondary" type="button" onclick={onClose} />
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
