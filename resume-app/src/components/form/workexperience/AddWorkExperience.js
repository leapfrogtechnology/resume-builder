import * as _ from "lodash";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import React, { useContext } from "react";

import Button from "components/button/Button";
import { FormContext } from "components/FormContext";
import InputText from "components/inputtext/InputText";
import InputDate from "components/inputdate/InputDate";
import FormHeader from "components/formheader/FormHeader";
import CheckboxInput from "components/checkbox/CheckboxInput";

import { validateWorkExperience } from "validations/WorkExperience";
import * as workExperienceUtils from "utilities/objects/WorkExperience";

const AddWorkExperience = ({ onClose, isEdit, values }) => {
  const { data, updateCV } = useContext(FormContext);

  let initialValues = {};

  const handleSubmit = (formValues) => {
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
    const workExperienceObj = workExperienceUtils.getWorkExperienceObject({
      ...formValues,
    });

    if (prevData.workExperience) {
      prevData["workExperience"].push(workExperienceObj);
    } else {
      prevData["workExperience"] = [];
      prevData["workExperience"].push(workExperienceObj);
    }
  };

  const handleSubmitOnEdit = (formValues, prevData) => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      onClose();

      return;
    } else {
      const workObj = workExperienceUtils.getWorkExperienceObject({
        ...formValues,
      });
      const workExperiences = data.get.workExperience;

      const index = workExperiences.findIndex(
        (experience) => experience.id === values.id
      );

      prevData["workExperience"][index] = workObj;
    }
  };

  const getInitialValues = () => {
    if (isEdit) {
      const workExperiences = data.get.workExperience;

      const work = workExperiences.find((work) => work.id === values.id);

      initialValues = {
        nameOrganization: work.name,
        position: work.position,
        startDate: work.startDate,
        endDate: work.endDate,
        currentWork: work.ongoing,
        roles: work.responsibilities,
        achievements: work.achievements,
        nameReferee: work.refereeName,
        contactReferee: work.refereeContact,
      };
    } else {
      initialValues = {
        nameOrganization: "",
        position: "",
        startDate: "",
        endDate: "",
        currentWork: false,
        roles: "",
        achievements: "",
        nameReferee: "",
        contactReferee: "",
      };
    }

    return initialValues;
  };

  return (
    <>
      <FormHeader
        title={!isEdit ? "Add Work Experience" : "Edit Work Experience"}
      />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validateWorkExperience}
      >
        {({ values, setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form__content">
              <InputText
                name="nameOrganization"
                label="Name of the organization"
                placeholder="eg. Apple"
              />
              <InputText
                name="position"
                label="Your Title or Position"
                placeholder="eg. Software Engineer"
              />
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
                  checkBoxState={values.currentWork}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
              </div>
              <CheckboxInput
                name="currentWork"
                value="I currently work here"
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
              <InputText
                name="roles"
                label="Roles and Responsibilities. "
                placeholder="Separate each role with a period (.) to separate them in new lines."
                type="text-area"
              />
              <InputText
                name="achievements"
                label="Achievements and Tasks (optional).  "
                placeholder="Separate each achievement with a period (.) to separate them in new lines."
                type="text-area"
              />
              <InputText
                name="nameReferee"
                label="Name of your Referee (optional)"
                placeholder="eg. someone we can reach out for more info if needed"
              />
              <InputText
                name="contactReferee"
                label="Contact number or phone (optional)"
                placeholder="eg. how we can contact your referee"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button
                    content={!isEdit ? "Add Experience" : "Save Info"}
                    type="submit"
                  />
                </div>
                <div className="form-button__right">
                  <Button
                    content="Cancel"
                    modifier="secondary"
                    type="button"
                    onclick={onClose}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

AddWorkExperience.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddWorkExperience;
