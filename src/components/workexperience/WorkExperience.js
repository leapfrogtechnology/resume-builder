import React from 'react';

import Section from '~/components/Section';
import WorkExperienceShown from '~/components/workexperience/WorkExperienceShown';
import AddWorkExperience from '~/components/form/workexperience/AddWorkExperience';

import { orderByDate } from '~/utilities/orderBy';
import { baseMailToUrl, baseTelUrl } from '~/constant/contact';

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
      {({ data, preview, deleteItem, updateHiddenState }) =>
        orderByDate(
          data
        ).map(
          ({
            id,
            name,
            position,
            startDate,
            endDate,
            ongoing,
            responsibilities,
            achievements,
            refereeName,
            refereeContact,
            hidden,
          }) => (
            <WorkExperienceShown
              key={id}
              id={id}
              subTitle={name}
              position={position}
              startDate={startDate}
              endDate={endDate}
              roles={responsibilities}
              achievements={achievements}
              refereeName={refereeName}
              refereeContact={refereeContact}
              currentlyWorking={ongoing}
              hidden={hidden}
              preview={preview}
              onHiddenIconClicked={updateHiddenState}
              onDelete={deleteItem}
              onContactLinkClicked={contactLinkHandler}
            />
          )
        )
      }
    </Section>
  );
};

export default WorkExperience;
