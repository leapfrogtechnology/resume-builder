import React, { useState } from 'react';

// import { BrowserRouter } from 'react-router-dom';
import Header from '~/components/header/Header';
import Dashboard from '~/components/dashboard/Dashboard';

const App = () => {
  // App state
  const [preview, setPreview] = useState(false);

  // Data source
  const userProfile = {
    personalInformation: {
      name: { data: 'Ribby McFroggy', visibility: true, bold: true },
      role: { data: 'Engineering Manager', visibility: true, bold: true },
      summary: {
        data:
          'My name is Ribby and I am currently the Engineering Manager at Leapfrog. I love to challenge the normal and help build extraordinary product expeirences.',
        visibility: true,
      },
    },
    achievements: [
      {
        title: 'Headhunt Award',
        date: 'December 2012',
        visibility: false,
      },
      {
        title: 'Golden Jublee Award',
        date: 'December 2015',
        visibility: true,
      },
    ],
  };

  const username = userProfile.personalInformation.name.data;

  const handleOnPreviewBtnClicked = e => {
    e.preventDefault();
    setPreview(!preview);
  };

  return (
    <div className="page-container">
      <Header
        name={username}
        status="Employee"
        experience="5 years professional experience"
        onPreviewBtnClicked={handleOnPreviewBtnClicked}
      />
      <Dashboard profile={userProfile} preview={preview} />
    </div>
  );
};

export default App;
