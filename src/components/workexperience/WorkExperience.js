import React, { useContext } from 'react';

import { AppContext } from '~/pages';
import { Add } from '~/assets/image';
import WorkExperienceShown from './WorkExperienceShown';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const WorkExperience = () => {
  const context = useContext(AppContext);
  const preview = context.preview.get;
  const workExperience = context.data.get.workExperience;

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
      />
    )
  );

  return (
    <div className="work-experience-block">
      <div className="card">
        <CardHeader title="Work Experience" />
        {workExperienceList}
        <CardFooter icon={Add} hide={preview} label="Add another work experience" />
      </div>
    </div>
  );
};

export default WorkExperience;
