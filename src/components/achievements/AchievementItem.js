import ProptTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '~/components/modal/OpenModal';
import { format } from '~/utilities/date/FormatDate';
import EditOptions from '~/components/editoptions/EditOptions';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const AchievementItem = ({ id, title, date, description, preview, onHiddenIconClicked, onDelete }) => {
  const [hidden, setHidden] = useState(false);
  const [editAchievement, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const toggleEditAchievement = () => setEdit(!editAchievement);

  const editBtnCloseHandler = () => {
    setEdit(!editAchievement);
  };

  const onHiddenBtnClicked = () => {
    setHidden(!hidden);
    onHiddenIconClicked(title);
  };

  const deleteIconClickedHandler = () => {
    onDelete(id);
  };

  return (
    <div className={!hidden ? 'achievements__row' : 'achievements__row achievements--hidden'}>
      <div className="achievements__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            isHidden={hidden}
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
  id: ProptTypes.string,
  title: ProptTypes.string,
  date: ProptTypes.string,
  description: ProptTypes.string,
  preview: ProptTypes.bool,
  onHiddenIconClicked: ProptTypes.func,
  onDelete: ProptTypes.func,
};

export default AchievementItem;
