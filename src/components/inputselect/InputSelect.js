import React from 'react';

const InputSelect = ({label}) => {
  return(
    <div className="input-group">
      <label className="input-label">{label}</label>
      <select name="" id="" className="input-select-field">
        <option value="">Skill1</option>
        <option value="">Skill2</option>
      </select>
    </div>
  )
}

export default InputSelect;
