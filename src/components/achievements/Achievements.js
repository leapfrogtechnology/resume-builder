import React, { useState, useContext } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import AchievementItem from './AchievementItem';
import * as storage from '~/storage/LocalStorage';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const Achievements = () => {
  const [addAchievement, setAdd] = useState(false);
  const context = useContext(FormContext);

  const preview = context.preview.get;
  const achievements = context.data.get.achievements;

  const addBtnHandler = () => {
    setAdd(!addAchievement);
  };

  const addBtnCloseHandler = () => {
    setAdd(!addAchievement);
  };

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

  const deleteAchievment = (e, name, date) => {
    e.preventDefault();

    const data = context.data.get;

    const filteredAchievements = data['achievements'].filter(achievement => {
      return achievement.name !== name && achievement.date !== date;
    });

    data['achievements'] = filteredAchievements;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  if ((!achievements || achievements.length < 1) && !preview) {
    return <></>;
  }

  if (!achievements || achievements.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
          <EmptyCard emptyMessage="You do not have any achievement yet."></EmptyCard>
          <CardFooter
            icon={Add}
            hide={preview}
            label="Add another achievement"
            showModal={addAchievement}
            onAdd={addBtnHandler}
            component={AddAchievement}
            onClose={addBtnCloseHandler}
            modifier="empty"
          />
        </div>
      </div>
    );
  }

  const achievementsList = achievements.map(({ name, date, description }, index) => (
    <AchievementItem
      key={index}
      title={name}
      date={date}
      description={description}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateAchievement}
      onDelete={deleteAchievment}
    />
  ));

  return (
    <div className="content-block">
      <div className="card">
        <CardHeader title="Achievements" />
        {achievementsList}
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another achievement"
          showModal={addAchievement}
          onAdd={addBtnHandler}
          component={AddAchievement}
          onClose={addBtnCloseHandler}
        />
      </div>
    </div>
  );
};

export default Achievements;
