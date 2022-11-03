@description('location of the resources')
param location string = resourceGroup().location

@description('name of the web app')
param appConfigName string = 'app${uniqueString(resourceGroup().id)}'


resource appConfig 'Microsoft.AppConfiguration/configurationStores@2022-05-01' = {
  location: location
  properties: {
    encryption: {
    }
    disableLocalAuth: false
    
    softDeleteRetentionInDays: 7
    enablePurgeProtection: false
  }
  sku: {
    name: 'standard'
  }
  name: appConfigName
}

resource appConfigBackendBaseUrl 'Microsoft.AppConfiguration/configurationStores/keyValues@2021-10-01-preview' = {
  parent: appConfig
  name: 'BACKEND_BASE_URL'
  properties: {
    value: 'https://onlinestoragewebappbackendxx.azurewebsites.net'
  }
}

resource appConfigAppClientId 'Microsoft.AppConfiguration/configurationStores/keyValues@2021-10-01-preview' = {
  parent: appConfig
  name: 'APP_CLIENT_ID'
  properties: {
    value: 'a7c39d91-4736-4792-9e25-6241f6adeb7f'
  }
}

resource appConfigAppCloudInstanceId 'Microsoft.AppConfiguration/configurationStores/keyValues@2021-10-01-preview' = {
  parent: appConfig
  name: 'APP_CLOUD_INSTANCE_ID'
  properties: {
    value: 'https://login.microsoftonline.com'
  }
}

resource appConfigAppTenantId 'Microsoft.AppConfiguration/configurationStores/keyValues@2021-10-01-preview' = {
  parent: appConfig
  name: 'APP_TENANT_ID'
  properties: {
    value: '031e4f4a-6a35-45e0-a98e-107900032d62'
  }
}

resource appConfigRedirectUrl 'Microsoft.AppConfiguration/configurationStores/keyValues@2021-10-01-preview' = {
  parent: appConfig
  name: 'REDIRECT_URL'
  properties: {
    value: 'https://onlinestoragewebappfrontendxx.azurewebsites.net'
  }
}
