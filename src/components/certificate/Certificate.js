import React from 'react';
import { Add } from '~/assets/image';
import CertificateItem from './CertificateItem';
import CardFooter from '~/components/cardfooter/CardFooter';
import CardHeader from '~/components/cardheader/CardHeader';

const Certificate = ({ certificates }) => {
  const certificatesList = certificates.map(({ title, date, description }) => (
    <CertificateItem title={title} year={date} description={description} />
  ));

  return (
    <div className="certificate-block">
      <div className="card">
        <CardHeader title="Certificates" />
        <div className="certificate">{certificatesList}</div>
        <CardFooter icon={Add} label="Add another certificate" />
      </div>
    </div>
  );
};

export default Certificate;
