import React, { useState } from 'react';
import Modal from 'react-modal';
import Skill from '../components/skill';
import HandleModal from '../components/handleModal';
import PersonalInformation from '../components/personalInformation';

Modal.setAppElement('#__next');
const Forms = () => {
  const [data, setData] = useState({});

  return (
    <>
      <HandleModal
        buttonName="Personal Information"
        render={(isOpen, setIsOpen) => (
          <>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <PersonalInformation setIsOpen={setIsOpen} data={data} setData={setData} />
            </Modal>
          </>
        )}
      />

      <HandleModal
        buttonName="Skills"
        render={(isOpen, setIsOpen) => (
          <>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <Skill setIsOpen={setIsOpen} data={data} setData={setData} />
            </Modal>
          </>
        )}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Forms;
