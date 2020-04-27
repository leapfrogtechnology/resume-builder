import React from 'react';
import Card from './card/Card';

const Form = ({ children }) => {
  
  return (
    <div className="form-container">
      <div className="form">
        <Card children={children} />
      </div>
    </div>
  );
}

export default Form;