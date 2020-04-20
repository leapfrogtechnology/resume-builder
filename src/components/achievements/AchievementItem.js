import React from 'react';
import ProptTypes from 'prop-types';
import EditOptions from '~/components/editoptions/EditOptions';

const AchievementItem = ({ title, date, visibility, preview }) => {
  return (
    <div className="achievements__row">
      <div className="achievements__row-header">
        <div className="sub-title">{title}</div>
        {!preview && <EditOptions isHidden={!visibility} />}
      </div>
      <div className="achievements__year">{date}</div>
    </div>
  );
};

AchievementItem.propTypes = {
  title: ProptTypes.string,
  date: ProptTypes.string,
  visibility: ProptTypes.bool,
  preview: ProptTypes.bool,
};

export default AchievementItem;
