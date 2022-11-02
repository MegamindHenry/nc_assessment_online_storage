import { DefaultAzureCredential } from '@azure/identity';
import { AppConfigurationClient } from '@azure/app-configuration';

//provide the app configuration client
function getAppConfigClient() {
  const endpoint = 'https://onlinestorageappconfigxx.azconfig.io';
  const credential = new DefaultAzureCredential();
  const client = new AppConfigurationClient(
    endpoint,
    credential
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