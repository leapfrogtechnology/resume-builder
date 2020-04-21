import React from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const WorkExperienceHidden = ({ subTitle, position, startDate, endDate }) => {
  return (
    <div className="work-experience work-experience--hidden">
      <div className="work-experience__row">
        <div className="work-experience__row-header">
          <div className="sub-title">
            Carnegie Mellon University <span className="hidden-tag">Hidden</span>
          </div>
          <EditOptions isHidden={true} />
        </div>
        <div className="work-experience__position">Research Assistant</div>
        <div className="work-experience__exp-year">
          <span className="start-date">September 2016</span> - <span className="end-date">August 2019</span>(3 years and
          3 months)
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceHidden;
