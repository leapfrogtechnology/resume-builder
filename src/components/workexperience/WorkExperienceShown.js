import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { COUNTRY_CODE } from '~/constant/contact';
import OpenModal from '~/components/modal/OpenModal';
import * as dateUtils from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';

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
  onHiddenIconClicked,
  onDelete,
  onContactLinkClicked,
}) => {
  const [hidden, setHidden] = useState(false);
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

  const refereeDetail = /^\d+$/.test(refereeContact) ? ` ${COUNTRY_CODE} - ${refereeContact}` : ` ${refereeContact}`;

  const onHiddenIconClickedHandler = () => {
    setHidden(!hidden);
    onHiddenIconClicked(subTitle);
  };

  const onDeleteIconClickedHanlder = () => {
    onDelete(subTitle, position);
  };

  const toggleEditWork = () => setEdit(!editWork);

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
          <span className="start-date">{moment(startDate).format('MMMM YYYY')}</span> -{' '}
          <span className="end-date">{currentlyWorking ? 'Present' : moment(endDate).format('MMMM YYYY')}</span>{' '}
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
  subTitle: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  roles: PropTypes.string,
  achievements: PropTypes.string,
  refereeName: PropTypes.string,
  refereeContact: PropTypes.string,
  currentlyWorking: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onDelete: PropTypes.func,
  onContactLinkClicked: PropTypes.func,
};

export default WorkExperienceShown;
