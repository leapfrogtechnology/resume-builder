import React from "react";

import Section from "components/Section";
import AchievementItem from "components/achievements/AchievementItem";
import AddAchievement from "components/form/achievement/AddAchievement";

const Achievements = () => {
  return (
    <Section dataKey="achievements" component={AddAchievement}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, date, description, hidden }) => (
          <AchievementItem
            id={id}
            key={id}
            title={name}
            date={date}
            hidden={hidden}
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
