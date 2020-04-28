import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { UpRightArrow } from '~/assets/image';
import EditOptions from '~/components/editoptions/EditOptions';

const CertificateItem = ({ title, link, year, description, preview, onHiddenIconClicked }) => {
  const [hidden, setHidden] = useState(false);
  const [isDeleteClicked, setIsDelete] = useState(false);
  const [isEditClicked, setIsEdit] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
  };

  const onDeleteButtonClicked = e => {
    e.preventDefault();
    setIsDelete(!isDeleteClicked);
  };

  const onConfirm = e => {
    e.preventDefault();
    console.log('Deleted');
    setIsDelete(!isDeleteClicked);
  };

  const onCancel = e => {
    e.preventDefault();
    console.log('Cancelled');
    setIsDelete(!isDeleteClicked);
  };

  const onEditButtonClicked = e => {
    e.preventDefault();
    setIsEdit(!isEditClicked);
  };

  return (
    <div className="certificate__row">
      <div className="certificate__row-header">
        <div className="sub-title text-link">
          {title}
          <span className="arrow-icon">
            <a href={link}>
              <img src={UpRightArrow} alt="Arrow" />
            </a>
          </span>
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        {!preview && (
          <EditOptions
            onHiddenIconClicked={onHiddenBtnClicked}
            isHidden={hidden}
            onEditButtonClicked={onEditButtonClicked}
            onDeleteButtonClicked={onDeleteButtonClicked}
            isEditClicked={isEditClicked}
            isDeleteClicked={isDeleteClicked}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        )}
      </div>
      <div className="year year--dark">{year}</div>
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
};

export default CertificateItem;
