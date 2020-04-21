import React from 'react';

const InputRadio = ({ label, value, placeholder }) => {
  return (
    <div className="input-label-container">
      <input type="radio" className="input-radio-field" value={value} />
      <label className="input-radio-label">{placeholder}</label>
    </div>
  )
}

export default InputRadio;
