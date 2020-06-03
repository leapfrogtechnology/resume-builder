import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '~/components/modal/OpenModal';
import AddProject from '~/components/form/project/AddProject';
import EditOptions from '~/components/editoptions/EditOptions';

import * as dateUtils from '~/utilities/date/FormatDate';

const ProjectsUndertakenItem = ({
  id,
  title,
  startDate,
  endDate,
  description,
  ongoing,
  hidden,
  preview,
  onHiddenIconClicked,
  onDelete,
}) => {
  const [isHidden, setIsHidden] = useState(hidden);
  const [editProject, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  let labelForDifference = dateUtils.getDifferenceYearMonth(startDate, endDate, ongoing);

  labelForDifference = labelForDifference ? '( ' + labelForDifference + ' )' : '';

  const toggleEditProject = () => setEdit(!editProject);

  const onHiddenBtnClicked = () => {
    setIsHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  const deleteIconClickedHandler = () => {
    onDelete(id);
  };

  return (
    <div className={!isHidden ? 'projects-undertaken__row' : 'projects-undertaken__row projects-undertaken--hidden'}>
      <div className="projects-undertaken__row-header">
        <div className="sub-title">
          {title}
          {isHidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            isHidden={isHidden}
            onHiddenIconClicked={onHiddenBtnClicked}
            onEditButtonClicked={toggleEditProject}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {editProject && (
          <OpenModal
            component={AddProject}
            onClose={toggleEditProject}
            showModal={editProject}
            isEdit={editProject}
            data={editProject ? { id } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">
        <span className="start-date">{dateUtils.format(startDate)}</span> -{' '}
        <span className="end-date">{ongoing ? 'Present' : dateUtils.format(endDate)}</span> {labelForDifference}
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

ProjectsUndertakenItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  ongoing: PropTypes.bool,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  isEdit: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProjectsUndertakenItem;
