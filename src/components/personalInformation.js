/* eslint-disable react/prop-types */
import React from 'react';
import * as Yup from 'yup';
import Head from 'next/head';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PersonalInformation = props => {
  const validation = Yup.object().shape({
    name: Yup.string().min(15, 'Above 15 characters.').max(35, 'Limit 35 characters').required(),
    role: Yup.string().max(40, 'Limit 40 characters').required(),
    introduction: Yup.string().max(200, 'Limit 200 characters').required(),
  });

  return (
    <div className="container">
      <div className="col col-md-5">
        <Head>
          <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Formik
          initialValues={{
            name: '',
            role: '',
            introduction: '',
          }}
          onSubmit={values => {
            props.setData(prevState => ({ ...prevState, ...values }));
            props.setIsOpen(false);
          }}
          validationSchema={validation}
        >
          {({ errors, touched }) => (
            <Form>
              <div>Personal Information</div>
              <div>
                <label>Name</label>
                <Field
                  name="name"
                  type="input"
                  placeholder="Fullname"
                  className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                />
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </div>

              <div>
                <label>Role</label>
                <Field
                  name="role"
                  type="input"
                  placeholder="Current designated role"
                  className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}
                />
                <ErrorMessage name="role" component="div" className="invalid-feedback" />
              </div>

              <div>
                <label>Introduction</label>
                <Field
                  name="introduction"
                  component="textarea"
                  rows="2"
                  placeholder="Short introduction"
                  className={'form-control' + (errors.introduction && touched.introduction ? ' is-invalid' : '')}
                />
                <ErrorMessage name="introduction" component="div" className="invalid-feedback" />
              </div>
              <div>
                <button type="submit">Save Info</button>
              </div>
              <button onClick={() => props.setIsOpen(false)}>Close</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInformation;
