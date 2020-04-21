import React from 'react';
import Skills from '~/components/skills/Skills';
import Sidenav from '~/components/sidenav/Sidenav';
import AddSkill from '~/components/form/skill/AddSkill';
import AddProject from '~/components/form/project/AddProject';
import Certificate from '~/components/certificate/Certificate';
import Achievements from '~/components/achievements/Achievements';
import WorkExperience from '~/components/workexperience/WorkExperience';
import AddContactInformation from '~/components/form/contact/AddContact';
import AddAchievement from '~/components/form/achievement/AddAchievement';
import AddCertificate from '~/components/form/certificate/AddCertificate';
import AddWorkExperience from '~/components/form/workexperience/AddWordExperience';
import ProjectsUndertaken from '~/components/projectsundertaken/ProjectsUndertaken';
import PersonalInformation from '~/components/personalinformation/PersonalInformation';
import AddPersonalInformation from '~/components/form/personalinfornation/AddPersonalInformation';

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
					{/* <AddWorkExperience /> */}
					{/* <AddAchievement /> */}
					{/* <AddCertificate /> */}
					{/* <AddPersonalInformation /> */}
					{/* <AddContactInformation /> */}
					{/* <AddSkill /> */}
					{/* <AddProject /> */}
				</div>
				<Sidenav />
			</div>
		</section>
	)
}

export default Dashboard;
