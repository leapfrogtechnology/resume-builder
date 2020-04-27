import React, { useState, useContext } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import AchievementItem from './AchievementItem';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const Achievements = () => {
  const [showModel, setModel] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  const context = useContext(FormContext);
  const preview = context.preview.get;
  const achievements = context.data.get.achievements;

  /**
   * Update the hidden state of skill.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular achievements].
   */
  const updateHiddenStateAchievement = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['achievements'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['achievements'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  if (!achievements) {
    return <></>;
  }

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
    <>
      <CardHeader title="Achievements" />
      {achievementsList}
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another achievement"
        showModal={showModel}
        onAdd={editBtnHandler}
        component={AddAchievement}
        onClose={closeBtnHandler}
      />
    </>
  );
};

export default Achievements;
