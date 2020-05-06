import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import * as storage from '~/storage/LocalStorage';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import InputRadio from '~/components/inputradio/InputRadio';
import FormHeader from '~/components/formheader/FormHeader';
import * as projectUtils from '~/utilities/objects/Project';
import validateProjectInformation from '~/validations/Project';
import CheckboxInput from '~/components/checkbox/CheckboxInput';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

const AddProject = ({ onClose, isEdit, values }) => {
  const { data } = useContext(FormContext);

  let projectIndex = -1;
  let initialValues = {};

  const handleSubmit = formValues => {
    if (isEdit) {
      handleSubmitOnEdit(formValues);
    } else {
      handleSubmitOnAdd(formValues);
    }

    data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, data.get);

    onClose();
  };

  const handleSubmitOnAdd = formValues => {
    const projectObj = projectUtils.getProjectObject({ ...formValues });

    if (data.get.projects) {
      data.get['projects'].push(projectObj);
    } else {
      data.get['projects'] = [];
      data.get['projects'].push(projectObj);
    }
  };

  const handleSubmitOnEdit = formValues => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      return;
    } else {
      const projectObj = projectUtils.getProjectObject({ ...formValues });

      data.get['projects'][projectIndex] = projectObj;
    }
  };

  const getInitialValues = () => {
    if (isEdit) {
      const projects = data.get['projects'];

      projectIndex = projects.findIndex(project => {
        return project.name === values.name && project.startDate === values.date;
      });

      initialValues = {
        name: projects[projectIndex].name,
        startDate: projects[projectIndex].startDate,
        endDate: projects[projectIndex].endDate,
        ongoing: projects[projectIndex].ongoing,
        type: projects[projectIndex].type,
        description: projects[projectIndex].description,
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
    <OutsideClickDetector onClose={onClose}>
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
                  modifier={true}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <InputDate
                  name="endDate"
                  label="End Date"
                  placeholder="Select date"
                  modifier={true}
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
                  <Button content="Cancel" isCancel={true} type="button" onclick={onClose} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </OutsideClickDetector>
  );
};

AddProject.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddProject;
