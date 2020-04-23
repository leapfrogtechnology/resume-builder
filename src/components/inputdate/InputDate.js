import React from 'react';
import { useField } from 'formik';

import { Calendar } from '~/assets/image';

const InputDate = ({ label, placeholder, modifier, setFieldValue, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={modifier ? 'input--short' : 'input'}>
      <label className="input__label">{label}</label>
      <div className={'input__date'}>
        <input type="date" className="input__date-field" placeholder={placeholder} {...field} />
        <img src={Calendar} alt="Calendar" />
      </div>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default InputDate;
