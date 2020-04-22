import React, { useContext } from 'react';

import { AppContext } from '~/pages';
import { Add } from '~/assets/image';
import AchievementItem from './AchievementItem';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const Achievements = () => {
  const context = useContext(AppContext);
  const preview = context.preview.get;
  const achievements = context.data.get.achievements;

  /**
   * Update the hidden state of skill
   * @param {React.MouseEvent} e [ on click event ]
   * @param {string} key [ name of a particular achievements]
   */
  const updateHiddenStateAchievement = (e, key) => {
    e.preventDefault();

    let data = context.data.get;

    data['achievements'].find(({ name, hidden }, index) => {
      if (name === key) {
        let newState = !hidden;

        data['achievements'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
    console.log(context.data.get);
  };

  const achievementsList = achievements.map(({ name, date }) => (
    <AchievementItem
      key={name}
      title={name}
      date={date}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateAchievement}
    />
  ));

  return (
    <div className="achievements-block">
      <div className="card">
        <CardHeader title="Achievements" />
        {achievementsList}
        <CardFooter icon={Add} hide={preview} label="Add another achievement" />
      </div>
    </div>
  );
};

export default Achievements;
