import React, { useContext, useState } from 'react';

import { Edit } from '~/assets/image';
import { FormContext } from '../FormContext';
import PersonalInfoItem from './PersonalInfoItem';
import CardHeader from '~/components/cardheader/CardHeader';
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

  const modalBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

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
    <>
      <CardHeader
        title="Personal Information"
        icon={!preview ? Edit : ''}
        component={AddPersonalInformation}
        onEdit={modalBtnHandler}
        onClose={closeBtnHandler}
        showModal={showModel}
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
    </>
  );
};

export default PersonalInformation;
