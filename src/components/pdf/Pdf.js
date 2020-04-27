import React from 'react';
import SkillItem from '../skills/SkillItem';
import Skills from '../skills/Skills';
import WorkExperienceShown from '../workexperience/WorkExperienceShown';
import CardHeader from '~/components/cardheader/CardHeader';
import WorkExperience from '../workexperience/WorkExperience';
import ResumePersonalInformation from './ResumePersonalInformation';

const Pdf = () => {
  return (
    <>
      <div className="card">
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
      </div>
    </>
  );
}

export default Pdf;