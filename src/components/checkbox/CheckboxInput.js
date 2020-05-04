import React, { useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const CheckboxInput = ({ value, setFieldValue, setFieldTouched, ...props }) => {
  const [field, meta] = useField(props);
  const [isChecked, setChecked] = useState(false);

  const change = (e, _name, _requireValidation) => {
    e.preventDefault();

    const status = !isChecked;
    setChecked(status);
    setFieldTouched(field.name, true);
    setFieldValue(field.name, status, true);
  };

  return (
    <div className="input">
      <input
        type="checkbox"
        className="input__checkbox"
        checked={isChecked}
        onChange={e => change(e, field.name, true)}
        {...props}
      />
      <label className="input__label input__label--dark">{value}</label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

CheckboxInput.propTypes = {
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
};

export default CheckboxInput;
