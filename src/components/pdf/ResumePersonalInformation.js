import React, { useContext } from 'react';

import { FormContext } from '../FormContext';
import { ProfileImage } from '~/assets/image';
import ResumePersonalInformationItem from '~/components/pdf/ResumePersonalInformationItem';

const ResumePersonalInformation = () => {
  const context = useContext(FormContext);

  const name = context.data.get.name;
  const role = context.data.get.role;
  const introduction = context.data.get.introduction;
  const email = context.data.get.email;
  const phone = context.data.get.phone;
  const github = context.data.get.github;
  const linkedIn = context.data.get.linkedIn;

  return (
    <div className="personal-information">
      <div className="personal-information__left">
        <div className="profile-image-wrapper">
          <img src={ProfileImage} alt="Image" />
        </div>
      </div>
      <div className="personal-information__right">
        <div className="profile-detail">
          <div className="profile__name profile__name--large profile__name--dark">{name}</div>
          {role && <div className="profile__status profile__status--dark">{role.label}</div>}
        </div>
        <div className="personal-information__content">
          <ul className="personal-information__content-row">
            {email && <ResumePersonalInformationItem label="Email" value={email.value} />}
            {phone && <ResumePersonalInformationItem label="Phone" value={phone.value} />}
            {github && <ResumePersonalInformationItem label="Github" value={github.value} />}
            {linkedIn && <ResumePersonalInformationItem label="LinkedIn" value={linkedIn.value} />}
          </ul>
        </div>
        {introduction && <p className="personal-information__detail">{introduction.value}</p>}
      </div>
    </div>
  );
};

export default ResumePersonalInformation;
