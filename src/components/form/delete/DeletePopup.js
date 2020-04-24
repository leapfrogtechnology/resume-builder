import React from 'react';
import { Warning } from '~/assets/image';
import Button from '~/components/button/Button';
import CardHeader from '~/components/cardheader/CardHeader';

const DeletePopup = ({item, entry_title}) => {
  return (
    <div className="modal">
      <div className="delete-popup">
        <div className="card">
          <div className="delete-popup__content">
            <div className="delete-popup__icon">
              <img src={Warning} alt="Warning" />
            </div>
            <div className="delete-popup__body">
              <CardHeader title="Are you sure?" />
              <p className="delete-popup__message">
                {`You are about to delete a ${item} for ${entry_title}. Do you want to proceed?`}
              </p>
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Yes, Delete" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" isCancel={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePopup;
