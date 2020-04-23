import React from 'react';
import { useField } from 'formik';

const CheckboxInput = ({ value, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input">
      <input type="checkbox" className="input__checkbox" {...field} />
      <label className="input__label input__label--dark">{value}</label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default CheckboxInput;
