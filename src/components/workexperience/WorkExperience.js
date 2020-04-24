import React, { useState } from 'react';

import { Add } from '~/assets/image';
import WorkExperienceShown from './WorkExperienceShown';
import WorkExperienceHidden from './WorkExperienceHidden';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';

const WorkExperience = () => {
  const [showModel, setModal] = useState(false);

  const modalBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  return (
    <div className="work-experience-block">
      <div className="card">
        <CardHeader title="Work Experience" />
        <WorkExperienceShown />
        <WorkExperienceHidden />
        <CardFooter
          icon={Add}
          label="Add another work experience"
          showModal={showModel}
          onAdd={modalBtnHandler}
          component={AddWorkExperience}
          onClose={closeBtnHandler}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
