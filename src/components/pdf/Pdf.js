import React, { useContext } from 'react';

import { FormContext } from '../FormContext';
import CardHeader from '~/components/cardheader/CardHeader';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import ResumePersonalInformation from './ResumePersonalInformation';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';

const Pdf = () => {
  const context = useContext(FormContext);

  const data = context.data.get;

  return (
    <div className="modal">
      <div className="card" id="pdf">
        <div className="resume-content-block">
          <ResumePersonalInformation />
        </div>
        {data.skills && (
          <div className="resume-content-block">
            <CardHeader title="Skills" />
            <p>PHP (Zend, Laravel, CI), Python (Django, Flash Alembic), Javascript (ReactJS, ReactNative)</p>
          </div>
        )}
        {data.workExperience && (
          <div className="resume-content-block">
            <WorkExperience />
          </div>
        )}
        {data.projects && (
          <div className="resume-content-block">
            <ProjectsUndertaken />
          </div>
        )}
        {data.achievements && (
          <div className="resume-content-block">
            <Achievements />
          </div>
        )}
        {data.certificates && (
          <div className="resume-content-block">
            <Certificate />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pdf;
