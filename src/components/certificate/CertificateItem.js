import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '../modal/OpenModal';
import { UpRightArrow } from '~/assets/image';
import EditOptions from '~/components/editoptions/EditOptions';
import AddCertificate from '../form/certificate/AddCertificate';

const CertificateItem = ({ title, link, year, description, preview, onHiddenIconClicked, onDelete }) => {
  const [hidden, setHidden] = useState(false);
  const [editCertificate, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = () => {
    setHidden(!hidden);
    onHiddenIconClicked(title);
  };

  const deleteIconClickedHandler = () => {
    onDelete(title, link);
  };

  const toggleEditCertificate = () => setEdit(!editCertificate);

  return (
    <div className="certificate__row">
      <div className="certificate__row-header">
        <div
          className={!hidden ? 'sub-title text-link' : 'sub-title text-link text-link-hidden'}
          onClick={e => window.open(link)}
        >
          {title}
          <span className="arrow-icon">
            <img src={UpRightArrow} alt="Arrow" />
          </span>
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            onHiddenIconClicked={onHiddenBtnClicked}
            isHidden={hidden}
            onEditButtonClicked={toggleEditCertificate}
            onDeleteButtonClicked={deleteIconClickedHandler}
          />
        )}
        {editCertificate && (
          <OpenModal
            component={AddCertificate}
            onClose={toggleEditCertificate}
            showModal={editCertificate}
            isEdit={editCertificate}
            data={editCertificate ? { name: title, link: link, date: year, description: description } : ''}
          ></OpenModal>
        )}
      </div>
      <div className="year year--dark">{moment(year).format('MMMM YYYY')}</div>
      <p className="description">{description}</p>
    </div>
  );
};

CertificateItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CertificateItem;
