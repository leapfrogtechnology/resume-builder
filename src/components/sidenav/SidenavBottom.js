import React from 'react';
import PropTypes from 'prop-types';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDocument from '~/components/pdf/Pdf';
import CardHeader from '~/components/cardheader/CardHeader';
import { Download, Copy, Email, Check, Delete } from '~/assets/image';

const SidenavBottom = ({ resumeJson, downloadPdf, downloadPdfIconClicked, deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li className="sidenav__cv-action" onClick={downloadPdfIconClicked}>
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
          <li className="sidenav__cv-action" onClick={deleteIconClicked}>
            <span className="sidenav__cv-action-icon">
              <img src={Delete} alt="Edit" />
            </span>
            <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
          </li>

          {downloadPdf && (
            <PDFDownloadLink document={<MyDocument resumeJson={resumeJson} />} fileName="somename.pdf">
              {({ url, loading, error }) => {
                if (!loading) {
                  let a = document.createElement('a');

                  a.href = url;
                  a.download = 'resume.pdf';
                  a.click();

                  window.URL.revokeObjectURL(url);

                  downloadPdfIconClicked();
                }
              }}
            </PDFDownloadLink>
          )}
        </ul>
      </div>
    </div>
  );
};

SidenavBottom.propTypes = {
  resumeJson: PropTypes.object,
  downloadPdf: PropTypes.bool,
  downloadPdfIconClicked: PropTypes.func,
  deleteIconClicked: PropTypes.func,
};

export default SidenavBottom;
