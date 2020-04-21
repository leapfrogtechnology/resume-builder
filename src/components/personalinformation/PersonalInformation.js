import React from 'react';
import PropTypes from 'prop-types';
import { Edit } from '~/assets/image';
import PersonalInfoItem from './PersonalInfoItem';
import CardHeader from '~/components/cardheader/CardHeader';

const PersonalInformation = ({ name, role, introduction, preview }) => {
  const bold = true;

  return (
    <div className="personal-info-block">
      <div className="card">
        <CardHeader title="Personal Information" icon={!preview ? Edit : ''} />
        {name && <PersonalInfoItem label="Name" value={name} preview={preview} bold={bold}></PersonalInfoItem>}
        {role && (
          <PersonalInfoItem
            label="Role"
            value={role.label}
            preview={preview}
            bold={bold}
            hidden={role.hidden}
          ></PersonalInfoItem>
        )}
        {introduction && (
          <PersonalInfoItem
            label="Introduction"
            value={introduction.value}
            preview={preview}
            bold={!bold}
            hidden={introduction.hidden}
          ></PersonalInfoItem>
        )}
      </div>
    </div>
  );
};

PersonalInformation.propTypes = {
  name: PropTypes.object,
  role: PropTypes.object,
  introduction: PropTypes.object,
  preview: PropTypes.bool,
};

export default PersonalInformation;
