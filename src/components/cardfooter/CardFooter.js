import React from 'react';

const CardFooter = ({icon, label}) => {
    return(
        <div className="card__footer">
            <span className="card__footer-icon">
                <img src={icon} alt="Add"/>
            </span>
            <span className="card__footer-label text-link">
                {label}
            </span>
        </div>
    )
}

export default CardFooter;