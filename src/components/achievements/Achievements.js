import React from 'react';

import AchievementItem from '~/components/achievements/AchievementItem';
import AddAchievement from '~/components/form/achievement/AddAchievement';
import Section from '~/components/Section';

const Achievements = () => {
  return (
    <Section dataKey="achievements" component={AddAchievement}>
      {({ data, preview, onDelete, updateHiddenState }) =>
        data.map(({ name, date, description }, index) => (
          <AchievementItem
            key={index}
            title={name}
            date={date}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={onDelete}
          />
        ))
      }
    </Section>
  );
};

export default Achievements;
