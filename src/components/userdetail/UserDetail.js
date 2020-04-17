import React from 'react';
import PropTypes from 'prop-types';

import Media from '../media/Media';
import { FAVORITE_ICON } from '../icons/icon';

import Button from '../button/Button';

const UserDetail = props => {
  const { name, experience, onPreviewBtnClicked } = props;

  return (
    <section className="user-detail">
      <div className="user-detail-container">
        <div className="user-detail__left-content">
          <div className="user-detail__image-wrapper">
            <img src="../../assets/Image.png" alt="Profile Picture" />
          </div>
          <div className="user-detail__emp-attribute">
            <div className="user-detail__username">{name}</div>
            <div className="user-detail__activity">
              <Media icon={FAVORITE_ICON} label={experience} />
            </div>
          </div>
        </div>
        <div className="user-detail__right-content">
          <Button content="Preview" onclick={onPreviewBtnClicked} />
        </div>
      </div>
    </section>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.string,
  onPreviewBtnClicked: PropTypes.func,
};

export default UserDetail;
