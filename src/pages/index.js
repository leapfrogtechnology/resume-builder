import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import Header from '~/components/header/Header';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

import withAuth from '~/utilities/auth';
import * as storageUtil from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';

const Dashboard = () => {
  const [preview, setPreview] = useState(false);
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
    <div className="page-container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>ResumeBuilder</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
      </Head>
      <FormContext.Provider value={store}>
        <Header name="Hello, Leapfrogger !" status="Employee" onPreviewBtnClicked={togglePreview} />
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
    </div>
  );
};

export default withAuth(Dashboard);
