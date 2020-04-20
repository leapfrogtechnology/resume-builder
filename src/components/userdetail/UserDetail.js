import React from 'react';
import Media from '../media/Media';
import Button from '../button/Button';
import { Image } from '../../assets/image';
import { FAVORITE_ICON } from '../icons/icon';

const UserDetail = () => {
	return (
		<div className="user-detail">
			<div className="user-detail-container">
				<div className="user-detail__left-content">
					<div className="user-detail__image-wrapper">
						<img src={Image} alt="Profile Picture" />
					</div>
					<div className="user-detail__emp-attribute">
						<div className="user-detail__username">
							Ribby McFroggy
            </div>
						<div className="user-detail__activity">
							<Media icon={FAVORITE_ICON} label="5 years professional experience" />
						</div>
					</div>
				</div>
				<div className="user-detail__right-content">
					<Button content="Preview" />
				</div>
			</div>
		</div>
	)
}

export default UserDetail;
