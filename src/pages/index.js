import React, { useState } from 'react';

import Header from '../components/header/Header';
import UserDetail from '../components/userdetail/UserDetail';
import PersonalInfo from '../components/preview/PersonalInfo';

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
      <Header name={personalInfo.name.data} status="Employee" />
      <UserDetail
        name={personalInfo.name.data}
        experience="5 years professional experience"
        onPreviewBtnClicked={handleOnPreviewBtnClicked}
      />
      <PersonalInfo personalInfo={personalInfo} preview={preview}></PersonalInfo>
    </div>
  );
};

export default App;
