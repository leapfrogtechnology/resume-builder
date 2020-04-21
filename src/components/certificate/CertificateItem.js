import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { UpRightArrow } from '~/assets/image';
import EditOptions from '~/components/editoptions/EditOptions';

const CertificateItem = ({ title, year, description }) => {
  const [hidden, setHidden] = useState(false);

  const onHiddenBtnClicked = e => {
    setHidden(!hidden);
  };

  return (
    <div className="certificate__row">
      <div className="certificate__row-header">
        <div className="sub-title text-link">
          {title}
          <span className="arrow-icon">
            <img src={UpRightArrow} alt="Arrow" />
          </span>
          {hidden && <span className="hidden-tag">Hidden</span>}
        </div>
        <EditOptions onHiddenIconClicked={onHiddenBtnClicked} isHidden={hidden} />
      </div>
      <div className="certificate__year">{year}</div>
      <p className="certificate__description">{description}</p>
    </div>
  );
};

CertificateItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string,
};

export default CertificateItem;
