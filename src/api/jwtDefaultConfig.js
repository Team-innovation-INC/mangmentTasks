// ** Auth Endpoints

const basedUrl = 'https://swagger-playpro-site.onrender.com'; // -- just for test next will be involved to the environment variables

const endPoints = {
  // -- test
  test: '/test',
  // -- auth endPoints
  loginEndpoint: '/api/auth/sign-in',
  registerEndpoint: '/api/auth/sign-up',
  getActiveUserEndPoint: '/api/auth/active',
  logoutEndPoint: '/api/auth/logout'
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
  storageRefreshTokenKeyName: 'refreshToken'
};
export default {
  ...getEndPoints(),
  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType,

  // ** Value of this property will be used as key to store JWT token in storage
  ...StorageToken
};
