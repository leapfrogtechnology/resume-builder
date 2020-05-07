import React, { useContext, useState } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '../FormContext';
import CertificateItem from './CertificateItem';
import * as storage from '~/storage/LocalStorage';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardFooter from '~/components/cardfooter/CardFooter';
import CardHeader from '~/components/cardheader/CardHeader';
import AddCertificate from '../form/certificate/AddCertificate';

const Certificate = () => {
  const [addCertificate, setAdd] = useState(false);
  const context = useContext(FormContext);

  const certificates = context.data.get.certificates;
  const preview = context.preview.get;

  const addBtnHandler = () => {
    setAdd(!addCertificate);
  };

  const addBtnCloseHandler = () => {
    setAdd(!addCertificate);
  };

  /**
   * Update the hidden state of skill.
   *
   * @param {React.MouseEvent} e [ on click event ].
   * @param {string} key [ name of a particular certificate].
   */
  const updateHiddenStateCertificates = (e, key) => {
    e.preventDefault();

    const data = context.data.get;

    data['certificates'].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data['certificates'][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteCertificate = (e, name, link) => {
    e.preventDefault();

    const data = context.data.get;

    const filteredCertificates = data['certificates'].filter(certificate => {
      return certificate.name !== name && certificate.link !== link;
    });

    data['certificates'] = filteredCertificates;

    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(localStorage, context.data.get);
  };

  if ((!certificates || certificates.length < 1) && !preview) {
    return <></>;
  }

  if (!certificates || certificates.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
          <EmptyCard emptyMessage="You do not have any certificates yet."></EmptyCard>
          <CardFooter
            icon={Add}
            hide={preview}
            label="Add another certificate"
            showModal={addCertificate}
            onAdd={addBtnHandler}
            component={AddCertificate}
            onClose={addBtnCloseHandler}
            modifier="empty"
          />
        </div>
      </div>
    );
  }

  const certificatesList = certificates.map(({ name, link, date, description }) => (
    <CertificateItem
      key={name}
      title={name}
      link={link}
      year={date}
      description={description}
      preview={preview}
      onHiddenIconClicked={updateHiddenStateCertificates}
      onDelete={deleteCertificate}
    />
  ));

  return (
    <div className="content-block">
      <div className="card">
        <CardHeader title="Certificates" />
        <div className="certificate">{certificatesList}</div>
        <CardFooter
          icon={Add}
          hide={preview}
          label="Add another certificate"
          showModal={addCertificate}
          onAdd={addBtnHandler}
          component={AddCertificate}
          onClose={addBtnCloseHandler}
        />
      </div>
    </div>
  );
};

export default Certificate;
