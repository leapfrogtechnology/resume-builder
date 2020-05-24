import React from 'react';

import AchievementItem from '~/components/achievements/AchievementItem';
import AddAchievement from '~/components/form/achievement/AddAchievement';
import Section from '~/components/Section';

const Achievements = () => {
  return (
    <Section dataKey="achievements" component={AddAchievement}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, date, description }) => (
          <AchievementItem
            id={id}
            key={id}
            title={name}
            date={date}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={deleteItem}
          />
        ))
      }
    </Section>
  );
};

export default Achievements;
