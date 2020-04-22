import React, { Component } from 'react';
import OpenModal from '~/components/modal/OpenModal';

class CardHeader extends Component {
	constructor({ title, icon = null, component }) {
		super();

		this.state = {
			title: title,
			icon: icon,
			showModal: false,
			component: component
		}
	}

	openModal = () => {
		this.setState({
			...this.state,
			showModal: true
		}, ()=>{
			console.log(this.state)
		})
	}

	render() {
		return (
				<div className="card-header">
					<div className="card-header__l">
						<div className="title">{this.state.title}</div>
					</div>
					{!this.state.icon ? ''
						:
						<div className="card-header__r" onClick={this.openModal}>
							<img src={this.state.icon} alt="Edit" />
						</div>
					}
					{
						this.state.showModal ? <OpenModal component={this.state.component} /> : ''
					}
				</div>
		)
	}
}

export default CardHeader;
