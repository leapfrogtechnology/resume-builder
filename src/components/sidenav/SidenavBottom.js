import React from 'react';

import CardHeader from '~/components/cardheader/CardHeader';
import * as pdfGenerator from '~/utilities/resume/PdfGenerator.js';
import { Download, Copy, Email, Check, Delete } from '~/assets/image';

const SidenavBottom = () => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li className="sidenav__cv-action">
            <span className="sidenav__cv-action-icon">
              <img src={Download} alt="Edit" />
            </span>
            <span className="sidenav__cv-action-label text-link" onClick={e => pdfGenerator.downloadPDF(e)}>
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
            <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidenavBottom;
