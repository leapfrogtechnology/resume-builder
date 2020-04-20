import React from 'react';
import PropTypes from 'prop-types';

import { Edit } from '~/assets/image';
import PersonalInfoItem from './PersonalInfoItem';
import CardHeader from '~/components/cardheader/CardHeader';

const PersonalInformation = ({ personalInformation, preview }) => {
  const personalInfoList = Object.keys(personalInformation).map(key => (
    <PersonalInfoItem
      key={key}
      label={key}
      value={personalInformation[key].data}
      preview={preview}
      bold={personalInformation[key].bold}
      visibility={personalInformation[key].visibility}
    ></PersonalInfoItem>
  ));

  return (
    <div className="personal-info-block">
      <div className="card">
        <CardHeader title="Personal Information" icon={!preview ? Edit : ''} />
        {personalInfoList}
      </div>
    </div>
  );
};

PersonalInformation.propTypes = {
  personalInformation: PropTypes.object,
  preview: PropTypes.bool,
};

export default PersonalInformation;
