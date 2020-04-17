import React, { useState } from 'react';

import Header from '../components/header/Header';
import Dashboard from '../components/dashboard/Dashboard';
// import { BrowserRouter } from 'react-router-dom';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);

  // Data source
  const personalInfo = {
    name: { data: 'Ribby McFroggy', visibility: true },
    summary: { data: 'Hlelo', visibility: true },
  };

  const handleOnPreviewBtnClicked = e => {
    e.preventDefault();
    setPreview(!preview);
  };

  return (
    <div className="page-container">
      <Header
        name={personalInfo.name.data}
        status="Employee"
        experience="5 years professional experience"
        onPreviewBtnClicked={handleOnPreviewBtnClicked}
      />
      <Dashboard />
    </div>
  );
};

export default App;
