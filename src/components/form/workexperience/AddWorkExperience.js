import { Formik, Form } from 'formik';
import React, { useContext } from 'react';

import { Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import { FormContext } from '../../FormContext';
import InputText from '~/components/inputtext/InputText';
import InputDate from '~/components/inputdate/InputDate';
import FormHeader from '~/components/formheader/FormHeader';
import CheckboxInput from '~/components/checkbox/CheckboxInput';
import { validateWorkExperience } from '~/validations/WorkExperience';
import * as workExperienceUtils from '../../../utilities/objects/WorkExperience';

const AddWorkExperience = () => {
  const { data, setData } = useContext(FormContext);

  const handleSubmit = values => {
    const workExperienceObj = workExperienceUtils.getWorkExperienceObject({ ...values });

    if (data.workExperience) {
      data['workExperience'].push(workExperienceObj);
    } else {
      data['workExperience'] = [];
      data['workExperience'].push(workExperienceObj);
    }

    setData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      <FormHeader title="Add Work Experience" />
      <Formik
        initialValues={{
          nameOrganization: '',
          position: '',
          startDate: '',
          endDate: '',
          currentWork: false,
          roles: '',
          achievements: '',
          nameReferee: '',
          contactReferee: '',
        }}
        onSubmit={values => {
          handleSubmit(values);
        }}
        validationSchema={validateWorkExperience}
      >
        {({ values }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <div className="form__content">
              <InputText name="nameOrganization" label="Name of the organization" placeholder="eg. Apple" />
              <InputText name="position" label="Your Title or Position" placeholder="eg. Software Engineer" />
              <div className="form__date-field">
                <InputDate name="startDate" label="Start Date" placeholder="Select date" modifier={true} />
                <InputDate name="endDate" label="End Date" placeholder="Select date" modifier={true} />
              </div>
              <CheckboxInput name="currentWork" value="I currently work here" />
              <InputText
                name="roles"
                label="Describe Your Roles and Responsibilities"
                placeholder="eg. I am responsible for..."
                type="text-area"
              />
              <InputText
                name="achievements"
                label="List out your Achievements and Tasks (optional)"
                placeholder="eg. I was awarded with..."
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
                  <Button content="Add Experience" />
                </div>
                <div className="form-button__right">
                  <img src={Trash} alt="Delete" />
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

export default AddWorkExperience;
