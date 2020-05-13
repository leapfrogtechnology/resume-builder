import React from 'react';
import PropTypes from 'prop-types';

import Button from '~/components/button/Button';
import { WARNING } from '~/components/icons/icon';

const DeletePopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-container">
      <div className="delete-popup">
        <div className="card">
          <div className="delete-popup__content">
            <div className="delete-popup__icon">{WARNING}</div>
            <div className="delete-popup__body">
              <div className="title">Are you sure?</div>
              <p className="delete-popup__message">{`You are about to delete your resume. Do you want to proceed?`}</p>
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Yes, Delete" onclick={onConfirm} modifier="danger" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" modifier="secondary" onclick={onCancel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DeletePopup.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default DeletePopup;
