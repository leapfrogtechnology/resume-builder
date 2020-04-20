import React from 'react';
import { useState } from 'react';

const PersonalInfoItem = ({ title, data, preview }) => {
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

export default PersonalInfoItem;
