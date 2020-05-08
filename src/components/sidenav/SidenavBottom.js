import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from '~/components/cardheader/CardHeader';
import { DELETE, CHECK, EMAIL, COPY_LINK, DOWNLOAD } from '~/components/icons/icon';

const SidenavBottom = ({ deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">{DOWNLOAD}</span>
            <span className="sidenav__cv-action-label text-link">Download PDF</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">{COPY_LINK}</span>
            <span className="sidenav__cv-action-label text-link">Copy Shareable Link</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">{EMAIL}</span>
            <span className="sidenav__cv-action-label text-link">Email CV as Attachment</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">{CHECK}</span>
            <span className="sidenav__cv-action-label text-link">Request Professional Review</span>
          </li>
          <li className="sidenav__cv-action" onClick={deleteIconClicked}>
            <span className="sidenav__cv-action-icon">{DELETE('#F44336')}</span>
            <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
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
