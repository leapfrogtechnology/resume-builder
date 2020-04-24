import React, { useState } from 'react';
import { Add, UpRightArrow } from '~/assets/image';
import CardFooter from '~/components/cardfooter/CardFooter';
import CardHeader from '~/components/cardheader/CardHeader';
import EditOptions from '~/components/editoptions/EditOptions';
import AddCertificate from '~/components/form/certificate/AddCertificate';

const Certificate = () => {
  const [showModel, setModel] = useState(false);

  const editBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  const closeBtnHandler = e => {
    e.preventDefault();
    setModel(!showModel);
  };

  return (
    <div className="certificate-block">
      <div className="card">
        <CardHeader title="Certificates" />
        <div className="certificate">
          <div className="certificate__row">
            <div className="certificate__row-header">
              <div className="sub-title text-link">
                Coursera Advanced React
                <span className="arrow-icon">
                  <img src={UpRightArrow} alt="Arrow" />
                </span>
              </div>
              <EditOptions
                component={AddCertificate}
                onEdit={editBtnHandler}
                onClose={closeBtnHandler}
                showModal={showModel}
              />
            </div>
            <div className="certificate__year">December 2012</div>
            <p className="certificate__description">Advanced react course completed with React under the hood</p>
          </div>
        </div>
        <CardFooter
          icon={Add}
          label="Add another certificate"
          showModal={showModel}
          onAdd={editBtnHandler}
          component={AddCertificate}
          onClose={closeBtnHandler}
        />
      </div>
    </div>
  );
};

export default Certificate;
