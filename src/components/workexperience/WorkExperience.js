import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import WorkExperienceShown from './WorkExperienceShown';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import EmptyCard from '~/components/emptycard/EmptyCard';
import AddWorkExperience from '../form/workexperience/AddWorkExperience';

const WorkExperience = () => {
  const context = useContext(FormContext);
  const preview = context.preview.get;
  const workExperience = context.data.get.workExperience;

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

  const contactLinkHandler = (e, value) => {
    if (isNaN(value)) {
      window.open('mailto:' + value);
    } else {
      window.open('tel:' + value);
    }
  };

  if (!workExperience) {
    return (
      <>
        <EmptyCard emptyMessage="You do not have any work experience yet."></EmptyCard>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another work experience"
          showModal={showModel}
          onAdd={modalBtnHandler}
          component={AddWorkExperience}
          onClose={closeBtnHandler}
          modifier="empty"
        />
      </>
    );
  }

  const workExperienceList = workExperience.map(
    ({ name, position, startDate, endDate, responsibilities, achievements, refereeName, refereeContact }, index) => (
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
        preview={preview}
        onHiddenIconClicked={updateHiddenStateWork}
        onEdit={modalBtnHandler}
        onContactLinkClicked={contactLinkHandler}
      />
    )
  );

  return (
    <div className="content-block">
      <CardHeader title="Work Experience" />
      {workExperienceList}
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another work experience"
        showModal={showModel}
        onAdd={modalBtnHandler}
        component={AddWorkExperience}
        onClose={closeBtnHandler}
      />
    </div>
  );
};

export default WorkExperience;
