import React from 'react';
import '~/pages/_app';
import {Logo} from '~/assets/image';
import { DROPDOWN } from '~/components/icons/icon';
import UserDetail from '~/components/userdetail/UserDetail';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__left-content">
          <div className="logo-wrapper">
            <img src={Logo} alt="Leapfrog" />
          </div>
          <div className="header__app-info">
            CV Builder
          </div>
        </div>
        <div className="header__right-content">
          <div className="profile">
            <div className="profile-detail">
              <div className="profile__name">Ribby Frog</div>
              <div className="profile__status">Employee</div>
            </div>
            <div className="dropdown">
              {DROPDOWN}
            </div>
          </div>
        </div>
      </div>
      <UserDetail />
    </header>
  );
};

export default Header;
