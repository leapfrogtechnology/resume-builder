import React from 'react';

const CheckboxInput = ({ value }) => {
  return (
    <div className="input-group">
      <input type="checkbox" className="input-checkbox-field"/>
      <label className="input-label input-label--dark">{value}</label>
    </div>
  )
}

export default CheckboxInput;
