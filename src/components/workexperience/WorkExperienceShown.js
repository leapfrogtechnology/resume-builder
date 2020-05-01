import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '../modal/OpenModal';
import * as dateUtils from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';
import AddWorkExperience from '../form/workexperience/AddWorkExperience';

const WorkExperienceShown = ({
  subTitle,
  position,
  startDate,
  endDate,
  roles,
  achievements,
  refereeName,
  refereeContact,
  currentlyWorking,
  preview,
  isEdit,
  onHiddenIconClicked,
  onEdit,
  onClose,
  onDelete,
  onContactLinkClicked,
}) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const rolesList = roles
    .split('.')
    .filter(role => {
      if (role) {
        return role;
      }
    })
    .map((role, index) => <li key={index}>{role}</li>);

  let achievementsList = null;

  if (achievements.length > 1) {
    achievementsList = achievements
      .split('.')
      .filter(achievement => {
        if (achievement) {
          return achievement;
        }
      })
      .map((achievement, index) => <li key={index}>{achievement}</li>);
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

  const onHiddenIconClickedHandler = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, subTitle);
  };

  const onDeleteIconClickedHanlder = e => {
    e.preventDefault();
    onDelete(e, subTitle, position);
  };

  return (
    <div className="work-experience">
      <div className={!hidden ? 'work-experience__row' : 'work-experience__row work-experience--hidden'}>
        <div className="work-experience__row-header">
          <div className="sub-title">
            {subTitle}
            {hidden && <span className="hidden-tag">Hidden</span>}
          </div>
          {!preview && (
            <EditOptions
              isHidden={hidden}
              onHiddenIconClicked={onHiddenIconClickedHandler}
              onEditButtonClicked={onEdit}
              onDeleteButtonClicked={onDeleteIconClickedHanlder}
            />
          )}
          {isEdit && (
            <OpenModal
              component={AddWorkExperience}
              onClose={onClose}
              showModal={isEdit}
              isEdit={isEdit}
              data={isEdit ? { name: subTitle, position: position } : ''}
            ></OpenModal>
          )}
        </div>
        <div className="work-experience__position">{position}</div>
        <div className="year">
          <span className="start-date">{moment(startDate).format('MMMM YYYY')}</span> -{' '}
          <span className="end-date">{currentlyWorking ? 'Present' : moment(endDate).format('MMMM YYYY')}</span> (
          {labelForDifference})
        </div>
      </div>

      <div>
        <div className="work-experience__row">
          Roles and Responsibilities
          <ul className="work-experience__row-item">{rolesList}</ul>
        </div>
        {achievements && (
          <div className="work-experience__row">
            Achievements
            <ul className="work-experience__row-item">{achievementsList}</ul>
          </div>
        )}
        {(refereeName || refereeContact) && (
          <div className="work-experience__row">
            Referee <span className="referee-name">{refereeName}</span>
            <span
              className="referee-email text-link"
              onClick={e => {
                onContactLinkClicked(e, refereeContact);
              }}
            >
              {' ' + refereeContact}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

WorkExperienceShown.propTypes = {
  subTitle: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  roles: PropTypes.string,
  achievements: PropTypes.string,
  refereeName: PropTypes.string,
  currentlyWorking: PropTypes.bool,
  preview: PropTypes.bool,
  isEdit: PropTypes.bool,
  refereeContact: PropTypes.string,
  onHiddenIconClicked: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  onContactLinkClicked: PropTypes.func,
};

export default WorkExperienceShown;
