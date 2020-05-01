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
  isEdit,
  onHiddenIconClicked,
  onEdit,
  onClose,
  onDelete,
}) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  let labelForDifference = '';
  const diff = dateUtils.getDifferenceInYearMonth(startDate, ongoing ? new Date() : endDate);

  if (diff.year != 0) {
    labelForDifference = diff.year > 1 ? diff.year.toString() + ' years' : diff.year.toString() + ' year';
    if (diff.month != 0) {
      labelForDifference += 'and';
    }
  }

  if (diff.month != 0) {
    labelForDifference += diff.month > 1 ? diff.month.toString() + ' months' : diff.month.toString() + ' month';
  }

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
            onEditButtonClicked={onEdit}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {isEdit && (
          <OpenModal
            component={AddProject}
            onClose={onClose}
            showModal={isEdit}
            isEdit={isEdit}
            data={isEdit ? { name: title, date: startDate, description: description } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">
        <span className="start-date">{moment(startDate).format('MMMM YYYY')}</span> -{' '}
        <span className="end-date">{ongoing ? 'Working since' : moment(endDate).format('MMMM YYYY')}</span> (
        {labelForDifference})
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
