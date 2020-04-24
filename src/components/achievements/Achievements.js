import React, {useState} from 'react';
import CardHeader from '~/components/cardheader/CardHeader';
import EditOptions from '~/components/editoptions/EditOptions';
import { Add } from '~/assets/image';
import CardFooter from '~/components/cardfooter/CardFooter';
import AddAchievement from '~/components/form/achievement/AddAchievement';

const Achievements = () => {
	const [showModel, setModal] = useState(false);

	const modalBtnHandler = e => {
		e.preventDefault();
		setModal(!showModel);
	};

	const closeBtnHandler = e => {
		e.preventDefault();
		setModal(!showModel);
	};

	return (
		<div className="achievements-block">
			<div className="card">
				<CardHeader title="Achievements" />
				<div className="achievements">
					<div className="achievements__row">
						<div className="achievements__row-header">
							<div className="sub-title">Headhunt Award</div>
							<EditOptions />
						</div>
						<div className="achievements__year">December 2012</div>
					</div>
				</div>
				<CardFooter icon={Add} label="Add another achievement" showModal={showModel} onAdd={modalBtnHandler} component={AddAchievement} onClose={closeBtnHandler} />
			</div>
		</div>
	)
}

export default Achievements;
