import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddProject from '~/components/form/project/AddProject';
import ProjectsUndertakenItem from '~/components/projectsundertaken/ProjectsUndertakenItem';

const ProjectsUndertaken = () => {
  const context = useContext(FormContext);

  const [addProject, setAdd] = useState(false);

  const preview = context.preview.get;
  const projects = context.data.get.projects;

  const toggleAddProject = () => setAdd(!addProject);

  /**
   * Update the hidden state of project.
   *
   * @param {string} key [ name of a particular project].
   */
  const updateHiddenStateProject = key => {
    const data = context.data.get;

    data['projects'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['projects'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteProject = name => {
    const data = context.data.get;

    const filteredProjects = data['projects'].filter(project => {
      return project.name !== name;
    });

    data['projects'] = filteredProjects;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  if ((!projects || projects.length < 1) && preview) {
    return <></>;
  }

  if (!projects || projects.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
          <EmptyCard emptyMessage="You do not have any projects undertaken yet."></EmptyCard>
          <CardFooter
            icon={Add}
            hide={preview}
            label="Add another project"
            showModal={addProject}
            onAdd={toggleAddProject}
            component={AddProject}
            onClose={toggleAddProject}
            modifier="empty"
          />
        </div>
      </div>
    );
  }

  const projectsList = projects.map(({ name, startDate, endDate, description, ongoing }, index) => (
    <ProjectsUndertakenItem
      key={index}
      title={name}
      startDate={startDate}
      endDate={endDate}
      ongoing={ongoing}
      description={description}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateProject}
      onDelete={deleteProject}
    />
  ));

  return (
    <div className="content-block">
      <div className="card">
        <CardHeader title="Projects Undertaken" />
        <div className="projects-undertaken">{projectsList}</div>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another project"
          showModal={addProject}
          onAdd={toggleAddProject}
          component={AddProject}
          onClose={toggleAddProject}
        />
      </div>
    </div>
  );
};

export default ProjectsUndertaken;
