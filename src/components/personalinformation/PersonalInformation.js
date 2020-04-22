import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Edit } from '~/assets/image';
import PersonalInfoItem from './PersonalInfoItem';
import CardHeader from '~/components/cardheader/CardHeader';
import { AppContext } from '../../pages';

const PersonalInformation = ({ preview }) => {
  const bold = true;
  const context = useContext(AppContext);

  const previousData = context.data.get;

  const name = previousData.name;
  const role = previousData.role;
  const introduction = previousData.introduction;

  const updateHiddenState = (e, key) => {
    e.preventDefault();
    let data = context.data.get;
    let currentState = data[key].hidden;
    let newState = !currentState;
    data[key].hidden = newState;
    context.data.set(data);
  };

  return (
    <div className="personal-info-block">
      <div className="card">
        <CardHeader title="Personal Information" icon={!preview ? Edit : ''} />
        {name && (
          <PersonalInfoItem
            label="name"
            value={name}
            preview={preview}
            bold={bold}
            onclick={updateHiddenState}
          ></PersonalInfoItem>
        )}
        {role && (
          <PersonalInfoItem
            label="role"
            value={role.label}
            preview={preview}
            bold={bold}
            onclick={updateHiddenState}
            showIcon={true}
          ></PersonalInfoItem>
        )}
        {introduction && (
          <PersonalInfoItem
            label="introduction"
            value={introduction.value}
            preview={preview}
            bold={!bold}
            showIcon={true}
            onclick={updateHiddenState}
          ></PersonalInfoItem>
        )}
      </div>
    </div>
  );
};

PersonalInformation.propTypes = {
  preview: PropTypes.bool,
};

export default PersonalInformation;
