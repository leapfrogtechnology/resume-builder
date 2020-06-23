import React from "react";
import PropTypes from "prop-types";
import { PDFDownloadLink } from "@react-pdf/renderer";

import MyDocument from "components/pdf/Pdf";
import CardHeader from "components/cardheader/CardHeader";
import { DELETE, DOWNLOAD } from "components/icons/icon";

const SidenavBottom = ({ resumeJson, username, deleteIconClicked }) => {
  return (
    <div className="sidenav-bottom">
      <div className="card">
        <CardHeader title="CV Actions" />
        <ul>
          <PDFDownloadLink
            className="no-underline"
            document={<MyDocument resumeJson={resumeJson} />}
            fileName={`Resume -${username}`}
          >
            {({ loading }) =>
              loading ? (
                <></>
              ) : (
                <li className="sidenav__cv-action">
                  <span className="sidenav__cv-action-icon">{DOWNLOAD}</span>
                  <span className="sidenav__cv-action-label text-link">
                    Download PDF
                  </span>
                </li>
              )
            }
          </PDFDownloadLink>
          <li className="sidenav__cv-action" onClick={deleteIconClicked}>
            <span className="sidenav__cv-action-icon">{DELETE("#F44336")}</span>
            <span className="sidenav__cv-action-label text-link text-link--danger">
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
  username: PropTypes.string,
  deleteIconClicked: PropTypes.func,
};

export default SidenavBottom;
