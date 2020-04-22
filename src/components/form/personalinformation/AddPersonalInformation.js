import React, { Component } from 'react';
import { Close, Trash } from '~/assets/image';
import Button from '~/components/button/Button';
import InputText from '~/components/inputtext/InputText';
import FormHeader from '~/components/formheader/FormHeader';
import InputTextArea from '~/components/inputtextarea/InputTextArea';

class AddPersonalInformation extends Component {
  constructor() {
    super();

    this.state = {
      showModal: true
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    console.log(this.state)
    return (
      this.state.showModal ?
      <div className="form-container">
        <div className="form">
          <div className="card">
            <div className="close-option" onClick={this.closeModal}>
              <img src={Close} alt="close" />
            </div>
            <FormHeader title="Personal Information" />
            <div className="form__content">
              <InputText label="Your Name" />
              <InputText label="Your Role" />
              <InputTextArea label="Your Information" />
              <div className="form-button">
                <div className="form-button__left">
                  <Button content="Save Info" />
                </div>
                <div className="form-button__right">
                  <Button content="Cancel" isCancel={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      ''
    )
  }
}

export default AddPersonalInformation;
