const msal = require('@azure/msal-node');

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;
const tenantId = process.env.TENANT_ID;

const aadEndpoint = 
  process.env.AAD_ENDPOINT || 'https://login.microsoftonline.com';
const graphEndpoint = 
  process.env.GRAPH_ENDPOINT || 'https://graph.microsoft.com';

const msalConfig = {
  auth: {
    clientId,
    clientSecret,
    authority: aadEndpoint + '/' + tenantId,
  },
};

const tokenRequest = {
  scopes: [graphEndpoint + '/.default'],
};

let tokenCache = null;

const getAccessToken = async () => {
  // Check if token exists and is not expired
  if (!tokenCache || new Date(tokenCache.expiresOn) <= new Date()) {
    console.log("token_expired requesting new token")
    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenInfo = await cca.acquireTokenByClientCredential(tokenRequest);
    
    tokenCache = {
      accessToken: tokenInfo.accessToken,
      expiresOn: tokenInfo.expiresOn, // Use expiresOn from tokenInfo
      extExpiresOn: tokenInfo.extExpiresOn, // Optional: track extended expiry
    };
  }
  return tokenCache.accessToken;
};

exports.contactEmailController = async (mailOptions) => {
  try {
    const accessToken = await getAccessToken();
    
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({ message: mailOptions, saveToSentItems: false }),
    };
    
    await fetch(
      `${graphEndpoint}/v1.0/users/info@fitpreps.nl/sendMail`,
      options
    );
  } catch (error) {
    console.error(`Error sending email of contact email.`, error)
    throw error; // Re-throw to allow API route to handle it
  }
}