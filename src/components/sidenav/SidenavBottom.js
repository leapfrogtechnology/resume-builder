import React from 'react';
import PropTypes from 'prop-types';

import resumeDoc from '~/utilities/resume/word.js';
import CardHeader from '~/components/cardheader/CardHeader';
import { Download, Copy, Email, Check, Delete } from '~/assets/image';

const SidenavBottom = ({ resumeJson, deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">
              <img src={Download} alt="Edit" />
            </span>
            <span
              className="sidenav__cv-action-label text-link"
              onClick={e => {
                e.preventDefault();
                resumeDoc(resumeJson);
              }}
            >
              Download PDF
            </span>
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
            <span className="sidenav__cv-action-label text-link text-link--danger" onClick={deleteIconClicked}>
              Delete CV
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

SidenavBottom.propTypes = {
  resumeJson: PropTypes.object,
  deleteIconClicked: PropTypes.func,
};

export default SidenavBottom;
