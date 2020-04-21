import React from 'react';

const InputText = ({ label, placeholder }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input type="text" className="input__text-field" placeholder={placeholder} />
    </div>
  );
};

export default InputText;
