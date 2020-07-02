import swal from "sweetalert";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "components/header/Header";
import { FormContext } from "components/FormContext";
import Dashboard from "components/dashboard/Dashboard";

import * as localStorage from "storage/LocalStorage";

import textConstants from "constant/textConstants";
import routeConstants from "constant/routeConstants";
import * as resumeService from "service/resumeBuilder";
import { getErrorMessage } from "utilities/getErrorMessage";

const EditResume = (props) => {
  const { email } = useParams();
  const [preview] = useState(false);
  const [data, updateData] = useState({});
  const [loading, setLoading] = useState(true);
  const [statusCode, setStatusCode] = useState(null);

  const updateCvHandler = async (updatedData) => {
    try {
      await resumeService.editResume(updatedData, email);

      updateData((prevState) => ({ ...prevState, ...updatedData }));
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const logout = () => {
    localStorage.logout();

    props.history.replace(routeConstants.LOGIN);
  };

  const handleErrorResponse = (err) => {
    const errorMessage = getErrorMessage(err);

    switch (errorMessage) {
      case textConstants.SESSION_EXPIRED:
        swal({ text: errorMessage });
        logout();
        break;
      default:
        swal({ text: errorMessage });
        break;
    }
  };

  const previewBtnHandler = () =>
    props.history.replace(
      routeConstants.PREVIEWRESUME.replace(":email", email)
    );

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const result = await resumeService.fetchResume(email);
        const resume = JSON.parse(result.data);

        setStatusCode(result.status);
        setLoading(false);
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

  const store = {
    preview: { get: preview },
    data: { get: data },
    hideSideNav: { get: true },
    updateCV: updateCvHandler,
  };

  return (
    !loading &&
    statusCode && (
      <div className="page-container">
        <FormContext.Provider value={store}>
          <Header
            name={data.name ? data.name.value : ""}
            showPreviewBtn={true}
            downloadBtnHandler={null}
            previewBtnHandler={previewBtnHandler}
          />
          <Dashboard />
        </FormContext.Provider>
      </div>
    )
  );
};

export default EditResume;
