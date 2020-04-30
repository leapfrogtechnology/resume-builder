import React, { useContext, useState } from 'react';

import SkillItem from './SkillItem';
import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import AddSkill from '../form/skill/AddSkill';
import * as storage from '~/storage/LocalStorage';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

const Skills = () => {
  const context = useContext(FormContext);

  const [addSkill, setAdd] = useState(false);
  const [editSkill, setEdit] = useState(false);

  const preview = context.preview.get;
  const skills = context.data.get.skills;

  const editBtnHandler = e => {
    e.preventDefault();
    setEdit(!editSkill);
  };

  const addBtnHandler = e => {
    setAdd(!addSkill);
  };

  const addBtnCloseHandler = e => {
    setAdd(!addSkill);
  };

  const editBtnCloseHandler = e => {
    e.preventDefault();
    setEdit(!editSkill);
  };

  /**
   * Update the hidden state of skill.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ label of a particular skill].
   */
  const updateHiddenStateSkill = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['skills'].find(({ label, hidden }, index) => {
      if (label === key) {
        const newState = !hidden;

        data['skills'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteSkill = (e, name) => {
    e.preventDefault();

    const data = context.data.get;

    const filteredSkills = data['skills'].filter(skill => {
      return skill.label !== name;
    });

    data['skills'] = filteredSkills;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  if (!skills || skills.length < 1) {
    return (
      <>
        <EmptyCard emptyMessage="You do not have any skills yet."></EmptyCard>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another skill"
          showModal={addSkill}
          onAdd={addBtnHandler}
          component={AddSkill}
          onClose={addBtnCloseHandler}
          modifier="empty"
        />
      </>
    );
  }

  const skillsList = skills.map(({ name, label, subSkills }, index) => (
    <SkillItem
      key={index}
      title={label}
      values={subSkills}
      preview={preview}
      isEdit={editSkill}
      onHiddenIconClicked={updateHiddenStateSkill}
      onEdit={editBtnHandler}
      onClose={editBtnCloseHandler}
      onDelete={deleteSkill}
    />
  ));

  return (
    <>
      <CardHeader title="Skills" />
      <div className="skills">{skillsList}</div>
      <CardFooter
        icon={Add}
        hide={preview}
        label="Add another skill"
        showModal={addSkill}
        onAdd={addBtnHandler}
        component={AddSkill}
        onClose={addBtnCloseHandler}
      />
    </>
  );
};

export default Skills;
