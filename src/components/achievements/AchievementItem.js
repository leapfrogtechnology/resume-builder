import ProptTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '../modal/OpenModal';
import EditOptions from '~/components/editoptions/EditOptions';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const AchievementItem = ({
  title,
  date,
  description,
  preview,
  isEdit,
  onHiddenIconClicked,
  onEdit,
  onClose,
  onDelete,
}) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const deleteIconClickedHandler = e => {
    e.preventDefault();
    onDelete(e, title, date);
  };

  return (
    <div className="achievements__row">
      <div className="achievements__row-header">
        <div className="sub-title">
          {title}
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            isHidden={hidden}
            onHiddenIconClicked={onHiddenBtnClicked}
            onEditButtonClicked={onEdit}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {isEdit && (
          <OpenModal
            component={AddAchievement}
            onClose={onClose}
            showModal={isEdit}
            isEdit={isEdit}
            data={isEdit ? { name: title, date: date, description: description } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">{moment(date).format('MMMM YYYY')}</div>
    </div>
  );
};

AchievementItem.propTypes = {
  title: ProptTypes.string,
  date: ProptTypes.string,
  description: ProptTypes.string,
  preview: ProptTypes.bool,
  isEdit: ProptTypes.bool,
  onHiddenIconClicked: ProptTypes.func,
  onEdit: ProptTypes.func,
  onClose: ProptTypes.func,
  onDelete: ProptTypes.func,
};

export default AchievementItem;
