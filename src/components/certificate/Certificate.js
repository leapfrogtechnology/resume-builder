import React from 'react';

import CertificateItem from '~/components/certificate/CertificateItem';
import AddCertificate from '~/components/form/certificate/AddCertificate';
import Section from '~/components/Section';

const Certificate = () => {
  return (
    <Section dataKey="certificates" component={AddCertificate}>
      {({ data, preview, onDelete, updateHiddenState }) =>
        data.map(({ name, link, date, description }) => (
          <CertificateItem
            key={name}
            title={name}
            link={link}
            year={date}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={onDelete}
          />
        ))
      }
    </Section>
  );
};

export default Certificate;
