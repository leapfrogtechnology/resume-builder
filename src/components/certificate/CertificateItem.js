import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OpenModal from '~/components/modal/OpenModal';
import { format } from '~/utilities/date/FormatDate';
import { UP_RIGHT_ARROW } from '~/components/icons/icon';
import EditOptions from '~/components/editoptions/EditOptions';
import AddCertificate from '~/components/form/certificate/AddCertificate';

const CertificateItem = ({ id, title, link, year, description, hidden, preview, onHiddenIconClicked, onDelete }) => {
  const [isHidden, setIsHidden] = useState(hidden);
  const [editCertificate, setEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = () => {
    setIsHidden(!isHidden);
    onHiddenIconClicked(id);
  };

  const deleteIconClickedHandler = () => {
    onDelete(id);
  };

  const toggleEditCertificate = () => setEdit(!editCertificate);

  return (
    <div className="certificate__row">
      <div className="certificate__row-header">
        <div
          className={!isHidden ? 'sub-title text-link' : 'sub-title text-link text-link-hidden'}
          onClick={_e => window.open(link)}
        >
          {title}
          <span className="arrow-icon">{UP_RIGHT_ARROW}</span>
          {isHidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            onHiddenIconClicked={onHiddenBtnClicked}
            isHidden={isHidden}
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
      <div className="year year--dark">{format(year)}</div>
      <p className="description">{description}</p>
    </div>
  );
};

CertificateItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  hidden: PropTypes.bool,
  preview: PropTypes.bool,
  onHiddenIconClicked: PropTypes.func,
  onDelete: PropTypes.func,
};

export default CertificateItem;
