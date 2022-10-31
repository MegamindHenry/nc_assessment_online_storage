@description('location for the resource')
param location string = resourceGroup().location

@description('name of the resource')
param name string

@description('tenant id ')
param tenantId string

@description('assess user id')
param accessUserId string

resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' = {
  name: name
  location: location
  properties: {
    enabledForDeployment: true
    enabledForTemplateDeployment: true
    enabledForDiskEncryption: true
    enableSoftDelete: false
    enablePurgeProtection: true
    tenantId: tenantId
    accessPolicies: [
      {
        tenantId: tenantId
        objectId: accessUserId
        permissions: {
          keys: [
            'all'
          ]
          secrets: [
            'all'
          ]
          certificates: [
            'all'
          ]
        }
      }
    ]
    sku: {
      name: 'standard'
      family: 'A'
    }
  }
}
