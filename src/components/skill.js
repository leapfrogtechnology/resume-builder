/* eslint-disable react/prop-types */
import React from 'react';
import * as Yup from 'yup';
import Head from 'next/head';
import { skills } from '../utils/Constants';
import { Formik, Form, Field } from 'formik';
import { ChipInput } from 'material-ui-formik-components';

const Skill = props => {
  const validation = Yup.object().shape({
    subSkills: Yup.string().max(20),
  });

  return (
    <div className="container">
      <div className="col col-md-5">
        <Head>
          <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Formik
          initialValues={{
            skills: '',
            subSkills: [],
          }}
          onSubmit={values => console.log(values)}
          validationSchema={validation}
        >
          {formik => (
            <Form>
              <div>
                <label htmlFor="skills">Skill</label>
              </div>
              <Field as="select" name="skills">
                <option value="" label="Select a skil" />
                {skills.map(skill => {
                  return <option key={skill} value={skill} label={skill} />;
                })}
              </Field>

              <Field
                name="Sub Skills"
                component={ChipInput}
                label="Sub Skills"
                disabled={formik.values.skills ? false : true}
              />

              <div className="buttons">
                <button type="submit">Submit</button>
                <button onClick={() => props.setIsOpen(false)}>Close </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Skill;
