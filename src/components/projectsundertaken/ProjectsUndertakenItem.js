import PropTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const ProjectsUndertakenItem = ({ title, startDate, endDate, description, preview, onHiddenIconClicked }) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  return (
    <div className={!hidden ? 'projects-undertaken__row' : 'projects-undertaken__row projects-undertaken--hidden'}>
      <div className="projects-undertaken__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && <EditOptions isHidden={hidden} onHiddenIconClicked={onHiddenBtnClicked} />}
      </div>
      <div className="year year--dark">
        <span className="start-date">{startDate}</span> - <span className="end-date">{endDate}</span>(3 years and 3
        months)
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

ProjectsUndertakenItem.propTypes = {
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
};

export default ProjectsUndertakenItem;
