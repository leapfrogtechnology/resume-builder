import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { refereeCheck } from '~/common/constants';
import { COUNTRY_CODE } from '~/constant/contact';
import OpenModal from '~/components/modal/OpenModal';
import * as dateUtils from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';

const WorkExperienceShown = ({
  id,
  subTitle,
  position,
  startDate,
  endDate,
  roles,
  achievements,
  refereeName,
  refereeContact,
  currentlyWorking,
  hidden,
  preview,
  onHiddenIconClicked,
  onDelete,
  onContactLinkClicked,
}) => {
  const [isHidden, setIsHidden] = useState(hidden);
  const [editWork, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const rolesList = roles
    .split('.')
    .filter(role => {
      if (role.trim()) {
        return role;
      }
    })
    .map((role, index) => <li key={index}>{role}</li>);

  let achievementsList = null;

  if (achievements.length > 1) {
    achievementsList = achievements
      .split('.')
      .filter(achievement => {
        if (achievement.trim()) {
          return achievement;
        }
      })
      .map((achievement, index) => <li key={index}>{achievement}</li>);
  }

  let labelForDifference = dateUtils.getDifferenceYearMonth(startDate, endDate, currentlyWorking);

  labelForDifference = labelForDifference ? `( ${labelForDifference} )` : '';

  const refereeDetail = refereeCheck.test(refereeContact)
    ? ` ${COUNTRY_CODE} - ${refereeContact}`
    : ` ${refereeContact}`;

  const onHiddenIconClickedHandler = () => {
    setIsHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  const onDeleteIconClickedHanlder = () => {
    onDelete(id);
  };

  const toggleEditWork = () => setEdit(!editWork);

  return (
    <div className="work-experience">
      <div className={!isHidden ? 'work-experience__row' : 'work-experience__row work-experience--hidden'}>
        <div className="work-experience__row-header">
          <div className="sub-title">
            {subTitle}
            {isHidden && <span className="hidden-tag">Hidden</span>}
          </div>
          {!preview && (
            <EditOptions
              isHidden={isHidden}
              onHiddenIconClicked={onHiddenIconClickedHandler}
              onEditButtonClicked={toggleEditWork}
              onDeleteButtonClicked={onDeleteIconClickedHanlder}
            />
          )}
          {editWork && (
            <OpenModal
              component={AddWorkExperience}
              onClose={toggleEditWork}
              showModal={editWork}
              isEdit={editWork}
              data={editWork ? { name: subTitle, position: position } : ''}
            ></OpenModal>
          )}
        </div>
        <div className="work-experience__position">{position}</div>
        <div className="year">
          <span className="start-date">{dateUtils.format(startDate)}</span> -{' '}
          <span className="end-date">{currentlyWorking ? 'Present' : dateUtils.format(endDate)}</span>{' '}
          {labelForDifference}
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
            Referee
            <ul className="referee-name work-experience__row-item">
              <li>
                {refereeName}
                <span className="referee-email text-link" onClick={e => onContactLinkClicked(refereeContact)}>
                  {refereeDetail}
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

WorkExperienceShown.propTypes = {
  id: PropTypes.string,
  subTitle: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  roles: PropTypes.string,
  achievements: PropTypes.string,
  refereeName: PropTypes.string,
  refereeContact: PropTypes.string,
  currentlyWorking: PropTypes.bool,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onDelete: PropTypes.func,
  onContactLinkClicked: PropTypes.func,
};

export default WorkExperienceShown;
