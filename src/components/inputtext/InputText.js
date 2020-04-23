/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';
import { useField } from 'formik';

const InputText = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  const textArea = (
    <textarea className="input__textarea" cols="30" rows="10" placeholder={placeholder} {...field}></textarea>
  );

  const inputField = <input className={meta.touched && meta.error ? 'input__text-field field-error' : 'input__text-field'} placeholder={placeholder} {...field} />;

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      {props.type && props.type === 'text-area' ? textArea : inputField}
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

export default InputText;
