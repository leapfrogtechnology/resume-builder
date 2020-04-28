import React from 'react';

const ResumePersonalInformation = ({ label, value }) => {
  return (
    <li className="personal-information__content-row-item">
      <div className="personal-information__content-left">{label}</div>
      <div className="personal-information__content-right">{value}</div>
    </li>
  );
};

export default ResumePersonalInformation;
