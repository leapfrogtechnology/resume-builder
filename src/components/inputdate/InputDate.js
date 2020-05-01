import { useField } from 'formik';
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Calendar } from '~/assets/image';
import DatePicker from 'react-datepicker';

const InputDate = ({ label, placeholder, modifier, setFieldValue, setFieldTouched, ...props }) => {
  const [field, meta] = useField(props);

  const [startDate, setDate] = useState();
  const [datePickerIsOpen, setDatePicker] = useState(false);

  const handleChange = date => {
    setFieldTouched(field.name, true);
    setFieldValue(field.name, date, true);
    setDate(date);
    setDatePicker(!datePickerIsOpen);
  };

  const openDatePicker = () => {
    setDatePicker(!datePickerIsOpen);
  };

  return (
    <div className={modifier ? 'input--short' : 'input'}>
      <label className="input__label">{label}</label>
      <div className={'input__date'}>
        <DatePicker
          name={field.name}
          selected={startDate}
          placeholderText={placeholder}
          shouldCloseOnSelect={true}
          dateFormat="MM/dd/yyyy"
          onChange={handleChange}
          onInputClick={openDatePicker}
          onClickOutside={e => {
            setDatePicker(false);
          }}
          open={datePickerIsOpen}
        ></DatePicker>
        <img src={Calendar} alt="Calendar" onClick={openDatePicker} />
      </div>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};

InputDate.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  modifier: PropTypes.bool,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
};

export default InputDate;
