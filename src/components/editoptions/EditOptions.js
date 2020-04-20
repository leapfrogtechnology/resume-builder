import React from 'react';
import {View, EditGray, Trash, ViewHidden} from '../../assets/image';

const EditOptions = ({isHidden}) => {
    return(
        <div className="edit-options">
            <span className="edit-options__item">
                <img src={isHidden ? ViewHidden : View} alt="View"/>
            </span>
            <span className="edit-options__item">
                <img src={EditGray} alt="Edit"/>
            </span>
             <span className="edit-options__item">
                <img src={Trash} alt="Trash"/>
            </span>
        </div>
    )
}

export default EditOptions;
