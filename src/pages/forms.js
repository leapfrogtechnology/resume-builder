import React from 'react';
import Modal from 'react-modal';
import Skill from '../components/skill';
import HandleModal from '../components/handleModal';
import PersonalInformation from '../components/personalInformation';

Modal.setAppElement('#__next');
const Forms = () => {
  return (
    <>
      <HandleModal
        buttonName="Personal Information"
        render={(isOpen, setIsOpen) => (
          <>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <PersonalInformation setIsOpen={setIsOpen} />
            </Modal>
          </>
        )}
      />

      <HandleModal
        buttonName="Skills"
        render={(isOpen, setIsOpen) => (
          <>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <Skill setIsOpen={setIsOpen} />
            </Modal>
          </>
        )}
      />
    </>
  );
};

export default Forms;
