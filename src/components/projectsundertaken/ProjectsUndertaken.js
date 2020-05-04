import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import * as storage from '~/storage/LocalStorage';
import AddProject from '../form/project/AddProject';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import ProjectsUndertakenItem from './ProjectsUndertakenItem';

const ProjectsUndertaken = () => {
  const context = useContext(FormContext);

  const [addProject, setAdd] = useState(false);

  const preview = context.preview.get;
  const projects = context.data.get.projects;

  const addBtnHandler = () => {
    setAdd(!addProject);
  };

  const addBtnCloseHandler = () => {
    setAdd(!addProject);
  };

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

  const deleteProject = (e, name) => {
    e.preventDefault();

    const data = context.data.get;

    const filteredProjects = data['projects'].filter(project => {
      return project.name !== name;
    });

    data['projects'] = filteredProjects;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  if (!projects || projects.length < 1) {
    return (
      <>
        <EmptyCard emptyMessage="You do not have any projects undertaken yet."></EmptyCard>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another project"
          showModal={addProject}
          onAdd={addBtnHandler}
          component={AddProject}
          onClose={addBtnCloseHandler}
          modifier="empty"
        />
      </>
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
    <>
      <CardHeader title="Projects Undertaken" />
      <div className="projects-undertaken">{projectsList}</div>
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another project"
        showModal={addProject}
        onAdd={addBtnHandler}
        component={AddProject}
        onClose={addBtnCloseHandler}
      />
    </>
  );
};

export default ProjectsUndertaken;
