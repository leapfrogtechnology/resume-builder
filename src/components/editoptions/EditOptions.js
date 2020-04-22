import React, { Component } from 'react';
import OpenModal from '~/components/modal/OpenModal';
import { View, EditGray, Trash, ViewHidden } from '~/assets/image';

class EditOptions extends Component {
	constructor({ isHidden, component, onEdit, onClose, showModal }) {
		super();

		this.state = {
			isHidden: isHidden,
			showModal: false,
			component: component
		}
	}

	render() {
		return (
			<div className="edit-options">
				<span className="edit-options__item">
					<img src={this.state.isHidden ? ViewHidden : View} alt="View" />
				</span>
				<span className="edit-options__item" onClick={e => this.props.onEdit(e)}>
					<img src={EditGray} alt="Edit" />
				</span>
				<span className="edit-options__item">
					<img src={Trash} alt="Trash" />
				</span>
				{
					this.props.showModal ? <OpenModal component={this.state.component} onClose={this.props.onClose}/> : ''
				}
			</div>
		)
	}
}

export default EditOptions;
