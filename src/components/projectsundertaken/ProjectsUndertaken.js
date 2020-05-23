import React from 'react';

import AddProject from '~/components/form/project/AddProject';
import ProjectsUndertakenItem from '~/components/projectsundertaken/ProjectsUndertakenItem';
import Section from '~/components/Section';

const ProjectsUndertaken = () => {
  return (
    <Section dataKey="projects" component={AddProject}>
      {({ data, preview, onDelete, updateHiddenState }) =>
        data.map(({ name, startDate, endDate, description, ongoing }, index) => (
          <ProjectsUndertakenItem
            key={index}
            title={name}
            startDate={startDate}
            endDate={endDate}
            ongoing={ongoing}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={onDelete}
          />
        ))
      }
    </Section>
  );
};

export default ProjectsUndertaken;
