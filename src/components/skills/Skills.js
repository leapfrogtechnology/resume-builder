import React from 'react';

import SkillItem from '~/components/skills/SkillItem';
import AddSkill from '~/components/form/skill/AddSkill';
import Section from '~/components/Section';

const Skills = () => {
  return (
    <Section dataKey="skills" component={AddSkill}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, subSkills }) => (
          <SkillItem
            id={id}
            key={id}
            title={name}
            values={subSkills}
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
