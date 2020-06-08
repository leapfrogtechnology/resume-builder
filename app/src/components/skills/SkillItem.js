import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '~/components//modal/OpenModal';
import AddSkill from '~/components/form/skill/AddSkill';
import { capitalize } from '~/utilities/string/capitalize';
import EditOptions from '~/components/editoptions/EditOptions';

const SkillItem = ({ id, title, values, hidden, preview, onHiddenIconClicked, onDelete }) => {
  const [isHidden, setIsHidden] = useState(hidden);
  const [editSkill, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const hiddenIconClickedHandler = () => {
    setIsHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  const deleteIconClickedHandler = () => {
    onDelete(id);
  };

  const toggleEditSkill = () => setEdit(!editSkill);

  const subSkillsList = values.map(({ name }, index) => (
    <span key={index} className="chip-input-tag">
      {capitalize(name)}
    </span>
  ));

  return (
    <div className="skills__row">
      <div className="skills__row-header">
        <div className={!isHidden ? 'skils__row-header-left sub-title' : 'skils__row-header-left sub-title hidden'}>
          {capitalize(title)}
          {isHidden && !preview && <span className="hidden-tag">Hidden</span>}
        </div>
        <div className="skills__row-header-right">
          {!preview && (
            <EditOptions
              isHidden={isHidden}
              onHiddenIconClicked={hiddenIconClickedHandler}
              onEditButtonClicked={toggleEditSkill}
              onDeleteButtonClicked={deleteIconClickedHandler}
            />
          )}
          {editSkill && (
            <OpenModal
              component={AddSkill}
              onClose={toggleEditSkill}
              showModal={editSkill}
              isEdit={editSkill}
              data={editSkill ? { id } : ''}
            ></OpenModal>
          )}
        </div>
      </div>
      <div className="chip-input-value">{subSkillsList}</div>
    </div>
  );
};

SkillItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  values: PropTypes.array,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default SkillItem;
