import React, { useState } from 'react';

import { Add } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import EditOptions from '~/components/editoptions/EditOptions';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const Achievements = () => {
  const [showModel, setModel] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    console.log('ppp');
    setModel(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    console.log("hello");
    setModel(!showModel);
  };

  return (
    <>
      <CardHeader title="Achievements" />
      <div className="achievements">
        <div className="achievements__row">
          <div className="achievements__row-header">
            <div className="sub-title">Headhunt Award</div>
            <EditOptions
              component={AddAchievement}
              onEdit={editBtnHandler}
              onClose={closeBtnHandler}
              showModel={showModel}
            />
          </div>
          <div className="achievements__year">December 2012</div>
        </div>
      </div>
      <CardFooter
        icon={Add}
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
