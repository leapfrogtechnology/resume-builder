import React, { useState, useEffect } from 'react';

import Header from '~/components/header/Header';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

import { FormContext } from '~/components/FormContext';
import * as storageUtil from '~/storage/LocalStorage';

const Dashboard = () => {
  const [preview, setPreview] = useState(false);
  const [username] = useState(storageUtil.getUser().name);
  const [data, updateData] = useState({});

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
    <FormContext.Provider value={store}>
      <Header name={username} status="Employee" onPreviewBtnClicked={togglePreview} />
      <section className="container">
        <div className="main-container">
          <div className="main-content">
            <PersonalInformation />
            <Skills />
            <WorkExperience />
            <ProjectsUndertaken />
            <Achievements />
            <Certificate />
          </div>
          <Sidenav />
        </div>
      </section>
    </FormContext.Provider>
  );
};

export default Dashboard;
