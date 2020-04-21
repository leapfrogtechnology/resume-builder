import React from 'react';
import PropTypes from 'prop-types';
import EditOptions from '~/components/editoptions/EditOptions';

const SkillItem = ({ title, values, visibility, preview }) => {
  const subSkillsList = values.map(subSkill => <span className="chip-input-tag">{subSkill}</span>);

  return (
    <div className={visibility ? 'skills__row' : 'skills__row skills--hidden'}>
      <div className="skills__row-header">
        <div className="skils__row-header-left sub-title">
          {title}
          {!visibility && !preview && <span className="hidden-tag">Hidden</span>}
        </div>
        <div className="skills__row-header-right">{!preview && <EditOptions isHidden={!visibility} />}</div>
      </div>
      <div className="chip-input-value">{subSkillsList}</div>
    </div>
  );
};

SkillItem.propTypes = {
  title: PropTypes.string,
  values: PropTypes.array,
};

export default SkillItem;
