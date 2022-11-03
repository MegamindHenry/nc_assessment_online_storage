import React, { Component } from 'react';
import { AppContext } from './appContext';

class TestForm extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
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

    const url = `${this.context.appConfig.backendBaseUrl}/`;
    const localAccountId = this.context.localAccountId;
    const data = {
      value: this.state.value,
      localAccountId: localAccountId
    };
    
    console.log('Your backendBaseUrl is ');
    console.log('===');
    console.log(this.state.backendBaseUrl);
    console.log('===');
    console.log('Your localAccountId is ');
    console.log('===');
    console.log(localAccountId);
    console.log('===');
    console.log('Your url is ');
    console.log('===');
    console.log(url);
    console.log('===');
    console.log('Your data is ');
    console.log('===');
    console.log(data);
    console.log('===');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log('Your response is ');
      console.log('===');
      console.log(response);
      console.log('===');
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
        <p>{this.state.backendBaseUrl}</p>
        <label>Value</label>
        <input type="text" onChange={this.updateInput}></input>
        <input type="submit" onClick={this.handleSubmit} ></input>
      </div>
    );
  }
}

export default TestForm;