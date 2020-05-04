import React from 'react';
import PropTypes from 'prop-types';

import Card from './card/Card';

const Form = ({ component }) => {
  return (
    <div className="form-container">
      <div className="form">
        <Card children={component} />
      </div>
    </div>
  );
};

Form.propTypes = {
  component: PropTypes.func,
};

export default Form;
