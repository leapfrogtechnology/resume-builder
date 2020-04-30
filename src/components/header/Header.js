import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import '~/pages/_app';
import { Logo } from '~/assets/image';
import { FormContext } from '../FormContext';
import { DROPDOWN } from '~/components/icons/icon';
import UserDetail from '~/components/userdetail/UserDetail';

const Header = ({ name, status, onPreviewBtnClicked }) => {
  const context = useContext(FormContext);
  const experience = context.data.get.experience;
  const preview = context.preview.get;

  let experienceLabel = 'You do not have any proffessional experience yet';

  if (experience) {
    if (experience.value === 1) {
      experienceLabel = experience.value + ' year of proffessional experience';
    } else if (experience.value > 1) {
      experienceLabel = experience.value + ' years of proffessional experience';
    }
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
