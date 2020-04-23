import React from 'react';
import PropTypes from 'prop-types';

const InputSelect = ({ label }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <select name="" id="" className="input__select">
        <option value="">Skill1</option>
        <option value="">Skill2</option>
      </select>
    </div>
  );
};

InputSelect.propTypes = {
  label: PropTypes.string,
};

export default InputSelect;
