import React from 'react';

import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import CardHeader from '~/components/cardheader/CardHeader';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import ResumePersonalInformation from './ResumePersonalInformation';

const Pdf = () => {
  return (
    <div className="card" id="pdf">
      <div className="resume-content-block">
        <ResumePersonalInformation />
      </div>
      <div className="resume-content-block">
        <CardHeader title="Skills" />
        <p>PHP (Zend, Laravel, CI), Python (Django, Flash Alembic), Javascript (ReactJS, ReactNative)</p>
      </div>
      <div className="resume-content-block">
        <WorkExperience />
      </div>
      <div className="resume-content-block">
        <ProjectsUndertaken />
      </div>
      <div className="resume-content-block">
        <Achievements />
      </div>
      <div className="resume-content-block">
        <Certificate />
      </div>
    </div>
  );
};

export default Pdf;
