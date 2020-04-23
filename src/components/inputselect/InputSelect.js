import React from 'react';
import { useField } from 'formik';
import { skills } from '~/common/constants';

const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <select id="" className={meta.touched && meta.error ? 'input__select field-error' : 'input__select'} {...field}>
        <option value="" label="Select a skill" />
        {skills.map(skill => {
          return <option key={skill} value={skill} label={skill} />;
        })}
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </select>
    </div>
  );
};

export default InputSelect;
