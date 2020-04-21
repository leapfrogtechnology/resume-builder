import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const WorkExperienceShown = ({ subTitle, position, startDate, endDate, roles, achievements, referee }) => {
  const [hidden, setHidden] = useState(false);

  const rolesList = roles.split('.').map(role => <li>{role}</li>);
  const achievementsList = achievements.split('.').map(achievement => <li>{achievement}</li>);

  const onHiddenBtnClicked = e => {
    setHidden(!hidden);
  };

  return (
    <div className={!hidden ? 'work-experience' : 'work-experience work-experience--hidden'}>
      <div className="work-experience__row">
        <div className="work-experience__row-header">
          <div className="sub-title">{subTitle}</div>
          <EditOptions isHidden={hidden} onHiddenIconClicked={onHiddenBtnClicked} />
        </div>
        <div className="work-experience__position">{position}</div>
        <div className="work-experience__exp-year">
          <span className="start-date">{startDate}</span> - <span className="end-date">{endDate}</span>(3 years and 3
          months)
        </div>
      </div>
      {!hidden && (
        <div>
          <div className="work-experience__row">
            Roles and Responsibilities
            <ul className="work-experience__row-item">{rolesList}</ul>
          </div>
          <div className="work-experience__row">
            Achievements
            <ul className="work-experience__row-item">{achievementsList}</ul>
          </div>
          <div className="work-experience__row">
            Referee <span className="referee-name">{referee.name}</span>
            <span className="referee-email text-link">{referee.email}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceShown;
