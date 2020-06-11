import React from 'react';

import Section from '~/components/Section';
import AddProject from '~/components/form/project/AddProject';
import ProjectsUndertakenItem from '~/components/projectsundertaken/ProjectsUndertakenItem';

import { orderByDate } from '~/utilities/orderBy';

const ProjectsUndertaken = () => {
  return (
    <Section dataKey="projects" component={AddProject}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        orderByDate(data).map(({ id, name, startDate, endDate, description, ongoing, hidden }) => (
          <ProjectsUndertakenItem
            key={id}
            id={id}
            title={name}
            startDate={startDate}
            endDate={endDate}
            ongoing={ongoing}
            description={description}
            hidden={hidden}
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
