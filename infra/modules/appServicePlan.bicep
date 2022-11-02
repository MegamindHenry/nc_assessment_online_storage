@description('location of the resources')
param location string = resourceGroup().location

@description('app sevice plan sku')
@allowed([
  'F1'
])
param appServicePlanSku string = 'F1'

@description('name of the app plan')
param appServicePlanName string = 'appplan${uniqueString(resourceGroup().id)}'

resource appServicePlan 'Microsoft.Web/serverfarms@2020-12-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: appServicePlanSku
    capacity: 1
  }
  kind: 'linux'
}

output appServicePlanId string = appServicePlan.id
