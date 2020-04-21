import PropTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const ProjectsUndertakenItem = ({ title, startDate, endDate, description }) => {
  const [hidden, setHidden] = useState(false);

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
  };

  return (
    <div className={!hidden ? 'projects-undertaken__row' : 'projects-undertaken__row projects-undertaken--hidden'}>
      <div className="projects-undertaken__row-header">
        <div className="sub-title">{title}</div>
        <EditOptions isHidden={hidden} onHiddenIconClicked={onHiddenBtnClicked} />
      </div>
      <div className="projects-undertaken__period">
        <span className="start-date">{startDate}</span> - <span className="end-date">{endDate}</span>(3 years and 3
        months)
      </div>
      <p className="projects-undertaken__description">{description}</p>
    </div>
  );
};

ProjectsUndertakenItem.propTypes = {
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
};

export default ProjectsUndertakenItem;
