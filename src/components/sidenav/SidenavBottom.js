import React from 'react';
import PropTypes from 'prop-types';

import resumeDoc from '~/utilities/resume/word.js';
import CardHeader from '~/components/cardheader/CardHeader';
import { Download, Copy, Email, Check, Delete } from '~/assets/image';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '~/utilities/resume/pdf';
import { DELETE, CHECK, EMAIL, COPY_LINK, DOWNLOAD } from '../icons/icon';

const SidenavBottom = ({ resumeJson, deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li
            className="sidenav__cv-action"
            onClick={e => {
              e.preventDefault();
              resumeDoc(resumeJson);
            }}
          >
            <span className="sidenav__cv-action-icon">
              {DOWNLOAD}
            </span>
            <span className="sidenav__cv-action-label text-link">Download PDF</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">
              {COPY_LINK}
            </span>
            <span className="sidenav__cv-action-label text-link">Copy Shareable Link</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">
              {EMAIL}
            </span>
            <span className="sidenav__cv-action-label text-link">Email CV as Attachment</span>
          </li>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">
              {CHECK}
            </span>
            <span className="sidenav__cv-action-label text-link">Request Professional Review</span>
          </li>
          <li className="sidenav__cv-action" onClick={deleteIconClicked}>
            <span className="sidenav__cv-action-icon">
              {DELETE('#F44336')}
            </span>
            <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
          </li>
          <li>
            <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
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
