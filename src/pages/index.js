import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import DATA from '../constant/mockData';
import Header from '~/components/header/Header';
import { FormContext } from '../components/FormContext';
import Dashboard from '~/components/dashboard/Dashboard';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);
  const [data, updateData] = useState({ experience: 0 });

  const store = {
    preview: { get: preview, set: setPreview },
    data: { get: data, set: updateData },
  };

  const username = DATA.name;

  const handleOnPreviewBtnClicked = e => {
    e.preventDefault();
    setPreview(!preview);
  };

  return (
    <div className="page-container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ResumeBuilder</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
        {/* <!-- jQuery library --> */}
        <script src="js/jquery.min.js"></script>

        {/* <!-- jsPDF library --> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
      </Head>
      <FormContext.Provider value={store}>
        <Header name={username} status="Employee" onPreviewBtnClicked={handleOnPreviewBtnClicked} />
        <Dashboard />
      </FormContext.Provider>
    </div>
  );
};

export default App;
