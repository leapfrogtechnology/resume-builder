import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '../modal/OpenModal';
import AddProject from '../form/project/AddProject';
import * as dateUtils from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';

const ProjectsUndertakenItem = ({
  title,
  startDate,
  endDate,
  description,
  ongoing,
  preview,
  onHiddenIconClicked,
  onDelete,
}) => {
  const [hidden, setHidden] = useState(false);
  const [editProject, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  let labelForDifference = dateUtils.getDifferenceYearMonth(startDate, endDate, ongoing);

  labelForDifference = labelForDifference ? '( ' + labelForDifference + ' )' : '';

  const editBtnHandler = e => {
    e.preventDefault();
    setEdit(!editProject);
  };

  const editBtnCloseHandler = () => {
    setEdit(!editProject);
  };

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const deleteIconClickedHandler = e => {
    e.preventDefault();
    onDelete(e, title);
  };

  return (
    <div className={!hidden ? 'projects-undertaken__row' : 'projects-undertaken__row projects-undertaken--hidden'}>
      <div className="projects-undertaken__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            isHidden={hidden}
            onHiddenIconClicked={onHiddenBtnClicked}
            onEditButtonClicked={editBtnHandler}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {editProject && (
          <OpenModal
            component={AddProject}
            onClose={editBtnCloseHandler}
            showModal={editProject}
            isEdit={editProject}
            data={editProject ? { name: title, date: startDate, description: description } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">
        <span className="start-date">{moment(startDate).format('MMMM YYYY')}</span> -{' '}
        <span className="end-date">{ongoing ? 'Present' : moment(endDate).format('MMMM YYYY')}</span>{' '}
        {labelForDifference}
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
  ongoing: PropTypes.bool,
  preview: PropTypes.bool,
  isEdit: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProjectsUndertakenItem;
