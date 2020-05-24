import React from 'react';

import CertificateItem from '~/components/certificate/CertificateItem';
import AddCertificate from '~/components/form/certificate/AddCertificate';
import Section from '~/components/Section';

const Certificate = () => {
  return (
    <Section dataKey="certificates" component={AddCertificate}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, link, date, description }) => (
          <CertificateItem
            id={id}
            key={id}
            title={name}
            link={link}
            year={date}
            description={description}
            preview={preview}
            onHiddenIconClicked={updateHiddenState}
            onDelete={deleteItem}
          />
        ))
      }
    </Section>
  );
};

export default Certificate;
