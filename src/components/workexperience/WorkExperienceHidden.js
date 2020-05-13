import React from 'react';
import PropTypes from 'prop-types';
import EditOptions from '~/components/editoptions/EditOptions';

const WorkExperienceHidden = ({ subTitle, position, startDate, endDate }) => {
  return (
    <div className="work-experience work-experience--hidden">
      <div className="work-experience__row">
        <div className="work-experience__row-header">
          <div className="sub-title">
            {subTitle} <span className="hidden-tag">Hidden</span>
          </div>
          <EditOptions isHidden={true} />
        </div>
        <div className="work-experience__position">{position}</div>
        <div className="work-experience__exp-year">
          <span className="start-date">{startDate}</span> - <span className="end-date">{endDate}</span>(3 years and 3
          months)
        </div>
      </div>
    </div>
  );
};

WorkExperienceHidden.propTypes = {
  subTitle: PropTypes.string,
  position: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default WorkExperienceHidden;
