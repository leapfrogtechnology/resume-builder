import React from 'react';
import CardHeader from '../cardheader/CardHeader';
import EditOptions from '../editoptions/EditOptions';
import CardFooter from '../cardfooter/CardFooter';
import {Add} from '../../assets/image';

const ProjectsUndertaken = () => {
    return (
        <div className="projects-undertaken-block">
            <div className="card">
                <CardHeader title="Projects Undertaken" />
                <div className="projects-undertaken">
                    <div className="projects-undertaken__row">
                        <div className="projects-undertaken__row-header">
                            <div className="sub-title">AI Thoughtbot</div>
                            <EditOptions />
                        </div>
                        <div className="projects-undertaken__period">
                            <span className="start-date">September 2016</span>  - <span className="end-date">August 2019</span>(3 years and 3 months)
                        </div>
                        <p className="projects-undertaken__description">
                            I built an aI thoughtbot that gave relationship advice to couples in distress.
                        </p>
                    </div>
                </div>
                <CardFooter icon={Add} label="Add another project"/>
            </div>
        </div>
    )
}

export default ProjectsUndertaken;
