import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import TestForm from './components/TestForm';
import getAppConfig from './components/getAppConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { AuthenticatedTemplate, UnauthenticatedTemplate, MsalProvider } from '@azure/msal-react';
import { getMsalConfig } from './components/getAuthConfig';
import { PageLayout } from './components/PageLayout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('loading app config');
    getAppConfig().then(appConfig => {
      this.setState({
        ...this.state,
        loaded: true,
        ...appConfig
      });
    });
  }

  componentDidUpdate() {
    
  }

  render() {
    if (this.state.loaded) {
      const msalConfig = getMsalConfig(this.state);
      const msalInstance = new PublicClientApplication(msalConfig);
      console.log(msalInstance);


      return (
        <MsalProvider instance={msalInstance}>
          <PageLayout>
            <AuthenticatedTemplate>
              <TestForm backendBaseUrl={this.state.backendBaseUrl}/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <div>
                <p>You are not signed in! Please sign in.</p>
              </div>
            </UnauthenticatedTemplate>
          </PageLayout>
        </MsalProvider>
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
