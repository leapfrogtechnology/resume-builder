import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import * as storage from '~/storage/LocalStorage';
import WorkExperienceShown from './WorkExperienceShown';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddWorkExperience from '../form/workexperience/AddWorkExperience';

const WorkExperience = () => {
  const context = useContext(FormContext);

  const [addWork, setAdd] = useState(false);
  const [editWork, setEdit] = useState(false);

  const preview = context.preview.get;
  const workExperience = context.data.get.workExperience;

  const editBtnHandler = e => {
    e.preventDefault();
    setEdit(!editWork);
  };

  const addBtnHandler = e => {
    setAdd(!addWork);
  };

  const addBtnCloseHandler = e => {
    setAdd(!addWork);
  };

  const editBtnCloseHandler = e => {
    e.preventDefault();
    setEdit(!editWork);
  };

  /**
   * Update the hidden state of work.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular work experience].
   */
  const updateHiddenStateWork = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['workExperience'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['workExperience'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteWorkExperience = (e, name, position) => {
    e.preventDefault();

    const data = context.data.get;

    const filteredWorkExperiences = data['workExperience'].filter(work => {
      return work.name !== name && work.position !== position;
    });

    data['workExperience'] = filteredWorkExperiences;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  const contactLinkHandler = (e, value) => {
    if (isNaN(value)) {
      window.open('mailto:' + value);
    } else {
      window.open('tel:' + value);
    }
  };

  if (!workExperience || workExperience.length < 1) {
    return (
      <>
        <EmptyCard emptyMessage="You do not have any work experience yet."></EmptyCard>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another work experience"
          showModal={addWork}
          onAdd={addBtnHandler}
          component={AddWorkExperience}
          onClose={addBtnCloseHandler}
          modifier="empty"
        />
      </>
    );
  }

  const workExperienceList = workExperience.map(
    (
      {
        name,
        position,
        startDate,
        endDate,
        currentlyWorking,
        responsibilities,
        achievements,
        refereeName,
        refereeContact,
      },
      index
    ) => (
      <WorkExperienceShown
        key={index}
        subTitle={name}
        position={position}
        startDate={startDate}
        endDate={endDate}
        roles={responsibilities}
        achievements={achievements}
        refereeName={refereeName}
        refereeContact={refereeContact}
        currentlyWorking={currentlyWorking}
        preview={preview}
        isEdit={editWork}
        onHiddenIconClicked={updateHiddenStateWork}
        onEdit={editBtnHandler}
        onClose={editBtnCloseHandler}
        onDelete={deleteWorkExperience}
        onContactLinkClicked={contactLinkHandler}
      />
    )
  );

  return (
    <div className="content-block">
      {!preview && workExperienceList.length > 1 && <CardHeader title="Work Experience" />}
      {workExperienceList}
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another work experience"
        showModal={addWork}
        onAdd={addBtnHandler}
        component={AddWorkExperience}
        onClose={addBtnCloseHandler}
      />
    </div>
  );
};

export default WorkExperience;
