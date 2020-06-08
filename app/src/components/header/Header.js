import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import '~/pages/_app';
import { FormContext } from '~/components/FormContext';
import * as dateUtils from '~/utilities/date/FormatDate';
import UserDetail from '~/components/userdetail/UserDetail';

const Header = ({ name, btnType, onclick }) => {
  const context = useContext(FormContext);
  const preview = context.preview.get;
  const experience = context.data.get.experience;
  const profileImage = context.data.get.profileImage;

  let experienceLabel = preview ? 'No professional experience yet' : 'You do not have any professional experience yet';

  if (experience) {
    const experienceInYearAndMonth = dateUtils.getExperienceFormat(experience);
    const label =
      dateUtils.timeWithSuffix(experienceInYearAndMonth.year, 'year') +
      ' ' +
      dateUtils.timeWithSuffix(experienceInYearAndMonth.month, 'month');

    experienceLabel = label.trim() ? `${label.trim()} of professional experience` : experienceLabel;
  }

  return (
    <header className="header">
      <UserDetail
        name={name}
        experience={experienceLabel}
        profileImg={profileImage}
        btnType={btnType}
        preview={preview}
        onBtnClicked={onclick}
      />
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  btnType: PropTypes.string,
  onclick: PropTypes.func,
};

export default Header;
