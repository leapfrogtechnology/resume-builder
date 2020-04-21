import React from 'react';
import PropTypes from 'prop-types';
import Contact from '~/components/contact/Contact';
import CardHeader from '~/components/cardheader/CardHeader';
import { Edit, ProfileImage, Trash, Download, Copy, Email, Check, Delete } from '~/assets/image';

const Sidenav = ({ contacts }) => {
  const contactsList = contacts.map(({ type, value }) => <Contact label={type} value={value} />);

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
            <CardHeader title="Contact Information" icon={Edit} />
            {contactsList}
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
