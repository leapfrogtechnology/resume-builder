import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '../modal/OpenModal';
import AddSkill from '../form/skill/AddSkill';
import EditOptions from '~/components/editoptions/EditOptions';

const SkillItem = ({ title, values, preview, onHiddenIconClicked, onDelete }) => {
  const [hidden, setHidden] = useState(false);
  const [editSkill, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const hiddenIconClickedHandler = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const deleteIconClickedHandler = e => {
    e.preventDefault();
    onDelete(e, title);
  };

  const editBtnHandler = e => {
    e.preventDefault();
    setEdit(!editSkill);
  };

  const editBtnCloseHandler = () => {
    setEdit(!editSkill);
  };

  const subSkillsList = values.map(({ name }, index) => (
    <span key={index} className="chip-input-tag">
      {name}
    </span>
  ));

  return (
    <div className={!hidden ? 'skills__row' : 'skills__row skills--hidden'}>
      <div className="skills__row-header">
        <div className="skils__row-header-left sub-title">
          {title}
          {hidden && !preview && <span className="hidden-tag">Hidden</span>}
        </div>
        <div className="skills__row-header-right">
          {!preview && (
            <EditOptions
              isHidden={hidden}
              onHiddenIconClicked={hiddenIconClickedHandler}
              onEditButtonClicked={editBtnHandler}
              onDeleteButtonClicked={deleteIconClickedHandler}
            />
          )}
          {editSkill && (
            <OpenModal
              component={AddSkill}
              onClose={editBtnCloseHandler}
              showModal={editSkill}
              isEdit={editSkill}
              data={editSkill ? { name: title, subSkills: values } : ''}
            ></OpenModal>
          )}
        </div>
      </div>
      <div className="chip-input-value">{subSkillsList}</div>
    </div>
  );
};

SkillItem.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default SkillItem;
