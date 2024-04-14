// ** Auth Endpoints
/**
 * @important !!!!!!
 * just for test next will be involved to the environment variables
 */
const basedUrl = process.env.REACT_APP_BASE_URL;

const endPoints = {
  /**
   *  ----- -- SERVER TEST ENDPOINT --
   */
  test: '/test',

  /**
   *  ----- -- AUTHENTICATION USER ENDPOINT --
   */
  loginEndpoint: '/api/auth/sign-in',
  registerEndpoint: '/api/auth/sign-up',
  logoutEndPoint: '/api/auth/logout',
  accessGoogleEndpoint: '/api/auth/sign-in/google',

  /**
   *  -----   -- ACTIVE USER --
   */
  getActiveUserEndPoint: '/api/client/current-information',
  getRoleEndPoint: '/api/client/role',
  updateInfoEndPoint: '/api/client/update-info',
  updateContactEndPoint: '/api/client/update-contact',
  updatePasswordEndPoint: '/api/client/update-password',

  /**
   *  -----   -- CONNECT PROVIDERS --
   */
  connectGitHubEndPoint: '/connect/github',
  connectGoogleMeetEndPoint: '/connect/google/meet',
  connectGoogleCalendarEndPoint: '/connect/google/calendar',
  connectGoogleGmailEndPoint: '/connect/google/meet',
  connectGitLabEndPoint: '/connect/gitlab',
  connectBitbucketEndPoint: '/connect/bitbucket',
  connectJiraEndPoint: '/connect/jira',
  connectMegaEndPoint: '/connect/mega',

  /**
   *  -----   -- PROVIDER COMPANY --
   */
  providerListEndPoint: '/api/provider/list',
  accessGitHubEndPoint: '/api/provider/access/github',
  authGitHubEndPoint: '/api/provider/auth/github'
};

function getEndPoints() {
  const configWithBaseUrl = {};
  for (const endpoint in endPoints) {
    configWithBaseUrl[endpoint] = basedUrl + endPoints[endpoint];
  }
  return configWithBaseUrl;
}

const tokenType = 'Bearer';

const StorageToken = {
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
  userData: 'userData'
};
export default {
  ...getEndPoints(),
  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType,

  // ** Value of this property will be used as key to store JWT token in storage
  ...StorageToken
};
