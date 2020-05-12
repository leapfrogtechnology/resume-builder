import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Header from '~/components/header/Header';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, updateData] = useState({});

  const username = data.name;

  const togglePreview = () => setPreview(!preview);

  const deleteCVHandler = () => {
    storage.deleteResume();
    updateData({});
  };

  const store = {
    preview: { get: preview, set: setPreview },
    data: { get: data, set: updateData },
    deleteCV: deleteCVHandler,
  };

  useEffect(() => {
    if (storage.getResume()) {
      const resume = storage.getResume();

      updateData(prevState => ({ ...prevState, ...resume }));
    } else {
      updateData({});
    }
    setLoading(!loading);
  }, []);

  if (loading) {
    return null;
  }

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
        <Header name={username} status="Employee" onPreviewBtnClicked={togglePreview} />
        <Dashboard />
      </FormContext.Provider>
    </div>
  );
};

export default App;
