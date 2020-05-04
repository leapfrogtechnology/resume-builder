import React, { useContext, useState } from 'react';

import SidenavBottom from './SidenavBottom';
import { FormContext } from '../FormContext';
import * as storage from '~/storage/LocalStorage';
import Contact from '~/components/contact/Contact';
import { COUNTRY_CODE } from '~/constant/contact.js';
import DeletePopup from '../form/delete/DeletePopup';
import { toBase64 } from '~/utilities/file/toBase64.js';
import { Edit, ProfileImage, Trash } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import AddContact from '~/components/form/contact/AddContact';
import * as profileImageUtils from '~/utilities/objects/ProfileImage.js';

const Sidenav = () => {
  const [showModal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [profileImgUploadError, setProfileImageUpload] = useState(false);

  const context = useContext(FormContext);
  const preview = context.preview.get;
  const email = context.data.get.email;
  const phone = context.data.get.phone;
  const github = context.data.get.github;
  const stackOverflow = context.data.get.stackOverflow;
  const linkedIn = context.data.get.linkedIn;
  const profileImg = context.data.get.profileImage;

  let profileImgUploadErrorMsg = 'Incorrect format. Upload image in ( png / jpg / jpeg ) format';

  const deleteBtnClickedHandler = () => {
    setDeleteModal(!showDeleteModal);
  };

  const confirmDeleteBtnHandler = () => {
    context.deleteCV();
    setDeleteModal(!showDeleteModal);
  };

  const cancelDeleteBtnHandler = () => {
    setDeleteModal(!showDeleteModal);
  };

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModal);
    setIsEdit(!isEdit);
  };

  const closeBtnHandler = () => {
    setModal(!showModal);
    setIsEdit(!isEdit);
  };

  /**
   * Update the hidden state of contact detail.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ label of a particular contact type].
   */
  const updateHiddenStateContact = (e, key) => {
    e.preventDefault();

    const data = context.data.get;
    const previousState = data[key].hidden;
    const newState = !previousState;

    data[key].hidden = newState;
    context.data.set(data);
  };

  const openMailTo = (e, value) => {
    e.preventDefault();
    window.open('mailto:' + value);
  };

  const openCallTo = (e, value) => {
    e.preventDefault();
    window.open('tel:' + value);
  };

  const openLink = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank').focus();
  };

  const createFileUploader = e => {
    e.preventDefault();
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
    e.preventDefault();

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
      storage.saveResume(localStorage, context.data.get);
    }
  };

  const handleImageDelete = e => {
    e.preventDefault();

    if (context.data.get.profileImage) {
      context.data.get.profileImage.isDeleted = true;
      context.data.get.profileImage.deletedOn = new Date();
      context.data.set(prevState => ({ ...prevState, ...context.data.get }));
    }

    storage.saveResume(localStorage, context.data.get);
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
                  <span className="text-link text-link--small" onClick={e => createFileUploader(e)}>
                    Upload new Photo
                  </span>
                </div>
                <div className="sidenav__upload-block-r">
                  <div className="icon" onClick={handleImageDelete}>
                    <img src={Trash} alt="Trash" />
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
              onEdit={editBtnHandler}
              onClose={closeBtnHandler}
              showModal={showModal}
              isEdit={isEdit}
            />
            {email && (
              <Contact
                id="email"
                label="Email Address"
                value={email.value}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openMailTo}
              />
            )}
            {phone && (
              <Contact
                id="phone"
                label="Phone Number"
                value={phone.value ? COUNTRY_CODE + '-' + phone.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openCallTo}
              />
            )}
            {github && (
              <Contact
                id="github"
                label="GitHub"
                value={github.value ? github.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openLink}
              />
            )}
            {stackOverflow && (
              <Contact
                id="stackOverflow"
                label="StackOverFlow"
                value={stackOverflow.value}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openLink}
              />
            )}
            {linkedIn && (
              <Contact
                id="linkedIn"
                label="LinkedIn"
                value={linkedIn.value ? linkedIn.value : ''}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openLink}
              />
            )}
          </div>
        </div>
      </div>

      {!preview && <SidenavBottom resumeJson={context.data.get} deleteIconClicked={deleteBtnClickedHandler} />}

      {showDeleteModal && (
        <DeletePopup onConfirm={confirmDeleteBtnHandler} onCancel={cancelDeleteBtnHandler}></DeletePopup>
      )}
    </div>
  );
};

export default Sidenav;
