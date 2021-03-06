import _ from "lodash";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import React, { useContext } from "react";

import Button from "components/button/Button";
import { FormContext } from "components/FormContext";
import InputText from "components/inputtext/InputText";
import InputDate from "components/inputdate/InputDate";
import FormHeader from "components/formheader/FormHeader";

import * as achievementUtils from "utilities/objects/Achievement";
import validateAchievementInformation from "validations/Achievement";

const AddAchievement = ({ onClose, isEdit, values }) => {
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
    const achievementObj = achievementUtils.getAchievementObject({
      ...formValues,
    });

    if (prevData.achievements) {
      prevData["achievements"].push(achievementObj);
    } else {
      prevData["achievements"] = [];

      prevData["achievements"].push(achievementObj);
    }
  };

  const handleSubmitOnEdit = (formValues, prevData) => {
    const isEqual = _.isEqual(formValues, initialValues);

    if (isEqual) {
      onClose();
      return;
    } else {
      const achievementObj = achievementUtils.getAchievementObject({
        ...formValues,
      });
      const achievements = data.get.achievements;

      const index = achievements.findIndex(
        (achievement) => achievement.id === values.id
      );

      prevData["achievements"][index] = achievementObj;
    }
  };

  const getInitialValues = () => {
    if (isEdit) {
      const achievements = data.get.achievements;
      const achievement = achievements.find(
        (achievement) => achievement.id === values.id
      );

      initialValues = {
        name: achievement.name,
        date: achievement.date,
        description: achievement.description,
      };
    } else {
      initialValues = {
        name: "",
        date: "",
        description: "",
      };
    }

    return initialValues;
  };

  return (
    <>
      <FormHeader title={!isEdit ? "Add Achievement" : "Edit Achievement"} />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validateOnChange={validateAchievementInformation}
        validationSchema={validateAchievementInformation}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form__content">
              <InputText name="name" label="Title of your Achievement" />
              <InputDate
                name="date"
                label="Date of the Achievement"
                placeholder="Select date"
                modifier={false}
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
              />
              <InputText
                name="description"
                label="Describe your Achievements (optional)"
                placeholder="eg. I was awarded ..."
                type="text-area"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button
                    content={!isEdit ? "Add Achievement" : "Save Info"}
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

AddAchievement.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddAchievement;
