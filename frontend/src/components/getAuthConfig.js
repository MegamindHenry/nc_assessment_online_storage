export function getMsalConfig(appConfig) {
  const redirectUrl = appConfig.redirectUrl;
  const clientId = appConfig.clientId;
  const cloudInstanceId = appConfig.cloudInstanceId;
  const tenantId = appConfig.tenantId;
  const authority = `${cloudInstanceId}/${tenantId}`;

  const msalConfig = {
    auth: {
      clientId: clientId,
      authority: authority,
      redirectUri: redirectUrl,
    },
    cache: {
      cacheLocation: 'sessionStorage', // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };
  return msalConfig;
}
  
// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};
  
// // Add the endpoints here for Microsoft Graph API services you'd like to use.
// export const graphConfig = {
//   graphMeEndpoint: 'https://graph.microsoft.com',
// };
  