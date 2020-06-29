import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "components/header/Header";
import { FormContext } from "components/FormContext";
import Dashboard from "components/dashboard/Dashboard";

import textConstants from "constant/textConstants";
import routeConstants from "constant/routeConstants";

import { getUser } from "storage/LocalStorage";
import { getErrorMessage } from "utilities/getErrorMessage";

import * as resumeService from "service/resumeBuilder";

const Preview = ({ match }) => {
  const history = useHistory();
  const { email } = match.params;
  const [preview] = useState(true);
  const [showPreviewBtn, setShowPreviewBtn] = useState(false);
  const [data, updateData] = useState({});
  const [statusCode, setStatusCode] = useState(null);

  const store = {
    preview: { get: preview },
    data: { get: data },
    hideSideNav: { get: true },
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const result = await resumeService.fetchResume(email);
        const resume = JSON.parse(result.data);

        const user = await getUser();

        const showPreview = user
          ? user.email === match.params.email
            ? true
            : user.isAdmin === true
            ? true
            : false
          : false;

        setShowPreviewBtn(showPreview);

        setStatusCode(result.status);
        updateData(resume ? resume : {});
      } catch (err) {
        setStatusCode(err.response.status);

        if (err.response.status !== textConstants.NOT_FOUND) {
          swal({ text: getErrorMessage(err) });
        }
      }
    };
    fetchResume();
  }, [email]);

  const previewBtnHandler = () =>
    history.replace(routeConstants.EDITRESUME.replace(":email", email));

  return (
    statusCode && (
      <div className="page-container">
        <FormContext.Provider value={store}>
          <Header
            name={data.name ? data.name.value : ""}
            showPreviewBtn={showPreviewBtn}
            previewBtnHandler={previewBtnHandler}
          />
          <Dashboard />
        </FormContext.Provider>
      </div>
    )
  );
};

export default Preview;
