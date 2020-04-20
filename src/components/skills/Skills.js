import React from 'react';
import CardHeader from '../cardheader/CardHeader';
import EditOptions from '../editoptions/EditOptions';
import CardFooter from '../cardfooter/CardFooter';
import {Add} from '../../assets/image';

const Skills = () => {
    return (
        <div className="skills-block">
            <div className="card">
                <CardHeader title="Skills" />
                <div className="skills">
                    <div className="skills__row">
                        <div className="skills__row-header">
                            <div className="skils__row-header-left sub-title">
                                PHP
                            </div>
                            <div className="skills__row-header-right">
                                <EditOptions />
                            </div>
                        </div>
                        <div className="chip-input-value">
                            <span className="chip-input-tag">
                                Zend
                            </span>
                            <span className="chip-input-tag">
                                Zend
                            </span>
                        </div>
                    </div>
                    <div className="skills__row">
                        <div className="skills__row-header">
                            <div className="skils__row-header-left sub-title">
                                Python
                            </div>
                            <div className="skills__row-header-right">
                                <EditOptions />
                            </div>
                        </div>
                        <div className="chip-input-value">
                            <span className="chip-input-tag">
                                Zend
                            </span>
                            <span className="chip-input-tag">
                                Zend
                            </span>
                        </div>
                    </div>
                    <div className="skills__row">
                        <div className="skills__row-header">
                            <div className="skils__row-header-left sub-title">
                                Javascript
                            </div>
                            <div className="skills__row-header-right">
                                <EditOptions />
                            </div>
                        </div>
                        <div className="chip-input-value">
                            <span className="chip-input-tag">
                                Javascript
                            </span>
                            <span className="chip-input-tag">
                                Zend
                            </span>
                        </div>
                    </div>
                </div>
                <CardFooter icon={Add} label="Add another skill" />
            </div>
        </div>
    )
}

export default Skills;
