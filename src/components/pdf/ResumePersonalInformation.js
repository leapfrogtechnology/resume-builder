import React from 'react'

import { ProfileImage } from '~/assets/image';

import ResumePersonalInformationItem from '~/components/pdf/ResumePersonalInformationItem';

const ResumePersonalInformation = () => {
  return (
    <div className="personal-information">
      <div className="personal-information__left">
        <div className="profile-image-wrapper">
          <img src={ProfileImage} alt="Image" />
        </div>
      </div>
      <div className="personal-information__right">
        <div className="profile-detail">
          <div className="profile__name profile__name--large">Ribby</div>
          <div className="profile__status profile__status--dark">Executive Manager</div>
        </div>
        <div className="personal-information__content">
          <ul className="personal-information__content-row">
            <ResumePersonalInformationItem label="Email" value="ribby@lftechnology.com"/>
            <ResumePersonalInformationItem label="Phone" value="4589632"/>
            <ResumePersonalInformationItem label="Github" value="ribby@github.com"/>
            <ResumePersonalInformationItem label="LinkedIn" value="ribby@linkedin.com"/>
          </ul>
        </div>
        <p className="personal-information__detail">
          My name is Ribby and I am currently the Engineering Manager at Leapfrog. I love to challenge the normal and help build extraordinary product expeirences.
        </p>
      </div>
    </div>
  );
}

export default ResumePersonalInformation;