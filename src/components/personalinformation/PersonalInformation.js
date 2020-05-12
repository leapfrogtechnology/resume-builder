import React, { useContext, useState } from 'react';

import { Edit } from '~/assets/image';
import { FormContext } from '~/components/FormContext';
import CardHeader from '~/components/cardheader/CardHeader';
import PersonalInfoItem from '~/components/personalinformation/PersonalInfoItem';
import AddPersonalInformation from '~/components/form/personalinformation/AddPersonalInformation';

const PersonalInformation = () => {
  const bold = true;
  const context = useContext(FormContext);

  const previousData = context.data.get;
  const preview = context.preview.get;

  const name = previousData.name;
  const role = previousData.role;
  const introduction = previousData.introduction;

  const [showModel, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setModal(!showModel);
    setIsEdit(!isEdit);
  };

  /**
   * Update the hidden state of personal information.
   *
   * @param {string} key [ name of a particular info].
   */
  const updateHiddenState = key => {
    const data = context.data.get;
    const currentState = data[key].hidden;
    const newState = !currentState;

    data[key].hidden = newState;

    context.data.set(data);
  };

  return (
    <div className="content-block">
      <div className="card">
        <CardHeader
          title="Personal Information"
          icon={!preview ? Edit : ''}
          component={AddPersonalInformation}
          onEdit={toggleEdit}
          onClose={toggleEdit}
          showModal={showModel}
          isEdit={isEdit}
        />
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

export default PersonalInformation;
