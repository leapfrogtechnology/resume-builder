import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const InputText = ({ label, placeholder, error, onchange, setFieldValue, ...props }) => {
  const [field, meta] = useField(props);

  const errorMessage = error ? error.message : meta.error;

  const handleOnChange = e => {
    setFieldValue(field.name, e.target.value);
    onchange(e.target.value);
  };

  const textArea = (
    <textarea className="input__textarea" cols="30" rows="10" placeholder={placeholder} {...field}></textarea>
  );

  const inputField =
    !error && !onchange ? (
      <input
        className={meta.touched && meta.error ? 'input__text-field field-error' : 'input__text-field'}
        placeholder={placeholder}
        {...field}
      />
    ) : (
      <input
        className={error && error.status ? 'input__text-field field-error' : 'input__text-field'}
        placeholder={placeholder}
        onChange={e => handleOnChange(e)}
        value={field.value}
      />
    );

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      {props.type && props.type === 'text-area' ? textArea : inputField}
      {(meta.touched && meta.error) || (error && error.status) ? <div className="error">{errorMessage}</div> : null}
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  onchange: PropTypes.func,
  setFieldValue: PropTypes.func,
};

export default InputText;
