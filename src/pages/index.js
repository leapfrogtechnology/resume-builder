import Head from 'next/head';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import Header from '~/components/header/Header';
import { FormContext } from '~/components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

import textConstants from '~/constant/textConstants';
import routeConstants from '~/constant/routeConstants';

import withAuth from '~/utilities/auth';
import { getErrorMessage } from '~/utilities/getErrorMessage';

import * as storageUtil from '~/storage/LocalStorage';
import * as resumeService from '~/service/resumeBuilder';

const Profile = () => {
  const router = useRouter();
  const [data, updateData] = useState({});
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);

  const togglePreview = () => setPreview(!preview);

  const deleteCVHandler = async () => {
    try {
      const result = await resumeService.deleteResume();

      updateData(result);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const updateCvHandler = updatedData => {
    try {
      const result = resumeService.saveResume(updatedData);

      updateData(prevState => ({ ...prevState, ...updatedData }));
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const handleErrorResponse = err => {
    const errorMessage = getErrorMessage(err);

    switch (errorMessage) {
      case textConstants.SESSION_EXPIRED:
        swal({ text: errorMessage });
        logout();
      default:
        swal({ text: errorMessage });
    }
  };

  const logout = () => {
    storageUtil.logout();

    router.push(routeConstants.LOGIN);
  };

  const store = {
    preview: { get: preview, set: setPreview },
    data: { get: data, set: updateData },
    deleteCV: deleteCVHandler,
    updateCV: updateCvHandler,
  };

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const result = await resumeService.fetchUserProfile();
        const resume = JSON.parse(result.data);

        updateData(resume ? resume : {});
        setLoading(false);
      } catch (err) {
        handleErrorResponse(err);
      }
    };
    getUserProfile();
  }, []);

  return (
    !loading && (
      <div className="page-container">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>ResumeBuilder</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
        </Head>
        <FormContext.Provider value={store}>
          <Header name={data.name} btnType="preview" onclick={togglePreview} />
          <Dashboard />
        </FormContext.Provider>
      </div>
    )
  );
};

export default withAuth(Profile);
