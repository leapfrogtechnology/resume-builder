import React from 'react';

import Section from '~/components/section/Section';
import AddProject from '~/components/form/project/AddProject';
import ProjectsUndertakenItem from '~/components/projectsundertaken/ProjectsUndertakenItem';

const ProjectsUndertaken = () => {
  return (
    <Section dataKey="projects" component={AddProject}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, startDate, endDate, description, ongoing, hidden }) => (
          <ProjectsUndertakenItem
            id={id}
            key={id}
            title={name}
            startDate={startDate}
            endDate={endDate}
            ongoing={ongoing}
            hidden={hidden}
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
