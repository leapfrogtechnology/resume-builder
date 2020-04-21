import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '~/assets/image';
import WorkExperienceShown from './WorkExperienceShown';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const WorkExperience = ({ workExperience }) => {
  const workExperienceList = workExperience.map(
    ({ name, position, startDate, endDate, responsibilities, achievements, refereeName, refereeContact }, index) => (
      <WorkExperienceShown
        key={index}
        subTitle={name}
        position={position}
        startDate={startDate}
        endDate={endDate}
        roles={responsibilities}
        achievements={achievements}
        refereeName={refereeName}
        refereeContact={refereeContact}
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
  workExperience: PropTypes.array,
};

export default WorkExperience;
