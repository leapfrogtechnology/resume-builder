import React, { useState } from 'react';

import Head from 'next/head';
import DATA from '../constant/mockData';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';
import { FormContext } from '../components/FormContext';

export const AppContext = React.createContext({});

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);
  const [data, updateData] = useState({
    name: 'Ribby McFroggy',
    email: { value: 'ribby@lftechnology.com', hidden: false },
  });

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
      </Head>
      <FormContext.Provider value={store}>
        <Header
          name={username}
          status="Employee"
          preview={preview}
          experience="5 years professional experience"
          onPreviewBtnClicked={handleOnPreviewBtnClicked}
        />
        <Dashboard />
      </FormContext.Provider>
    </div>
  );
};

export default App;
