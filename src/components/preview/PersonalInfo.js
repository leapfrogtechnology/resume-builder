import React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';

const PersonalInfo = props => {
  const { personalInfo, preview } = props;

  const personalInfoList = Object.keys(personalInfo).map(key => (
    <PersonalInfoItem key={key} title={key} data={personalInfo[key]} preview={preview}></PersonalInfoItem>
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
  preview: PropTypes.bool,
};

const PersonalInfoItem = props => {
  const { title, data, preview } = props;

  const [hidden, setHidden] = useState(0);

  return data ? (
    <li>
      <div>
        <div>
          <span>Your {title.charAt(0).toUpperCase() + title.slice(1)}</span>
          <p>{data.data}</p>
          {hidden ? <span>Hidden</span> : <></>}
        </div>
        {preview ? (
          <></>
        ) : (
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
  preview: PropTypes.bool,
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

export default PersonalInfo;
