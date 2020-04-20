/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

class HandleModal extends React.Component {
  state = { isOpen: false };

  setIsOpen = value => {
    this.setState({ isOpen: value });
  };

  render() {
    // render props pattern
    return (
      <div>
        <button onClick={() => this.setIsOpen(true)}>{this.props.buttonName}</button>
        {this.props.render(this.state.isOpen, this.setIsOpen)};
      </div>
    );
  }
}

export default HandleModal;
