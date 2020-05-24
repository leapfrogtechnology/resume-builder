import React from 'react';

import AddProject from '~/components/form/project/AddProject';
import ProjectsUndertakenItem from '~/components/projectsundertaken/ProjectsUndertakenItem';
import Section from '~/components/Section';

const ProjectsUndertaken = () => {
  return (
    <Section dataKey="projects" component={AddProject}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, startDate, endDate, description, ongoing }) => (
          <ProjectsUndertakenItem
            id={id}
            key={id}
            title={name}
            startDate={startDate}
            endDate={endDate}
            ongoing={ongoing}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={deleteItem}
          />
        ))
      }
    </Section>
  );
};

export default ProjectsUndertaken;
