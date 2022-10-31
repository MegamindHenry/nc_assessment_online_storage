@description('location for the resource')
param location string = resourceGroup().location

@description('tenant id ')
param tenantId string

@description('keyvault assess user id')
param accessUserId string

var appName = 'onlineStorage'
var keyVaultName = '${appName}KeyVault'

module keyVault 'modules/keyVault.bicep' = {
  name: 'keyVaultModule'
  params: {
    location: location
    name: keyVaultName
    tenantId: tenantId
    accessUserId: accessUserId
  }
}
