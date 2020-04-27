import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import * as achievementUtils from '~/utilities/objects/Achievement';
import validateAchievementInformation from '~/validations/Achievement';

const AddAchievement = () => {
  const { data, setData } = useContext(FormContext);

  const handleSubmit = values => {
    const achievementObj = achievementUtils.getAchievementObject({ ...values });

    if (data.achievements) {
      data['achievements'].push(achievementObj);
    } else {
      data['achievements'] = [];
      data['achievements'].push(achievementObj);
    }

    setData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      <FormHeader title="Add Achievement" />
      <Formik
        initialValues={{
          name: '',
          date: '',
          description: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateAchievementInformation}
      >
        {({ values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <div className="form__content">
              <InputText name="name" label="Title of your Achievement" />
              <InputDate name="date" label="Date of the Achievement" />
              <InputText
                name="description"
                label="Describe your Achievements (optional)"
                placeholder="eg. I was awarded ..."
                type="text-area"
              />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Add Achievement" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" isCancel={true} />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAchievement;
