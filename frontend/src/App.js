import React, { useState } from 'react';
import TestForm from './components/TestForm';
// import getAppConfig from './components/getAppConfig';

function App() {
  // const [backendBaseUrl, setBackendBaseUrl] = useState(null);

  useState(null);

  // getAppConfig().then(appConfig => {
  //   setBackendBaseUrl(appConfig.backendBaseUrl);
  // });

  // console.log(backendBaseUrl);
  console.log(123);

  return (
    <div>
      <TestForm />
    </div>
  );
}

export default App;
