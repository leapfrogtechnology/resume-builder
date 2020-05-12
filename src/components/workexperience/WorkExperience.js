import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import { baseMailToUrl, baseTelUrl } from '~/constant/contact';
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

    storage.saveResume(context.data.get);
  };

  const contactLinkHandler = value => {
    if (isNaN(value)) {
      window.open(baseMailToUrl + value);
    } else {
      window.open(baseTelUrl + value);
    }
  };

  if ((!workExperience || workExperience.length < 1) && preview) {
    return <></>;
  }

  if (!workExperience || workExperience.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
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
        </div>
      </div>
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
      <div className="card">
        <CardHeader title="Work Experience" />
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
    </div>
  );
};

export default WorkExperience;
