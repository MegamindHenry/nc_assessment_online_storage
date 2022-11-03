import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import TestForm from './components/TestForm';
import getAppConfig from './components/getAppConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { 
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  MsalProvider,
  useMsal
} from '@azure/msal-react';
import { getMsalConfig } from './components/getAuthConfig';
import { PageLayout } from './components/PageLayout';
import { AppContext } from './components/appContext';

function App() {
  // app state
  const [appConfig, setAppConfig] = useState(null);
  const [loaded, setLoaded] = useState(null);

  // auth
  const { accounts } = useMsal();
  let localAccountId = null;
  if (accounts[0]) {
    localAccountId = accounts[0].localAccountId;
  }

  // loading config from Azure app config
  useEffect(() => {
    getAppConfig().then(config => {
      setLoaded(true);
      setAppConfig(config);
    });

  }, []);

  if (loaded) {
    console.log('loaded ...');
    // auth components
    const msalConfig = getMsalConfig(appConfig);
    const msalInstance = new PublicClientApplication(msalConfig);

    const appContext = {
      appConfig: appConfig,
      localAccountId: localAccountId
    };

    return (
      <AppContext.Provider value={appContext}>
        <MsalProvider instance={msalInstance}>
          <PageLayout>
            <AuthenticatedTemplate>
              <TestForm/>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <div>
                <p>You are not signed in! Please sign in.</p>
                <TestForm/>
              </div>
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
