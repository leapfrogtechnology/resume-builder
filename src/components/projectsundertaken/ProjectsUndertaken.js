import React, { useState } from 'react';

import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddProject from '~/components/form/project/AddProject';
import EditOptions from '~/components/editoptions/EditOptions';

const ProjectsUndertaken = () => {
  const [showModel, setModel] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  return (
    <>
      <CardHeader title="Projects Undertaken" />
      <div className="projects-undertaken">
        <div className="projects-undertaken__row">
          <div className="projects-undertaken__row-header">
            <div className="sub-title">AI Thoughtbot</div>
            <EditOptions
              component={AddProject}
              onEdit={editBtnHandler}
              onClose={closeBtnHandler}
              showModal={showModel}
            />
          </div>
          <div className="projects-undertaken__period">
            <span className="start-date">September 2016</span> - <span className="end-date">August 2019</span>(3 years
            and 3 months)
            </div>
          <p className="projects-undertaken__description">
            I built an aI thoughtbot that gave relationship advice to couples in distress.
            </p>
        </div>
      </div>
      <CardFooter
        icon={Add}
        label="Add another project"
        showModal={showModel}
        onAdd={editBtnHandler}
        component={AddProject}
        onClose={closeBtnHandler}
      />
    </>
  );
};

export default ProjectsUndertaken;
