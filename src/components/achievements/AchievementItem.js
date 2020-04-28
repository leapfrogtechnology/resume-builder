import ProptTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';

const AchievementItem = ({ title, date, preview, onHiddenIconClicked }) => {
  const [hidden, setHidden] = useState(false);
  const [isDeleteClicked, setIsDelete] = useState(false);
  const [isEditClicked, setIsEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const onDeleteButtonClicked = e => {
    e.preventDefault();
    setIsDelete(!isDeleteClicked);
  }

  const onConfirm = (e) => {
    e.preventDefault();
    console.log('Deleted');
    setIsDelete(!isDeleteClicked);
  }

  const onCancel = (e) => {
    e.preventDefault();
    console.log('Cancelled');
    setIsDelete(!isDeleteClicked);
  }

  const onEditButtonClicked = e => {
    e.preventDefault();
    setIsEdit(!isEditClicked);
  }

  return (
    <div className="achievements__row">
      <div className="achievements__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview &&
          <EditOptions
            isHidden={hidden}
            onHiddenIconClicked={onHiddenBtnClicked}
            onEditButtonClicked={onEditButtonClicked}
            onDeleteButtonClicked={onDeleteButtonClicked}
            isEditClicked={isEditClicked}
            isDeleteClicked={isDeleteClicked}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />}
      </div>
      <div className="year year--dark">{date}</div>
    </div>
  );
};

AchievementItem.propTypes = {
  title: ProptTypes.string,
  date: ProptTypes.string,
  preview: ProptTypes.bool,
  onHiddenIconClicked: ProptTypes.func,
};

export default AchievementItem;
