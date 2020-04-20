import React from 'react';
import { Add } from '../../assets/image';
import CardHeader from '../cardheader/CardHeader';
import CardFooter from '../cardfooter/CardFooter';
import WorkExperienceShown from './WorkExperienceShown';
import WorkExperienceHidden from './WorkExperienceHidden';

const WorkExperience = () => {
	return (
		<div className="work-experience-block">
			<div className="card">
				<CardHeader title="Work Experience" />
				<WorkExperienceShown />
				<WorkExperienceHidden />
				<CardFooter icon={Add} label="Add another work experience" />
			</div>
		</div>
	)
}

export default WorkExperience;
