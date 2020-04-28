import PropTypes from 'prop-types';
import React, { useState } from 'react';
import EditOptions from '~/components/editoptions/EditOptions';
import DeletePopup from '../form/delete/DeletePopup';
import AddSkill from '~/components/form/skill/AddSkill';

const SkillItem = ({ title, values, preview, onHiddenIconClicked, onEdit, onClose }) => {
  const [hidden, setHidden] = useState(false);
  const [isDeleteClicked, setIsDelete] = useState(false);
  const [isEditClicked, setIsEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const hiddenIconClickedHandler = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const onDeleteButtonClicked = e => {
    e.preventDefault();
    setIsDelete(!isDeleteClicked);
  };

  const onConfirm = e => {
    e.preventDefault();
    console.log('Deleted');
    setIsDelete(!isDeleteClicked);
  };

  const onCancel = e => {
    e.preventDefault();
    console.log('Cancelled');
    setIsDelete(!isDeleteClicked);
  };

  const onEditButtonClicked = e => {
    e.preventDefault();
    setIsEdit(!isEditClicked);
  };

  const subSkillsList = values.map(({ name, label }) => (
    <span key={name} className="chip-input-tag">
      {label}
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
              onEditButtonClicked={onEditButtonClicked}
              onDeleteButtonClicked={onDeleteButtonClicked}
              isEditClicked={isEditClicked}
              isDeleteClicked={isDeleteClicked}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
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
};

export default SkillItem;
