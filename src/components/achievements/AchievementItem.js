import ProptTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const AchievementItem = ({ title, date, preview, onHiddenIconClicked, onEdit }) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  return (
    <div className="achievements__row">
      <div className="achievements__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions isHidden={hidden} onHiddenIconClicked={onHiddenBtnClicked} onEditButtonClicked={onEdit} />
        )}
      </div>
      <div className="year year--dark">{moment(date).format('MMMM YYYY')}</div>
    </div>
  );
};

AchievementItem.propTypes = {
  title: ProptTypes.string,
  date: ProptTypes.string,
  preview: ProptTypes.bool,
  onHiddenIconClicked: ProptTypes.func,
  onEdit: ProptTypes.func,
};

export default AchievementItem;
