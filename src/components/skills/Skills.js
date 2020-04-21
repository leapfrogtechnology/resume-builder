import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';
import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const Skills = ({ skills, preview }) => {
  const skillsList = skills.map(({ name, label, subSkills, hidden }) => (
    <SkillItem key={name} title={label} values={subSkills} visibility={hidden} preview={preview} />
  ));

  return (
    <div className="skills-block">
      <div className="card">
        <CardHeader title="Skills" />
        <div className="skills">{skillsList}</div>
        <CardFooter icon={Add} label="Add another skill" />
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array,
  preview: PropTypes.bool,
};

export default Skills;
