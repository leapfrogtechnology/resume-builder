import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Router from '~/routes';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <Router />
    </div>
  );
};

export default App;
