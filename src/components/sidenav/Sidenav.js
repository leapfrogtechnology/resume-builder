import React, { useContext, useState } from 'react';

import { DELETE } from '~/components/icons/icon';
import * as storage from '~/storage/LocalStorage';
import Contact from '~/components/contact/Contact';
import { Edit, ProfileImage } from '~/assets/image';
import DeletePopup from '../form/delete/DeletePopup';
import { FormContext } from '~/components/FormContext';
import { toBase64 } from '~/utilities/file/toBase64.js';
import CardHeader from '~/components/cardheader/CardHeader';
import AddContact from '~/components/form/contact/AddContact';
import SidenavBottom from '~/components/sidenav/SidenavBottom';
import * as profileImageUtils from '~/utilities/objects/ProfileImage.js';
import { COUNTRY_CODE, baseMailToUrl, baseTelUrl } from '~/constant/contact.js';

const Sidenav = () => {
  const [showModal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [profileImgUploadError, setProfileImageUpload] = useState(false);
  const [downloadPdf, setDownloadPdf] = useState(false);

  const context = useContext(FormContext);
  const preview = context.preview.get;
  const email = context.data.get.email;
  const phone = context.data.get.phone;
  const github = context.data.get.github;
  const stackOverflow = context.data.get.stackOverflow;
  const linkedIn = context.data.get.linkedIn;
  const profileImg = context.data.get.profileImage;

  const donwloadPdfBtnHandler = () => {
    setDownloadPdf(!downloadPdf);
  };

  const confirmDeleteBtnHandler = () => {
    context.deleteCV();
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
  const updateHiddenStateContact = key => {
    const data = context.data.get;
    const previousState = data[key].hidden;
    const newState = !previousState;

    data[key].hidden = newState;
    context.data.set(data);
  };

  const createFileUploader = () => {
    setProfileImageUpload(false);

    const fileSelector = document.createElement('input');

    fileSelector.setAttribute('type', 'file');
    fileSelector.click();
    fileSelector.addEventListener(
      'change',
      e => {
        handleImageUpload(e);
      },
      false
    );
  };

  const handleImageUpload = async e => {
    const file = e.target.files[0];

    if (!(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
      setProfileImageUpload(!profileImgUploadError);
    } else {
      const result = await toBase64(file);
      const prevData = context.data.get;
      const profileImageObj = profileImageUtils.getProfileImageObject(result);

      if (!profileImg) {
        prevData['profileImage'] = profileImageObj;
      } else {
        prevData.profileImage.value = result;
      }

      prevData.profileImage.isDeleted = false;

      context.data.set(prevState => ({ ...prevState, ...prevData }));
      storage.saveResume(context.data.get);
    }
  };

  const handleImageDelete = () => {
    if (context.data.get.profileImage) {
      context.data.get.profileImage.isDeleted = true;
      context.data.get.profileImage.deletedOn = new Date();
      context.data.set(prevState => ({ ...prevState, ...context.data.get }));
    }

    storage.saveResume(context.data.get);
  };

  return (
    <div className="sidenav">
      <div className="sidenav-top">
        <div className="card">
          {!preview && (
            <>
              <CardHeader title="Display Picture" />
              <div className="sidenav__upload-block">
                <div className="sidenav__upload-block-l">
                  <div className="profile-image-wrapper">
                    <img src={profileImg && !profileImg.isDeleted ? profileImg.value : ProfileImage} alt="Image" />
                  </div>
                  <span className="text-link text-link--small" onClick={_e => createFileUploader()}>
                    Upload new Photo
                  </span>
                </div>
                <div className="sidenav__upload-block-r">
                  <div className="icon" onClick={handleImageDelete}>
                    {DELETE('#D2D2D2')}
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="sidenav__contact-block">
            <CardHeader
              title="Contact Information"
              icon={Edit}
              hideIcon={preview}
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
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {phone && (
              <Contact
                id="phone"
                label="Phone Number"
                baseUrl={baseTelUrl}
                value={phone.value ? COUNTRY_CODE + '-' + phone.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {github && (
              <Contact
                id="github"
                label="GitHub"
                value={github.value ? github.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {stackOverflow && (
              <Contact
                id="stackOverflow"
                label="StackOverFlow"
                value={stackOverflow.value}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
            {linkedIn && (
              <Contact
                id="linkedIn"
                label="LinkedIn"
                value={linkedIn.value ? linkedIn.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
              />
            )}
          </div>
        </div>
      </div>

      {!preview && (
        <SidenavBottom
          resumeJson={context.data.get}
          downloadPdf={downloadPdf}
          downloadPdfIconClicked={donwloadPdfBtnHandler}
          deleteIconClicked={toggleDelete}
        />
      )}

      {showDeleteModal && <DeletePopup onConfirm={confirmDeleteBtnHandler} onCancel={toggleDelete}></DeletePopup>}
    </div>
  );
};

export default Sidenav;
