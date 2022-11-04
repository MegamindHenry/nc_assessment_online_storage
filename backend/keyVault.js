const az_identity = require('@azure/identity');
const az_keyvault = require('@azure/keyvault-secrets');

const credentials = new az_identity.DefaultAzureCredential();
const client = new az_keyvault.SecretClient(
  'https://onlinestoragekeyvaultxx.vault.azure.net/',
  credentials
);

function getApiKey() {
  return client.getSecret('backend-api-key');
}

module.exports = getApiKey;