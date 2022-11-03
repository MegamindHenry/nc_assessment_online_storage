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
  
  // BACKEND_BASE_URL
  const backendBaseUrl = await client.getConfigurationSetting({
    key: 'BACKEND_BASE_URL'
  });

  // BACKEND_BASE_URL
  const clientId = await client.getConfigurationSetting({
    key: 'APP_CLIENT_ID'
  });

  // APP_CLOUD_INSTANCE_ID
  const cloudInstanceId = await client.getConfigurationSetting({
    key: 'APP_CLOUD_INSTANCE_ID'
  });

  // APP_TENANT_ID
  const tenantId = await client.getConfigurationSetting({
    key: 'APP_TENANT_ID'
  });

  // REDIRECT_URL
  const redirectUrl = await client.getConfigurationSetting({
    key: 'REDIRECT_URL'
  });

  const appConfig = {
    backendBaseUrl: backendBaseUrl.value,
    clientId: clientId.value,
    cloudInstanceId: cloudInstanceId.value,
    tenantId: tenantId.value,
    redirectUrl: redirectUrl.value
  };

  return appConfig;
}

export default getAppConfig;