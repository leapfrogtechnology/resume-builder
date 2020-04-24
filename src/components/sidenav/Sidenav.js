import React, { useState } from 'react';

import Contact from '~/components/contact/Contact';
import CardHeader from '~/components/cardheader/CardHeader';
import AddContact from '~/components/form/contact/AddContact';
import { Edit, ProfileImage, Trash, Download, Copy, Email, Check, Delete } from '~/assets/image';

const Sidenav = () => {
  const [showModal, setModal] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModal);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModal);
  };

  return (
    <div className="sidenav">
      <div className="sidenav-top">
        <div className="card">
          <CardHeader title="Display Picture" />
          <div className="sidenav__upload-block">
            <div className="sidenav__upload-block-l">
              <div className="profile-image-wrapper">
                <img src={ProfileImage} alt="Image" />
              </div>
              <span className="text-link text-link--small">Upload new version</span>
            </div>
            <div className="sidenav__upload-block-r">
              <div className="icon">
                <img src={Trash} alt="Trash" />
              </div>
            </div>
          </div>
          <div className="sidenav__contact-block">
            <CardHeader
              title="Contact Information"
              icon={Edit}
              component={AddContact}
              onEdit={editBtnHandler}
              onClose={closeBtnHandler}
              showModal={showModal}
            />
            <Contact label="Email Address" value="ribby@lftechnology.com" />
            <Contact label="Phone Number" value="983345698" />
            <Contact label="GitHub" value="https://github.com/user/ribbyX" />
            <Contact label="LinkedIn" value="https://linkedin.com/user/ribbyX" />
          </div>
        </div>
      </div>

      <div className="sidenav-bottom">
        <div className="card">
          <CardHeader title="CV Actions" />
          <ul>
            <li className="sidenav__cv-action">
              <span className="sidenav__cv-action-icon">
                <img src={Download} alt="Edit" />
              </span>
              <span className="sidenav__cv-action-label text-link">Download PDF</span>
            </li>
            <li className="sidenav__cv-action">
              <span className="sidenav__cv-action-icon">
                <img src={Copy} alt="Edit" />
              </span>
              <span className="sidenav__cv-action-label text-link">Copy Shareable Link</span>
            </li>
            <li className="sidenav__cv-action">
              <span className="sidenav__cv-action-icon">
                <img src={Email} alt="Edit" />
              </span>
              <span className="sidenav__cv-action-label text-link">Email CV as Attachment</span>
            </li>
            <li className="sidenav__cv-action">
              <span className="sidenav__cv-action-icon">
                <img src={Check} alt="Edit" />
              </span>
              <span className="sidenav__cv-action-label text-link">Request Professional Review</span>
            </li>
            <li className="sidenav__cv-action">
              <span className="sidenav__cv-action-icon">
                <img src={Delete} alt="Edit" />
              </span>
              <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
