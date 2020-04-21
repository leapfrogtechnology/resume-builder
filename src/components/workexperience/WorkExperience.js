import React from 'react';
import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import WorkExperienceShown from './WorkExperienceShown';
import WorkExperienceHidden from './WorkExperienceHidden';

const WorkExperience = ({ workExperience }) => {
  const workExperienceList = workExperience.map(
    ({ company, position, startDate, endDate, roles, achievements, referee, visibility }, index) => (
      <WorkExperienceShown
        subTitle={company}
        position={position}
        startDate={startDate}
        endDate={endDate}
        roles={roles}
        achievements={achievements}
        referee={referee}
      />
    )
  );

  return (
    <div className="work-experience-block">
      <div className="card">
        <CardHeader title="Work Experience" />
        <div className="work-experience">{workExperienceList}</div>
        <CardFooter icon={Add} label="Add another work experience" />
      </div>
    </div>
  );
};

export default WorkExperience;
