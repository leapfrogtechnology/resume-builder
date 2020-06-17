import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Image } from '~/assets/image';
import Media from '~/components/media/Media';
import Button from '~/components/button/Button';
import OpenModal from '~/components/modal/OpenModal';
import { FAVORITE_ICON } from '~/components/icons/icon';
import AddExperience from '~/components/form/experience/AddExperience';

const UserDetail = ({
  name,
  experience,
  profileImg,
  preview,
  showPreviewBtn,
  downloadBtnHandler,
  previewBtnHandler,
}) => {
  const router = useRouter();
  const [showModal, setModal] = useState(false);

  const toggleEdit = () => setModal(!showModal);

  return (
    <section className="user-detail">
      <div className="user-detail-container">
        <div className="user-detail__left-content">
          <div className="user-detail__image-wrapper">
            <img src={profileImg && !profileImg.isDeleted ? profileImg.value : Image} alt="Profile Picture" />
          </div>
          <div className="user-detail__emp-attribute">
            <div className="user-detail__username">{name ? name : 'Welcome, Leapfrogger !'}</div>
            <div className="user-detail__activity">
              <Media icon={FAVORITE_ICON} label={experience} preview={preview} onclick={toggleEdit} />
              {showModal && (
                <OpenModal component={AddExperience} onClose={toggleEdit} showModal={showModal}></OpenModal>
              )}
            </div>
          </div>
        </div>
        <div className="user-detail__right-content">
          {showPreviewBtn && <Button content={!preview ? 'Preview' : 'Back To Edit'} onclick={previewBtnHandler} />}
          {preview && router.query.email && <Button content="Download as PDF" onclick={downloadBtnHandler} />}
        </div>
      </div>
    </section>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string,
  experience: PropTypes.string,
  profileImg: PropTypes.object,
  preview: PropTypes.bool,
  showPreviewBtn: PropTypes.bool,
  downloadBtnHandler: PropTypes.func || null,
  previewBtnHandler: PropTypes.func || null,
};

export default UserDetail;
