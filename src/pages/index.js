import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import Header from '~/components/header/Header';
import { FormContext } from '~/components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

import withAuth from '~/utilities/auth';
import * as storageUtil from '~/storage/LocalStorage';

const Profile = () => {
  const [data, updateData] = useState({});
  const [preview, setPreview] = useState(false);

  const togglePreview = () => setPreview(!preview);

  const deleteCVHandler = () => {
    storageUtil.deleteResume();
    updateData({});
  };

  const store = {
    preview: { get: preview, set: setPreview },
    data: { get: data, set: updateData },
    deleteCV: deleteCVHandler,
  };

  useEffect(() => {
    const resume = storageUtil.getResume();

    if (resume) {
      updateData(prevState => ({ ...prevState, ...resume }));
    } else {
      updateData({});
    }
  }, []);

  return (
    <div className="page-container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ResumeBuilder</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
      </Head>
      <FormContext.Provider value={store}>
        <Header name={data.name} status="Employee" onPreviewBtnClicked={togglePreview} />
        <Dashboard />
      </FormContext.Provider>
    </div>
  );
};

export default withAuth(Profile);
