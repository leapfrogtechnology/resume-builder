import React from 'react';

const InputTextArea = ({ label, placeholder }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <textarea className="input__textarea" cols="30" rows="10" placeholder={placeholder}></textarea>
    </div>
  );
};

export default InputTextArea;
