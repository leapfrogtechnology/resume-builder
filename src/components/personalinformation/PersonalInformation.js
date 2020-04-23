import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { Edit } from '~/assets/image';
import { AppContext } from '../../pages';
import PersonalInfoItem from './PersonalInfoItem';
import CardHeader from '~/components/cardheader/CardHeader';

const PersonalInformation = ({ preview }) => {
  const bold = true;
  const context = useContext(AppContext);

  const previousData = context.data.get;

  const name = previousData.name;
  const role = previousData.role;
  const introduction = previousData.introduction;

  /**
   * Update the hidden state of personal information.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular info].
   */
  const updateHiddenState = (e, key) => {
    e.preventDefault();

    const data = context.data.get;
    const currentState = data[key].hidden;
    const newState = !currentState;

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
