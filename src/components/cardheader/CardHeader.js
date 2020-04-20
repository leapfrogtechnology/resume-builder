import React from 'react';

const CardHeader = ({ title, icon = null }) => {
	return (
		<div className="card-header">
			<div className="card-header__l">
				<div className="title">{title}</div>
			</div>
			{!icon ? ''
				:
				<div className="card-header__r">
					<img src={icon} alt="Edit" />
				</div>
			}
		</div>
	)
}

export default CardHeader;
