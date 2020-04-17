import React from 'react';
import {View} from '../../assets/image';

const Contact = ({ label, value }) => {
    return (
        <div className="contact-content">
            <div className="contact-content__l">
                <div className="key">{label}</div>
                <div className="value text-link">{value}</div>
            </div>
            <div className="contact-content__r">
                <img src={View} alt="Edit" />
            </div>
        </div>
    )
}

export default Contact;
