import React from 'react';
import PropTypes from 'prop-types';

import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

const Dashboard = ({ profile, preview }) => {
  return (
    <section className="container">
      <div className="main-container">
        <div className="main-content">
          <PersonalInformation personalInformation={profile.personalInformation} preview={preview} />
          <Skills />
          <WorkExperience />
          <ProjectsUndertaken />
          <Achievements achievements={profile.achievements} preview={preview} />
          <Certificate />
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
