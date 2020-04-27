import React, { useState } from 'react';

import Head from 'next/head';
import DATA from '../constant/mockData';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';

export const AppContext = React.createContext({});

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);
  const [data, updateData] = useState(DATA);

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
      </Head>
      <AppContext.Provider value={store}>
        <Header
          name={username}
          status="Employee"
          preview={preview}
          experience="5 years professional experience"
          onPreviewBtnClicked={handleOnPreviewBtnClicked}
        />
        <Dashboard />
      </AppContext.Provider>
    </div>
  );
};

export default App;
