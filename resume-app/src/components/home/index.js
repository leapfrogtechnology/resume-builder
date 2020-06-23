import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Header from "components/header/Header";
import { FormContext } from "components/FormContext";
import Dashboard from "components/dashboard/Dashboard";

import textConstants from "constant/textConstants";
import routeConstants from "constant/routeConstants";

import { getErrorMessage } from "utilities/getErrorMessage";

import * as storageUtil from "storage/LocalStorage";
import * as resumeService from "service/resumeBuilder";

const Home = () => {
  const history = useHistory();
  const [data, updateData] = useState({});
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(false);

  const togglePreview = () => setPreview(!preview);

  const deleteCVHandler = async () => {
    try {
      const result = await resumeService.deleteResume();

      updateData(result);
    } catch (err) {
      handleErrorResponse(err);
    }
  };

  const updateCvHandler = async (updatedData) => {
    try {
      await resumeService.saveResume(updatedData);

      updateData((prevState) => ({ ...prevState, ...updatedData }));
    } catch (err) {
      handleErrorResponse(err);
    }
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

  const logout = () => {
    storageUtil.logout();

    history.push(routeConstants.LOGIN);
  };

  const store = {
    preview: { get: preview, set: setPreview },
    data: { get: data, set: updateData },
    hideSideNav: { get: false },
    deleteCV: deleteCVHandler,
    updateCV: updateCvHandler,
  };

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const result = await resumeService.fetchUserProfile();
        const resume = JSON.parse(result.data);

        updateData(resume ? resume : {});
        setLoading(false);
      } catch (err) {
        handleErrorResponse(err);
        setLoading(false);
      }
    };
    getUserProfile();
  }, []);

  return (
    !loading && (
      <div className="page-container">
        <FormContext.Provider value={store}>
          <Header
            name={data.name}
            showPreviewBtn={true}
            downloadBtnHandler={null}
            previewBtnHandler={togglePreview}
          />
          <Dashboard />
        </FormContext.Provider>
      </div>
    )
  );
};

export default Home;
