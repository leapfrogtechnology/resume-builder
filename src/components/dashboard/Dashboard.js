import React from 'react';
import Skills from '../skills/Skills';
import Sidenav from '../sidenav/Sidenav';
import Certificate from '../certificate/Certificate';
import Achievements from '../achievements/Achievements';
import WorkExperience from '../workexperience/WorkExperience';
import ProjectsUndertaken from '../projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '../personalinformation/PersonalInformation';

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
