import React from 'react';
import '../../pages/_app';
import UserDetail from '../userdetail/UserDetail';
import { DROPDOWN } from '../icons/icon';
import {Logo} from '../../assets/image';

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
