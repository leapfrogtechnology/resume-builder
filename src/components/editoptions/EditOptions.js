import React, { Component } from 'react';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

class EditOptions extends Component {
	constructor({ isHidden, component }) {
		super();

		this.state = {
			isHidden: isHidden,
			showModal: false,
			component: component
		}
	}

	openModal = () => {
		this.setState({
			...this.state,
			showModal: true
		})
	}

	render() {
		return (
			<div className="edit-options">
				<span className="edit-options__item">
					<img src={this.state.isHidden ? ViewHidden : View} alt="View" />
				</span>
				<span className="edit-options__item" onClick={this.openModal}>
					<img src={EditGray} alt="Edit" />
				</span>
				<span className="edit-options__item">
					<img src={Trash} alt="Trash" />
				</span>
				{
					this.state.showModal ? <OpenModal component={this.state.component} /> : ''
				}
			</div>
		)
	}
}

export default EditOptions;
