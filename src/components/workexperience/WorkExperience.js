import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import WorkExperienceShown from '~/components/workexperience/WorkExperienceShown';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';

const WorkExperience = () => {
  const context = useContext(FormContext);

  const [addWork, setAdd] = useState(false);

  const preview = context.preview.get;
  const workExperience = context.data.get.workExperience;

  const toggleAddWork = () => setAdd(!addWork);

  /**
   * Update the hidden state of work.
   *
   * @param {string} key [ name of a particular work experience].
   */
  const updateHiddenStateWork = key => {
    const data = context.data.get;

    data['workExperience'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['workExperience'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteWorkExperience = (name, position) => {
    const data = context.data.get;

    const filteredWorkExperiences = data['workExperience'].filter(work => {
      return work.name !== name && work.position !== position;
    });

    data['workExperience'] = filteredWorkExperiences;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  const contactLinkHandler = value => {
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
          onAdd={toggleAddWork}
          component={AddWorkExperience}
          onClose={toggleAddWork}
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
        onHiddenIconClicked={updateHiddenStateWork}
        onDelete={deleteWorkExperience}
        onContactLinkClicked={contactLinkHandler}
      />
    )
  );

  return (
    <div className="content-block">
      {!preview && workExperienceList.length > 0 && <CardHeader title="Work Experience" />}
      {workExperienceList}
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another work experience"
        showModal={addWork}
        onAdd={toggleAddWork}
        component={AddWorkExperience}
        onClose={toggleAddWork}
      />
    </div>
  );
};

export default WorkExperience;
