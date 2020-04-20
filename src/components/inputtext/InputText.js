import React from 'react';

const InputText = ({label, placeholder}) => {
  return(
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input type="text" className="input-text-field" placeholder={placeholder}/>
    </div>
  )
}

export default InputText;
