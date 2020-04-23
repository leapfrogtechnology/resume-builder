import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from '~/assets/image';

const InputDate = ({ label, placeholder, modifier }) => {
  return (
    <div className={modifier ? 'input--short' : 'input'}>
      <label className="input__label">{label}</label>
      <div className={'input__date'}>
        <input type="date" className="input__date-field" placeholder={placeholder} />
        <img src={Calendar} alt="Calendar" />
      </div>
    </div>
  );
};

InputDate.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  modifier: PropTypes.bool,
};

export default InputDate;
