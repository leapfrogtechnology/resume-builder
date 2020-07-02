import React, { useContext, useState } from "react";

import { DELETE } from "components/icons/icon";
import Contact from "components/contact/Contact";
import { FormContext } from "components/FormContext";
import CardHeader from "components/cardheader/CardHeader";
import AddContact from "components/form/contact/AddContact";
import DeletePopup from "components/form/delete/DeletePopup";
import SidenavBottom from "components/sidenav/SidenavBottom";

import { Edit, ProfileImage } from "assets/image";
import { toBase64 } from "utilities/file/toBase64";
import * as profileImageUtils from "utilities/objects/ProfileImage";

import { COUNTRY_CODE, baseMailToUrl, baseTelUrl } from "constant/contact";

const Sidenav = () => {
  const [showModal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [profileImgUploadError, setProfileImageUpload] = useState(false);

  const { preview, data, hideSideNav, updateCV, deleteCV } = useContext(
    FormContext
  );
  const previewMode = preview.get;
  const hideSideNavMode = hideSideNav.get;
  const username = data.get.name;
  const email = data.get.email;
  const phone = data.get.phone;
  const github = data.get.github;
  const stackOverflow = data.get.stackOverflow;
  const linkedIn = data.get.linkedIn;
  const profileImg = data.get.profileImage;

  const confirmDeleteBtnHandler = () => {
    deleteCV();
    toggleDelete();
  };

  const toggleDelete = () => setDeleteModal(!showDeleteModal);

  const toggleEdit = () => {
    setModal(!showModal);
    setIsEdit(!isEdit);
  };

  /**
   * Update the hidden state of contact detail.
   *
   * @param {string} key [ label of a particular contact type].
   */
  const updateHiddenStateContact = (key) => {
    const prevData = { ...data.get };
    const currentState = prevData[key].hidden;
    const newState = !currentState;

    prevData[key].hidden = newState;

    updateCV(prevData);
  };

  const createFileUploader = () => {
    setProfileImageUpload(false);

    const fileSelector = document.createElement("input");

    fileSelector.setAttribute("type", "file");
    fileSelector.click();
    fileSelector.addEventListener(
      "change",
      (e) => {
        handleImageUpload(e);
      },
      false
    );
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (
      !(
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg"
      )
    ) {
      setProfileImageUpload(!profileImgUploadError);
    } else {
      const result = await toBase64(file);
      const prevData = { ...data.get };
      const profileImageObj = profileImageUtils.getProfileImageObject(result);

      if (!profileImg) {
        prevData["profileImage"] = profileImageObj;
      } else {
        prevData.profileImage.value = result;
      }

      prevData.profileImage.isDeleted = false;

      updateCV(prevData);
    }
  };

  const handleImageDelete = () => {
    const prevData = { ...data.get };

    if (prevData.profileImage) {
      prevData.profileImage.isDeleted = true;
      prevData.profileImage.deletedOn = new Date();

      updateCV(prevData);
    }
  };

  return (
    <div className="sidenav">
      <div className="sidenav-top">
        <div className="card">
          {!previewMode && (
            <>
              <CardHeader title="Display Picture" />
              <div className="sidenav__upload-block">
                <div className="sidenav__upload-block-l">
                  <div className="profile-image-wrapper">
                    <img
                      src={
                        profileImg && !profileImg.isDeleted
                          ? profileImg.value
                          : ProfileImage
                      }
                      alt="Image"
                    />
                  </div>
                  <span
                    className="text-link text-link--small"
                    onClick={(_e) => createFileUploader()}
                  >
                    Upload new Photo
                  </span>
                </div>
                <div className="sidenav__upload-block-r">
                  <div className="icon" onClick={handleImageDelete}>
                    {DELETE("#D2D2D2")}
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="sidenav__contact-block">
            <CardHeader
              title="Contact Information"
              icon={Edit}
              hideIcon={previewMode}
              component={AddContact}
              onEdit={toggleEdit}
              onClose={toggleEdit}
              showModal={showModal}
              isEdit={isEdit}
            />
            {email && (
              <Contact
                id="email"
                label="Email Address"
                baseUrl={baseMailToUrl}
                value={email.value}
                hidden={email.hidden}
                preview={previewMode}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {phone && (
              <Contact
                id="phone"
                label="Phone Number"
                baseUrl={baseTelUrl}
                value={phone.value ? COUNTRY_CODE + "-" + phone.value : ""}
                hidden={phone.hidden}
                preview={previewMode}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {github && (
              <Contact
                id="github"
                label="GitHub"
                value={github.value ? github.value : ""}
                hidden={github.hidden}
                preview={previewMode}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {stackOverflow && (
              <Contact
                id="stackOverflow"
                label="StackOverFlow"
                value={stackOverflow.value}
                hidden={stackOverflow.hidden}
                preview={previewMode}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {linkedIn && (
              <Contact
                id="linkedIn"
                label="LinkedIn"
                value={linkedIn.value ? linkedIn.value : ""}
                hidden={linkedIn.hidden}
                preview={previewMode}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
          </div>
        </div>
      </div>

      {!previewMode && !hideSideNavMode && (
        <SidenavBottom
          resumeJson={data.get}
          username={username ? username.value : ""}
          deleteIconClicked={toggleDelete}
        />
      )}

      {showDeleteModal && (
        <DeletePopup
          onConfirm={confirmDeleteBtnHandler}
          onCancel={toggleDelete}
        ></DeletePopup>
      )}
    </div>
  );
};

export default Sidenav;
