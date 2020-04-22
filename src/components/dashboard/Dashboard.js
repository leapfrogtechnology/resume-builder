import React, { useState } from 'react';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

import { FormContext } from '../FormContext';

const Dashboard = () => {
  const [data, setData] = useState({});

  return (
    <section className="container">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="main-container">
        <div className="main-content">
          <FormContext.Provider value={{ data, setData }}>
            <PersonalInformation />
            <Skills />
            <WorkExperience />
            <ProjectsUndertaken />
            <Achievements />
            <Certificate />
          </FormContext.Provider>
        </div>
        <Sidenav />
      </div>
    </section>
  );
};

export default Dashboard;
