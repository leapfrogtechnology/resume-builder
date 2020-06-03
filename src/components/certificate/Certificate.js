import React from 'react';

import Section from '~/components/Section';
import CertificateItem from '~/components/certificate/CertificateItem';
import AddCertificate from '~/components/form/certificate/AddCertificate';

const Certificate = () => {
  return (
    <Section dataKey="certificates" component={AddCertificate}>
      {({ data, preview, deleteItem, updateHiddenState }) =>
        data.map(({ id, name, link, date, description, hidden }) => (
          <CertificateItem
            id={id}
            key={id}
            title={name}
            link={link}
            year={date}
            description={description}
            hidden={hidden}
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
