import { AppConfigurationClient } from '@azure/app-configuration';

//provide the app configuration client
function getAppConfigClient() {
  const connectionString = 'Endpoint=https://onlinestorageappconfigxx.azconfig.io;Id=X4yJ-l9-s0:ruWPgx7jl+xk7MKV9dBI;Secret=if4Awwcm+yGisFW7qS6axZLV5bNXjLlTA3tYPcKqMG4=';
  const client = new AppConfigurationClient(
    connectionString
  );

  return client;
}

async function getAppConfig() {
  const client = getAppConfigClient();
  const backendBaseUrl = await client.getConfigurationSetting({
    key: 'BACKEND_BASE_URL'
  });

  const appConfig = {
    backendBaseUrl: backendBaseUrl
  };

  return appConfig;
}

export default getAppConfig;