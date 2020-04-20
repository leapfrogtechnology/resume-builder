import React from 'react';
import CardFooter from '../cardfooter/CardFooter';
import CardHeader from '../cardheader/CardHeader';
import EditOptions from '../editoptions/EditOptions';
import { Add, UpRightArrow } from '../../assets/image';

const Certificate = () => {
	return (
		<div className="certificate-block">
			<div className="card">
				<CardHeader title="Certificates" />
				<div className="certificate">
					<div className="certificate__row">
						<div className="certificate__row-header">
							<div className="sub-title text-link">
								Coursera Advanced React
                <span className="arrow-icon"><img src={UpRightArrow} alt="Arrow" /></span>
							</div>
							<EditOptions />
						</div>
						<div className="certificate__year">December 2012</div>
						<p className="certificate__description">
							Advanced react course completed with React under the hood
            </p>
					</div>
				</div>
				<CardFooter icon={Add} label="Add another certificate" />
			</div>
		</div>
	)
}

export default Certificate;
