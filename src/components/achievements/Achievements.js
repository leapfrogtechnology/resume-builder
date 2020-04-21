import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '~/assets/image';
import AchievementItem from './AchievementItem';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const Achievements = ({ achievements, preview }) => {
  const achievementsList = achievements.map(({ title, date, visibility }) => (
    <AchievementItem key={title} title={title} date={date} visibility={visibility} preview={preview} />
  ));

  return (
    <div className="achievements-block">
      <div className="card">
        <CardHeader title="Achievements" />
        {achievementsList}
        <CardFooter icon={Add} label="Add another achievement" />
      </div>
    </div>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.array,
  preview: PropTypes.bool,
};

export default Achievements;
