import React, { useContext, useState } from 'react';

import SidenavBottom from './SidenavBottom';
import { FormContext } from '../FormContext';
import Contact from '~/components/contact/Contact';
import { toBase64 } from '~/utilities/file/toBase64.js';
import { Edit, ProfileImage, Trash } from '~/assets/image';
import CardHeader from '~/components/cardheader/CardHeader';
import AddContact from '~/components/form/contact/AddContact';
import * as profileImageUtils from '~/utilities/objects/ProfileImage.js';

const Sidenav = () => {
  const [showModal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModal(!showModal);
    setIsEdit(!isEdit);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModal(!showModal);
    setIsEdit(!isEdit);
  };

  const context = useContext(FormContext);
  const preview = context.preview.get;
  const email = context.data.get.email;
  const phone = context.data.get.phone;
  const github = context.data.get.github;
  const stackOverflow = context.data.get.stackOverflow;
  const linkedIn = context.data.get.linkedIn;
  const profileImg = context.data.get.profileImage;

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
    window.open('mailto:' + value);
  };

  const openCallTo = (e, value) => {
    window.open('tel:' + value);
  };

  const openLink = (e, url) => {
    window.open(url, '_blank').focus();
  };

  const createFileUploader = e => {
    e.preventDefault();
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
    if (!(file.type === ('image/png' || 'image/jpg' || 'image/jpeg'))) {
      console.log('wrongs');
    } else {
      const result = await toBase64(file);
      const prevData = context.data.get;
      const profileImageObj = profileImageUtils.getProfileImageObject(result);

      if (!profileImg) {
        prevData['profileImage'] = profileImageObj;
      } else {
        prevData.profileImage.value = result;
      }
    }
  };

  return (
    <div className="sidenav">
      <div className="sidenav-top">
        <div className="card">
          <CardHeader title="Display Picture" />
          <div className="sidenav__upload-block">
            <div className="sidenav__upload-block-l">
              <div className="profile-image-wrapper">
                <img src={profileImg ? profileImg.value : ProfileImage} alt="Image" />
              </div>
              {!preview && (
                <span className="text-link text-link--small" onClick={e => createFileUploader(e)}>
                  Upload new version
                </span>
              )}
            </div>
            {!preview && (
              <div className="sidenav__upload-block-r">
                <div className="icon">
                  <img src={Trash} alt="Trash" />
                </div>
              </div>
            )}
          </div>
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
                value={phone.value}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openCallTo}
              />
            )}
            {github && (
              <Contact
                id="github"
                label="GitHub"
                value={github.value}
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
                value={linkedIn.value}
                preview={preview}
                onHiddenIconClicked={updateHiddenStateContact}
                onLinkClicked={openLink}
              />
            )}
          </div>
        </div>
      </div>

      {!preview && <SidenavBottom />}
    </div>
  );
};

export default Sidenav;
