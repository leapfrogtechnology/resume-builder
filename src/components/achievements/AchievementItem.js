import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '~/components/modal/OpenModal';
import { format } from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const AchievementItem = ({ id, title, date, description, hidden, preview, onHiddenIconClicked, onDelete }) => {
  const [isHidden, setIsHidden] = useState(hidden);

  const [editAchievement, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const toggleEditAchievement = () => setEdit(!editAchievement);

  const editBtnCloseHandler = () => {
    setEdit(!editAchievement);
  };

  const onHiddenBtnClicked = () => {
    setIsHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  const deleteIconClickedHandler = () => {
    onDelete(id);
  };

  return (
    <div className={!isHidden ? 'achievements__row' : 'achievements__row achievements--hidden'}>
      <div className="achievements__row-header">
        <div className="sub-title">
          {title}
          {isHidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            isHidden={isHidden}
            onHiddenIconClicked={onHiddenBtnClicked}
            onEditButtonClicked={toggleEditAchievement}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {editAchievement && (
          <OpenModal
            component={AddAchievement}
            onClose={editBtnCloseHandler}
            showModal={editAchievement}
            isEdit={editAchievement}
            data={editAchievement ? { name: title, date: date, description: description } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">{format(date)}</div>
      <p className="description">{description}</p>
    </div>
  );
};

AchievementItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onDelete: PropTypes.func,
};

export default AchievementItem;
