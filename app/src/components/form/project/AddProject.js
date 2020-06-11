import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import InputRadio from '~/components/inputradio/InputRadio';
import FormHeader from '~/components/formheader/FormHeader';
import CheckboxInput from '~/components/checkbox/CheckboxInput';

import * as projectUtils from '~/utilities/objects/Project';
import validateProjectInformation from '~/validations/Project';

const AddProject = ({ onClose, isEdit, values }) => {
  const { data, updateCV } = useContext(FormContext);

  let initialValues = {};

  const handleSubmit = formValues => {
    const prevData = { ...data.get };

    if (isEdit) {
      handleSubmitOnEdit(formValues, prevData);
    } else {
      handleSubmitOnAdd(formValues, prevData);
    }

    updateCV(prevData);
    onClose();
  };

  const handleSubmitOnAdd = (formValues, prevData) => {
    const projectObj = projectUtils.getProjectObject({ ...formValues });

    if (prevData.projects) {
      prevData['projects'].push(projectObj);
    } else {
      prevData['projects'] = [];
      prevData['projects'].push(projectObj);
    }
  };

  const handleSubmitOnEdit = (formValues, prevData) => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      onClose();
      return;
    } else {
      const projectObj = projectUtils.getProjectObject({ ...formValues });
      const projects = data.get.projects;

      const index = projects.findIndex(project => project.id === values.id);

      prevData['projects'][index] = projectObj;
    }
  };

  const getInitialValues = () => {
    if (isEdit) {
      const projects = data.get.projects;

      const project = projects.find(project => project.id === values.id);

      initialValues = {
        name: project.name,
        startDate: project.startDate,
        endDate: project.endDate,
        ongoing: project.ongoing,
        type: project.type,
        description: project.description,
      };
    } else {
      initialValues = {
        name: '',
        startDate: '',
        endDate: '',
        ongoing: '',
        type: '',
        description: '',
      };
    }

    return initialValues;
  };

  return (
    <>
      <FormHeader title={!isEdit ? 'Add Project' : 'Edit Project'} />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateProjectInformation}
        validateOnChange={validateProjectInformation}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form__content">
              <InputText name="name" label="Title of your Project" />
              <div className="form__date-field">
                <InputDate
                  name="startDate"
                  label="Start Date"
                  placeholder="Select date"
                  modifier="secondary"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <InputDate
                  name="endDate"
                  label="End Date"
                  placeholder="Select date"
                  modifier="secondary"
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </div>
              <div className="form__checkbox-field">
                <CheckboxInput name="ongoing" value="This project is currently ongoing" />
              </div>
              <div className="form__radio-field">
                <label className="input__label">What Type of Project was This?</label>
                <div className="form__radio-field-content">
                  <InputRadio
                    name="type"
                    value="Professional"
                    placeholder="Professional"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                  <InputRadio
                    name="type"
                    value="Personal"
                    placeholder="Personal"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                  <InputRadio
                    name="type"
                    value="Social"
                    placeholder="Social"
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                </div>
              </div>
              <InputText
                name="description"
                label="Describe this Project (optional)"
                placeholder="eg. I helped create..."
                type="text-area"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content={!isEdit ? 'Add Project' : 'Save Info'} type="submit" />
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

AddProject.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddProject;
