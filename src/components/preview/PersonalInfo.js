import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';

export const PersonalInfo = props => {
  const { personalInfo, isPreview } = props;

  const personalInfoList = Object.keys(personalInfo).map(key => (
    <PersonalInfoItem key={key} title={key} data={personalInfo[key]} isPreview={isPreview}></PersonalInfoItem>
  ));

  return (
    <div>
      <div>
        <h1>Personal Information</h1>
        <span>Edit</span>
      </div>
      <ul>{personalInfoList}</ul>
    </div>
  );
};

PersonalInfo.propTypes = {
  personalInfo: PropTypes.object,
  isPreview: PropTypes.bool,
};

const PersonalInfoItem = props => {
  const { title, data, isPreview } = props;

  const [hidden, setHidden] = useState(0);

  return data ? (
    <li>
      <div>
        <div>
          <span>Your {title.charAt(0).toUpperCase() + title.slice(1)}</span>
          <p>{data.data}</p>
          {hidden ? <span>Hidden</span> : <></>}
        </div>
        {!isPreview ? (
          <div>
            <button
              onClick={e => {
                setHidden(!hidden);
                onHiddenClicked(e, hidden);
              }}
            >
              {hidden ? 'Show' : 'Hide'}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </li>
  ) : (
    <></>
  );
};

PersonalInfoItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  isPreview: PropTypes.bool,
};

/**
 * @param {Event} _e
 *  @param {boolean} hidden
 */
const onHiddenClicked = (_e, hidden) => {
  // Here we call our api to manipulate our json

  if (!hidden) {
    // console.log('Removed');
  } else {
    // console.log('added');
  }
};
