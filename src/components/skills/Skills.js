import React, { useState } from 'react';

import { Add } from '~/assets/image';
import AddSkill from '~/components/form/skill/AddSkill';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import EditOptions from '~/components/editoptions/EditOptions';

const Skills = () => {
  const [showModel, setModal] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModel);
  };

  return (
    <>
      <CardHeader title="Skills" />
      <div className="skills">
        <div className="skills__row">
          <div className="skills__row-header">
            <div className="skils__row-header-left sub-title">PHP</div>
            <div className="skills__row-header-right">
              <EditOptions
                component={AddSkill}
                onEdit={editBtnHandler}
                onClose={closeBtnHandler}
                showModal={showModel}
              />
            </div>
          </div>
          <div className="chip-input-value">
            <span className="chip-input-tag">Zend</span>
            <span className="chip-input-tag">Zend</span>
          </div>
        </div>
        <div className="skills__row">
          <div className="skills__row-header">
            <div className="skils__row-header-left sub-title">Python</div>
            <div className="skills__row-header-right">
              <EditOptions
                component={AddSkill}
                onEdit={editBtnHandler}
                onClose={closeBtnHandler}
                showModal={showModel}
              />
            </div>
          </div>
          <div className="chip-input-value">
            <span className="chip-input-tag">Zend</span>
            <span className="chip-input-tag">Zend</span>
          </div>
        </div>
        <div className="skills__row">
          <div className="skills__row-header">
            <div className="skils__row-header-left sub-title">Javascript</div>
            <div className="skills__row-header-right">
              <EditOptions
                component={AddSkill}
                onEdit={editBtnHandler}
                onClose={closeBtnHandler}
                showModal={showModel}
              />
            </div>
          </div>
          <div className="chip-input-value">
            <span className="chip-input-tag">Javascript</span>
            <span className="chip-input-tag">Zend</span>
          </div>
        </div>
      </div>
      <CardFooter
        icon={Add}
        label="Add another skill"
        showModal={showModel}
        onAdd={editBtnHandler}
        component={AddSkill}
        onClose={closeBtnHandler}
      />
    </>
  );
};

export default Skills;
