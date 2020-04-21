import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '~/assets/image';
import WorkExperienceShown from './WorkExperienceShown';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const WorkExperience = ({ workExperience }) => {
  const workExperienceList = workExperience.map(
    ({ company, position, startDate, endDate, roles, achievements, referee }, index) => (
      <WorkExperienceShown
        key={index}
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
        {workExperienceList}
        <CardFooter icon={Add} label="Add another work experience" />
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  workExperience: PropTypes.object,
};

export default WorkExperience;
