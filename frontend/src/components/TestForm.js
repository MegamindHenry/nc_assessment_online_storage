import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backendBaseUrl: props.backendBaseUrl,
      value: ''
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateInput(event) {
    this.setState({
      ...this.state,
      value: event.target.value
    });
  }


  handleSubmit() {
    console.log('Your input value is: ' + this.state.value);

    const url = `${this.state.backendBaseUrl}/`;
    const data = {
      value: this.state.value
    };
    
    console.log('Your backendBaseUrl is ' + this.state.backendBaseUrl);
    console.log('Your url is ' + url);
    console.log('Your data is ' + data);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });

  }

  render() {
    return (
      <div>
        <div>form</div>
        <label>{this.state.backendBaseUrl}</label>
        <label>Value</label>
        <input type="text" onChange={this.updateInput}></input>
        <input type="submit" onClick={this.handleSubmit} ></input>
      </div>
    );
  }
}

// validate props
TestForm.propTypes = {
  backendBaseUrl: PropTypes.string
};

export default TestForm;