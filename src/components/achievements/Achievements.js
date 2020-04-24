import { Add } from '~/assets/image';
import React, {useState} from 'react';
import EmptyCard from '../emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import EditOptions from '~/components/editoptions/EditOptions';

const Achievements = () => {
	const [isDataAvailable, setData] = useState(true);
	
	return (
		// make error check for class if the data exists
		<div className="achievements-block">
			<div className={isDataAvailable ? 'card' : 'card card--empty'}>
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
				{/* <EmptyCard emptyMessage="You do not have any achievemnets yet" /> */}
				<CardFooter icon={Add} label="Add another achievement" />
			</div>
		</div>
	)
}

export default Achievements;
