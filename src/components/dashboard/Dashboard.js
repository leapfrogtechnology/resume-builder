import React from 'react';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';

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
