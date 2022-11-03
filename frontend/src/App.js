import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import TestForm from './components/TestForm';
import getAppConfig from './components/getAppConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { 
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  MsalProvider
} from '@azure/msal-react';
import { getMsalConfig } from './components/getAuthConfig';
import { PageLayout } from './components/PageLayout';
import { AppContext } from './components/appContext';

function App() {
  // app state
  const [appConfig, setAppConfig] = useState(null);
  const [loaded, setLoaded] = useState(null);

  // loading config from Azure app config
  useEffect(() => {
    getAppConfig().then(config => {
      setLoaded(true);
      setAppConfig(config);
    });

  }, []);

  if (loaded) {
    console.log('123 loaded ...');
    // auth components
    const msalConfig = getMsalConfig(appConfig);
    const msalInstance = new PublicClientApplication(msalConfig);

    const appContext = {
      appConfig: appConfig
    };

    return (
      <AppContext.Provider value={appContext}>
        <MsalProvider instance={msalInstance}>
          <PageLayout>
            <AuthenticatedTemplate>
              <p>You signed in.</p>
              <TestForm/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <p>You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
          </PageLayout>
        </MsalProvider>
      </AppContext.Provider>
    );
  } else {
    console.log('loading ...');
    return (
      <p>Loading ...</p>
    );
  }
}

export default App;
