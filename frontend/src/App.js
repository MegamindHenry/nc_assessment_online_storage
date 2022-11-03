import React, { Component } from 'react';
import TestForm from './components/TestForm';
import getAppConfig from './components/getAppConfig';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backendBaseUrl: '',
      loaded: false
    };
  }

  componentDidMount() {
    console.log('loading app config');
    getAppConfig().then(appConfig => {
      this.setState({
        ...this.state,
        loaded: true,
        backendBaseUrl: appConfig.backendBaseUrl.value
      });
    });
  }

  componentDidUpdate() {
    
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <TestForm backendBaseUrl={this.state.backendBaseUrl}/>
        </div>
      );
    } else {
      return (
        <div>
          <span>Loading ...</span>
        </div>
      );
    }
  }
}

export default App;
