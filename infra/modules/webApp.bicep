@description('location of the resources')
param location string = resourceGroup().location

@description('name of the web app')
param webAppAccountName string = 'app${uniqueString(resourceGroup().id)}'

@description('app service plan id')
param appServicePlanId string

resource webApplication 'Microsoft.Web/sites@2021-01-15' = {
  name: webAppAccountName
  location: location
  properties: {
    serverFarmId: appServicePlanId
  }
}
