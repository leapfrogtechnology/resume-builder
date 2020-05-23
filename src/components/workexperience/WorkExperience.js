import React from 'react';

import { baseMailToUrl, baseTelUrl } from '~/constant/contact';
import WorkExperienceShown from '~/components/workexperience/WorkExperienceShown';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';
import Section from '~/components/Section';

const WorkExperience = () => {
  const contactLinkHandler = value => {
    if (isNaN(value)) {
      window.open(baseMailToUrl + value);
    } else {
      window.open(baseTelUrl + value);
    }
  };

  return (
    <Section dataKey="workExperience" component={AddWorkExperience}>
      {({ data, preview, onDelete, updateHiddenState }) =>
        data.map(
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
              onHiddenIconClicked={updateHiddenState}
              onDelete={onDelete}
              onContactLinkClicked={contactLinkHandler}
            />
          )
        )
      }
    </Section>
  );
};

export default WorkExperience;
