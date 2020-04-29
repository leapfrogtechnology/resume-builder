import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { UpRightArrow } from '~/assets/image';
import EditOptions from '~/components/editoptions/EditOptions';

const CertificateItem = ({ title, link, year, description, preview, onHiddenIconClicked, onEdit }) => {
  const [hidden, setHidden] = useState(false);

  if (hidden && preview) {
    return <></>;
  }

  const onHiddenBtnClicked = e => {
    e.preventDefault();
    setHidden(!hidden);
    onHiddenIconClicked(e, title);
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
          <EditOptions onHiddenIconClicked={onHiddenBtnClicked} isHidden={hidden} onEditButtonClicked={onEdit} />
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
  onEdit: PropTypes.func,
};

export default CertificateItem;
