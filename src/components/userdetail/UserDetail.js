import React from 'react';
import Media from '../media/Media';
import { FAVORITE_ICON } from '../icons/icon';
import Button from '../button/Button';

const UserDetail = () => {
  return (
    <section className="user-detail">
      <div className="user-detail-container">
        <div className="user-detail__left-content">
          <div className="user-detail__image-wrapper">
            <img src="../../assets/Image.png" alt="Profile Picture" />
          </div>
          <div className="user-detail__emp-attribute">
            <div className="user-detail__username">Ribby McFroggy</div>
            <div className="user-detail__activity">
              <Media icon={FAVORITE_ICON} label="5 years professional experience" />
            </div>
          </div>
        </div>
        <div className="user-detail__right-content">
          <Button content="Preview" />
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
