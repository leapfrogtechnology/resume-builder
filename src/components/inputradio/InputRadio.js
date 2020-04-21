import React from 'react';

const InputRadio = ({ label, value, placeholder }) => {
  return (
    <div className="input__label-container">
      <input type="radio" className="input__radio-field" value={value} />
      <label className="input__radio-label">{placeholder}</label>
    </div>
  )
}

export default InputRadio;
