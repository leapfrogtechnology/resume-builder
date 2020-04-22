import React, { Component } from 'react';
import OpenModal from '~/components/modal/OpenModal';

class CardHeader extends Component {
  constructor({ title, icon = null, component, onEdit, onClose, showModal }) {
    super();

    this.state = {
      title: title,
      icon: icon,
      showModal: false,
      component: component,
    };
  }

  render() {
    return (
      <div className="card-header">
        <div className="card-header__l">
          <div className="title">{this.state.title}</div>
        </div>
        {!this.state.icon ? (
          ''
        ) : (
          <div className="card-header__r" onClick={e => this.props.onEdit(e)}>
            <img src={this.state.icon} alt="Edit" />
          </div>
        )}
        {this.props.showModal && <OpenModal component={this.state.component} onClose={this.props.onClose} />}
      </div>
    );
  }
}

export default CardHeader;
