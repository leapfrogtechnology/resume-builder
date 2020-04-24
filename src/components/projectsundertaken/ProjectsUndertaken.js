import React, { useContext } from 'react';

import { AppContext } from '~/pages';
import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import ProjectsUndertakenItem from './ProjectsUndertakenItem';

const ProjectsUndertaken = () => {
  const context = useContext(AppContext);

  const preview = context.preview.get;
  const projects = context.data.get.projects;

  /**
   * Update the hidden state of project.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular project].
   */
  const updateHiddenStateProject = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['projects'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['projects'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const projectsList = projects.map(({ name, startDate, endDate, description }) => (
    <ProjectsUndertakenItem
      key={name}
      title={name}
      startDate={startDate}
      endDate={endDate}
      description={description}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateProject}
    />
  ));

  return (
    <div className="projects-undertaken-block">
      <div className="card">
        <CardHeader title="Projects Undertaken" />
        <div className="projects-undertaken">{projectsList}</div>
        <CardFooter icon={Add} hide={preview} label="Add another project" />
      </div>
    </div>
  );
};

export default ProjectsUndertaken;
