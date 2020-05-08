import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import '~/pages/_app';
import { Logo } from '~/assets/image';
import { DROPDOWN } from '~/components/icons/icon';
import { FormContext } from '~/components/FormContext';
import * as dateUtils from '~/utilities/date/FormatDate';
import UserDetail from '~/components/userdetail/UserDetail';

const Header = ({ name, status, onPreviewBtnClicked }) => {
  const context = useContext(FormContext);
  const experience = context.data.get.experience;
  const preview = context.preview.get;
  const profileImage = context.data.get.profileImage;

  let experienceLabel = 'You do not have any professional experience yet';

  if (experience) {
    const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);

    experienceLabel = '';

    if (experienceInYearAndMonth.year !== 0) {
      experienceLabel =
        experienceInYearAndMonth.year > 1
          ? experienceInYearAndMonth.year.toString() + ' years '
          : experienceInYearAndMonth.year.toString() + ' year ';
    }

    if (experienceInYearAndMonth.month !== 0) {
      experienceLabel +=
        experienceInYearAndMonth.month > 1
          ? experienceInYearAndMonth.month.toString() + ' months'
          : experienceInYearAndMonth.month.toString() + ' month';
    }

    experienceLabel += ' professional experience';
  } else {
    experienceLabel = 'You do not have any professional experience yet';
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header__left-content">
          <div className="logo-wrapper">
            <img src={Logo} alt="Leapfrog" />
          </div>
          <div className="header__app-info">CV Builder</div>
        </div>
        <div className="header__right-content">
          <div className="profile">
            <div className="profile-detail">
              <div className="profile__name">{name}</div>
              <div className="profile__status">{status}</div>
            </div>
            <div className="dropdown">{DROPDOWN}</div>
          </div>
        </div>
      </div>
      <UserDetail
        name={name}
        experience={experienceLabel}
        profileImg={profileImage}
        preview={preview}
        onPreviewBtnClicked={onPreviewBtnClicked}
      />
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  onPreviewBtnClicked: PropTypes.func,
};

export default Header;
