import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '~/assets/image';
import Media from '~/components/media/Media';
import Button from '~/components/button/Button';
import { FAVORITE_ICON } from '~/components/icons/icon';

const UserDetail = ({ name, experience, preview, onPreviewBtnClicked }) => {
  return (
    <section className="user-detail">
      <div className="user-detail-container">
        <div className="user-detail__left-content">
          <div className="user-detail__image-wrapper">
            <img src={Image} alt="Profile Picture" />
          </div>
          <div className="user-detail__emp-attribute">
            <div className="user-detail__username">{name}</div>
            <div className="user-detail__activity">
              <Media icon={FAVORITE_ICON} label={experience} />
            </div>
          </div>
        </div>
        <div className="user-detail__right-content">
          <Button content={!preview ? 'Preview' : 'Go Back'} onclick={onPreviewBtnClicked} />
        </div>
      </div>
    </section>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.string,
  preview: PropTypes.bool,
  onPreviewBtnClicked: PropTypes.func,
};

export default UserDetail;
