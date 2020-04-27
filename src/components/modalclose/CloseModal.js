import React from 'react'
import { Close } from '~/assets/image';

const CloseModal = ({onClose}) => {
  return (
    <div className="close-option" onClick={(e)=>{onClose(e)}}>
      <img src={Close} alt="close" />
    </div>
  );
}

export default CloseModal;
