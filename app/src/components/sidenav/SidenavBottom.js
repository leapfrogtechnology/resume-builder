import React from 'react';
import PropTypes from 'prop-types';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDocument from '~/components/pdf/Pdf';
import { downloadPDF } from '~/utilities/download';
import CardHeader from '~/components/cardheader/CardHeader';
import { DELETE, CHECK, EMAIL, COPY_LINK, DOWNLOAD } from '~/components/icons/icon';

const SidenavBottom = ({ resumeJson, username, downloadPdf, downloadPdfIconClicked, deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <li className="sidenav__cv-action" onClick={downloadPdfIconClicked}>
            <span className="sidenav__cv-action-icon">{DOWNLOAD}</span>
            <span className="sidenav__cv-action-label text-link">Download PDF</span>
          </li>
          <li className="sidenav__cv-action" onClick={deleteIconClicked}>
            <span className="sidenav__cv-action-icon">{DELETE('#F44336')}</span>
            <span className="sidenav__cv-action-label text-link text-link--danger">Delete CV</span>
          </li>

          {downloadPdf && (
            <PDFDownloadLink document={<MyDocument resumeJson={resumeJson} />} fileName="somename.pdf">
              {({ url, loading }) => {
                downloadPDF(url, username, loading, downloadPdfIconClicked);
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
  username: PropTypes.string,
  downloadPdf: PropTypes.bool,
  downloadPdfIconClicked: PropTypes.func,
  deleteIconClicked: PropTypes.func,
};

export default SidenavBottom;
