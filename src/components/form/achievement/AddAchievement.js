import _ from 'lodash';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import * as achievementUtils from '~/utilities/objects/Achievement';
import validateAchievementInformation from '~/validations/Achievement';
import OutsideClickDetector from '~/components/detector/OutsideClickDetector';

const AddAchievement = ({ onClose, isEdit, values }) => {
  const data = useContext(FormContext).data;

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
    const achievementObj = achievementUtils.getAchievementObject({ ...formValues });

    if (data.get.achievements) {
      data.get['achievements'].push(achievementObj);
    } else {
      data.get['achievements'] = [];

      data.get['achievements'].push(achievementObj);
    }
  };

  const handleSubmitOnEdit = formValues => {
    const isEqual = _.isEqual(formValues, values);

    if (isEqual) {
      return;
    } else {
      const achievementObj = achievementUtils.getAchievementObject({ ...formValues });
      const achievements = data.get.achievements;

      const index = achievements.findIndex(achievement => {
        return achievement.name === values.name && achievement.date === values.date;
      });

      data.get['achievements'][index] = achievementObj;
    }
  };

  const getInitialValues = () => {
    let initialValues = {};

    if (isEdit) {
      initialValues = { ...values };
    } else {
      initialValues = {
        name: '',
        date: '',
        description: '',
      };
    }

    return initialValues;
  };

  return (
    <OutsideClickDetector onClose={onClose}>
      <FormHeader title={!isEdit ? 'Add Achievement' : 'Edit Achievement'} />
      <Formik
        initialValues={getInitialValues()}
        onSubmit={values => {
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
                  <Button content={!isEdit ? 'Add Achievement' : 'Save Info'} type="submit" />
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

AddAchievement.propTypes = {
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
  values: PropTypes.object || PropTypes.string,
};

export default AddAchievement;
