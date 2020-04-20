import React from 'react';
import Sidenav from '../sidenav/Sidenav';
import PersonalInformation from '../personalinformation/PersonalInformation';
import Skills from '../skills/Skills';
import WorkExperience from '../workexperience/WorkExperience';
import ProjectsUndertaken from '../projectsundertaken/ProjectsUndertaken';
import Achievements from '../achievements/Achievements';
import Certificate from '../certificate/Certificate';

const Dashboard = () => {
    return (
        <section className="container">
            <div className="main-container">
                <div className="main-content">
                    <PersonalInformation />
                    <Skills />
                    <WorkExperience />
                    <ProjectsUndertaken />
                    <Achievements />
                    <Certificate />
                </div>
                <Sidenav />
            </div>
        </section>
    )
}

export default Dashboard;
