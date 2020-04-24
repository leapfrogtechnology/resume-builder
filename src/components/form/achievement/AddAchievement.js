import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import validateAchievementInformation from '~/validations/Achievement';

const AddAchievement = ({ onClose }) => {
  const { data, setData } = useContext(FormContext);

  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option" onClick={onClose}>
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Achievement" />
          <Formik
            initialValues={{
              name: '',
              date: '',
              description: '',
            }}
            onSubmit={values => {
              setData(prevState => ({ ...prevState, ...values }));
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
        </div>
      </div>
    </div>
  );
};

AddAchievement.propTypes = {
  onClose: PropTypes.func,
};

export default AddAchievement;
