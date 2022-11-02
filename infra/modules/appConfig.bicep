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
    value: 'localhost'
  }
}
