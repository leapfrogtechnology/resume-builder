import React from 'react';

const CardHeader = ({ title, icon = null }) => {
	return (
		<div className="card__header">
			<div className="card__header_l">
				<div className="title">{title}</div>
			</div>
			{!icon ? ''
				:
				<div className="card__header_r">
					<img src={icon} alt="Edit" />
				</div>
			}
		</div>
	)
}

export default CardHeader;
