// ** Auth Endpoints

const basedUrl = 'https://progress-application.onrender.com'; // -- just for test next will be involved to the environment variables

const endPoints = {
  // -- test
  test: '/test',
  // -- auth endPoints
  loginEndpoint: '/api/auth/sign-in',
  registerEndpoint: '/api/auth/sign-up',
  getActiveUserEndPoint: '/api/client/current-information',
  logoutEndPoint: '/api/auth/logout',
  accessGitHub: '/api/provider/access/github',
  authGitHub: '/api/provider/auth/github',
  providerList: '/api/provider/list'
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
