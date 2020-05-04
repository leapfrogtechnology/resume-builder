import React from 'react';

import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import ContentBlock from '~/components/content/ContentBlock';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

const Dashboard = () => {
  return (
    <section className="container">
      <div className="main-container">
        <div className="main-content">
          <ContentBlock childComponent={PersonalInformation} />
          <ContentBlock childComponent={Skills} />
          <ContentBlock childComponent={WorkExperience} />
          <ContentBlock childComponent={ProjectsUndertaken} />
          <ContentBlock childComponent={Achievements} />
          <ContentBlock childComponent={Certificate} />
        </div>
        <Sidenav />
      </div>
    </section>
  );
};

export default Dashboard;
