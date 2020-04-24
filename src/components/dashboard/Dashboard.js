import React, { useState } from 'react';

import { FormContext } from '../FormContext';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

const Dashboard = () => {
  const [data, setData] = useState({});

  return (
    <section className="container">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="main-container">
        <FormContext.Provider value={{ data, setData }}>
          <div className="main-content">
            <PersonalInformation />
            <Skills />
            <WorkExperience />
            <ProjectsUndertaken />
            <Achievements />
            <Certificate />
          </div>
          <Sidenav />
        </FormContext.Provider>
      </div>
    </section>
  );
};

export default Dashboard;
