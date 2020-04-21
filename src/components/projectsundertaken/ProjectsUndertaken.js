import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import ProjectsUndertakenItem from './ProjectsUndertakenItem';

const ProjectsUndertaken = ({ projects }) => {
  const projectsList = projects.map(({ title, startDate, endDate, description }) => (
    <ProjectsUndertakenItem title={title} startDate={startDate} endDate={endDate} description={description} />
  ));

  return (
    <div className="projects-undertaken-block">
      <div className="card">
        <CardHeader title="Projects Undertaken" />
        <div className="projects-undertaken">{projectsList}</div>
        <CardFooter icon={Add} label="Add another project" />
      </div>
    </div>
  );
};

ProjectsUndertaken.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsUndertaken;
