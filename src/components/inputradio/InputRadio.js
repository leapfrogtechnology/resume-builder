import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const InputRadio = ({ label, value, placeholder, ...props }) => {
  const [field, meta, form] = useField(props);

  const change = (e, _name, _requireValidation) => {
    const inputValue = e.target.value;

    form.setValue(inputValue);
  };

  return (
    <div className="input__label-container">
      <input
        type="radio"
        className="input__radio-field"
        value={value}
        onChange={e => change(e, field.name, true)}
        {...props}
      />
      <label className="input__radio-label">{placeholder}</label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

InputRadio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputRadio;
