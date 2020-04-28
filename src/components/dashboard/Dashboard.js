import React from 'react';
import PropTypes from 'prop-types';

import Pdf from '../pdf/Pdf';
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
          <ContentBlock children={PersonalInformation} />
          <ContentBlock children={Skills} />
          <ContentBlock children={WorkExperience} />
          <ContentBlock children={ProjectsUndertaken} />
          <ContentBlock children={Achievements} />
          <ContentBlock children={Certificate} />
          <Pdf />
        </div>
        <Sidenav />
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.object,
  preview: PropTypes.bool,
};

export default Dashboard;
