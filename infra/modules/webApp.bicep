@description('location of the resources')
param location string = resourceGroup().location

@description('name of the web app')
param webAppAccountName string = 'app${uniqueString(resourceGroup().id)}'

@description('app service plan id')
param appServicePlanId string

var linuxFxVersion = 'node|16-lts'

resource webApplication 'Microsoft.Web/sites@2022-03-01' = {
  name: webAppAccountName
  location: location
  properties: {
    serverFarmId: appServicePlanId
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
  }
}
