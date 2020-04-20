import React from 'react';
import EditOptions from '../editoptions/EditOptions';

const WorkExperienceShown = () => {
    return (
        <div className="work-experience">
            <div className="work-experience__row">
                <div className="work-experience__row-header">
                    <div className="sub-title">Hewlett Packard Enterprise</div>
                    <EditOptions />
                </div>
                <div className="work-experience__position">
                    Associate Engineering Manager
                </div>
                <div className="work-experience__exp-year">
                    <span className="start-date">September 2016</span>  - <span className="end-date">August 2019</span>(3 years and 3 months)
                </div>
            </div>
            <div className="work-experience__row">
                Roles and Responsibilities
                <ul className="work-experience__row-item">
                    <li>Involved in developing and implementation of the web application using R framework.</li>
                    <li>Contributed in database design and development of Project “Teamed-Up”</li>
                    <li>Designed applications using oriented concepts.</li>
                </ul>
            </div>
            <div className="work-experience__row">
                Achievements
                <ul className="work-experience__row-item">
                    <li>Changed the first obstacle to become a solution</li>
                    <li>Was able to convert the thousand line of codes into fifteen lines.</li>
                </ul>
            </div>
            <div className="work-experience__row">
                Referee <span className="referee-name">Mr. Andre Pistaolava</span> (<span className="referee-email text-link">andre@gmail.com</span>)
            </div>
        </div>
    )
}

export default WorkExperienceShown;
