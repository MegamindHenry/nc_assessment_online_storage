@description('location for the resource')
param location string = resourceGroup().location

@description('tenant id ')
param tenantId string

@description('keyvault assess user id')
param accessUserId string

@description('app sevice plan sku')
@allowed([
  'F1'
])
param appServicePlanSku string = 'F1'

@description('unique name suffix')
param uniqueNameSuffix string = 'xx'

var appName = 'onlineStorage'
var keyVaultName = '${appName}KeyVault${uniqueNameSuffix}'
var appServicePlanName = '${appName}AppServicePlan${uniqueNameSuffix}'
var webAppFrontendName = '${appName}WebAppFrontend${uniqueNameSuffix}'
var webAppBackendName = '${appName}WebAppBackend${uniqueNameSuffix}'
var appConfigName = '${appName}AppConfig${uniqueNameSuffix}'

module keyVaultModule 'modules/keyVault.bicep' = {
  name: 'keyVaultModule'
  params: {
    location: location
    name: keyVaultName
    tenantId: tenantId
    accessUserId: accessUserId
  }
}

module appServicePlanModule 'modules/appServicePlan.bicep' = {
  name: 'appServicePlanModule'
  params: {
    location: location
    appServicePlanName: appServicePlanName
    appServicePlanSku: appServicePlanSku
  }
}

module webAppFrontendModule 'modules/webApp.bicep' = {
  name: 'webAppFrontendModule'
  params: {
    location: location
    webAppAccountName: webAppFrontendName
    appServicePlanId: appServicePlanModule.outputs.appServicePlanId
  }
}

module webAppBackendModule 'modules/webApp.bicep' = {
  name: 'webAppBackendModule'
  params: {
    location: location
    webAppAccountName: webAppBackendName
    appServicePlanId: appServicePlanModule.outputs.appServicePlanId
  }
}

module appConfigModule 'modules/appConfig.bicep' = {
  name: 'appConfigModule'
  params: {
    location: location
    appConfigName: appConfigName
  }
}
