import React from 'react';

const InputTextArea = ({label, placeholder}) => {
  return(
    <div className="input-group">
      <label className="input-label">{label}</label>
      <textarea className="input-textarea-field" cols="30" rows="10" placeholder={placeholder}></textarea>
    </div>
  )
}

export default InputTextArea;
