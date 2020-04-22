import React from 'react';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';
import Head from 'next/head';

const App = () => {
  return (
    <div className="page-container">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ResumeBuilder</title>
      </Head>
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
