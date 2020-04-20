import React from 'react';
import PropTypes from 'prop-types';
import PersonalInfoItem from './PersonalInfoItem';

const PersonalInfo = ({ personalInfo, preview }) => {
  const personalInfoList = Object.keys(personalInfo).map(key => (
    <PersonalInfoItem key={key} title={key} data={personalInfo[key]} preview={preview}></PersonalInfoItem>
  ));

  return (
    <div>
      <div>
        <h1>Personal Information</h1>
        <span>Edit</span>
      </div>
      <ul>{personalInfoList}</ul>
    </div>
  );
};

PersonalInfo.propTypes = {
  personalInfo: PropTypes.object,
  preview: PropTypes.bool,
};

export default PersonalInfo;
