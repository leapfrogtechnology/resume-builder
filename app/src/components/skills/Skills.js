import React from 'react';

import Section from '~/components/Section';

import SkillItem from '~/components/skills/SkillItem';
import AddSkill from '~/components/form/skill/AddSkill';

const Skills = () => {
  return (
    <Section dataKey="skills" component={AddSkill}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, subSkills, hidden }) => (
          <SkillItem
            id={id}
            key={id}
            title={name}
            values={subSkills}
            hidden={hidden}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={deleteItem}
          />
        ))
      }
    </Section>
  );
};

export default Skills;
