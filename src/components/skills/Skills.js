import React from 'react';

import SkillItem from '~/components/skills/SkillItem';
import AddSkill from '~/components/form/skill/AddSkill';
import Section from '~/components/Section';

const Skills = () => {
  return (
    <Section dataKey="skills" component={AddSkill}>
      {({ data, preview, onDelete, updateHiddenState }) =>
        data.map(({ name, subSkills }, index) => (
          <SkillItem
            key={index}
            title={name}
            values={subSkills}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={onDelete}
          />
        ))
      }
    </Section>
  );
};

export default Skills;
