import React from 'react';
import { Calendar } from '~/assets/image';

const InputDate = ({ label, placeholder, modifier }) => {
  return (
    <div className={modifier ? "input-group--short" : "input-group" }>
      <label className="input-label">{label}</label>
      <div className={"input-date"}>
        <input type="date" className="input-date-field" placeholder={placeholder} />
        <img src={Calendar} alt="Calendar"/>
      </div>
    </div>
  )
}

export default InputDate;
