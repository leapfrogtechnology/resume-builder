import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import InputRadio from '~/components/inputradio/InputRadio';
import FormHeader from '~/components/formheader/FormHeader';
import CheckboxInput from '~/components/checkbox/CheckboxInput';
import validateProjectInformation from '~/validations/Project';

const AddProject = ({ onClose }) => {
  const { data, setData } = useContext(FormContext);

  return (
    <div className="form-container">
      <div className="form">
        <div className="card">
          <div className="close-option" onClick={onClose}>
            <img src={Close} alt="close" />
          </div>
          <FormHeader title="Add Project" />
          <Formik
            initialValues={{
              name: '',
              startDate: '',
              endDate: '',
              ongoing: '',
              type: '',
              description: '',
            }}
            onSubmit={values => {
              setData(prevState => ({ ...prevState, ...values }));
            }}
            validationSchema={validateProjectInformation}
          >
            {({ values }) => (
              <Form>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <div className="form__content">
                  <InputText name="name" label="Title of your Project" />
                  <div className="form__date-field">
                    <InputDate name="startDate" label="Start Date" placeholder="Select date" modifier={true} />
                    <InputDate name="endDate" label="End Date" placeholder="Select date" modifier={true} />
                  </div>
                  <div className="form__checkbox-field">
                    <CheckboxInput name="ongoing" value="This project is currently ongoing" />
                  </div>
                  <div className="form__radio-field">
                    <label className="input__label">What Type of Project was This?</label>
                    <div className="form__radio-field-content">
                      <InputRadio name="type" value="Professional" placeholder="Professional" />
                      <InputRadio name="type" value="Personal" placeholder="Personal" />
                      <InputRadio name="type" value="Social" placeholder="Social" />
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
                      <Button content="Add Project" />
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

AddProject.propTypes = {
  onClose: PropTypes.func,
};

export default AddProject;
