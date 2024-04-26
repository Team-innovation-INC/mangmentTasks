// ========================== Web service controller for API ========================== //
//--- import creator HTTP request
import axios from 'axios';
//--- import based constance variables for APi handler
import jwtDefaultConfig from './jwtDefaultConfig';

/**
 * JWT Service class for handling JWT authentication and API requests.
 */
export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false;
  JSON = this.JSON;

  // ** For Refreshing Token
  subscribers = [];

  /**
   * Constructs a new JwtService instance.
   * @param {Object} jwtOverrideConfig - Custom JWT configuration to override default settings.
   */
  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };
    //================= Request Interceptor === configuration request before sending HTTP request to the server
    /**
     * @see [axios_interceptors] (https://axios-http.com/docs/interceptors)
     */
    axios.interceptors.request.use(
      // ---- calling method
      config => {
        // ** Get token from localStorage
        const accessToken = localStorage.getItem(this.jwtConfig.storageTokenKeyName);
        // ** If token is present add it to request's Authorization Header
        config.headers.Accept = 'application/json';
        if (accessToken) {
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      error => {
        Promise.reject(error);
      }
    );

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      response => {
        return { ...response };
      },
      error => {
        const { response } = error;
        if (response) {
          return { ...response };
        }
        return { message: 'Oops something was wrong please try later', status: 500 };
      }
    );
  }

  /**
   * Parses JSON data.
   * @param {_data} data The JSON data to parse.
   * @returns {any|null} The parsed data, or null if input is falsy.
   */
  parseData(_data) {
    if (_data) {
      return JSON.parse(_data);
    }
    return null;
  }

  //----- test server
  test() {
    return axios.get(this.jwtConfig.test);
  }

  /**
   * Event handler for when an access token is fetched.
   * @param {string} accessToken - The newly fetched access token.
   */
  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken));
  }

  /**
   * Adds a subscriber callback to the list.
   * @param {function} callback - The subscriber callback to add.
   */
  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  /**
   * Retrieves the stored access token from local storage.
   * @returns {string|null} The access token, or null if not found.
   */
  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  /**
   * Retrieves the stored refresh token from local storage.
   * @returns {string|null} The refresh token, or null if not found.
   */
  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  /**
   * Retrieves user data from local storage.
   * @returns {UserData|null} The user data details, or null if not found.
   */
  getUserData() {
    return this.parseData(localStorage.getItem(this.jwtConfig.userData));
  }

  /**
   * Sets the user data in local storage.
   * @param {userData} value - The user data value to set.
   */
  setUserData(value) {
    localStorage.setItem(this.jwtConfig.userData, JSON.stringify(value));
  }

  /**
   * Retrieves the role of the user.
   * @returns {string|null} The role of the user, or null if user data is not found.
   */
  getUserRole() {
    return this.getUserData()?.role?.roleName;
  }
  /**
   * Sets the access token in local storage.
   * @param {string} value - The access token value to set.
   */
  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  /**
   * Sets the refresh token in local storage.
   * @param {string} value - The refresh token value to set.
   */
  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  /**
   * Removes the refresh token from local storage.
   * @returns {void} No return value.
   */
  removeRefreshToken() {
    return localStorage.removeItem(this.jwtConfig.storageTokenKeyName);
  }

  /**
   * Removes the user data from local storage.
   * @returns {void} No return value.
   */
  removeUserData() {
    return localStorage.removeItem(this.jwtConfig.userData);
  }
  /**
   * Requests a token refresh by sending a GET request.
   * @returns {Promise} A Promise representing the token refresh request.
   */
  refreshToken() {
    return axios.get(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken()
    });
  }

  /**
   * Generates authorization headers containing the bearer token.
   * @returns {Object} An object with the Authorization header.
   */
  getAuthorization() {
    return { Authorization: `Bearer ${this.getToken()}` };
  }

  /**
   * Sends a GET request with authorization headers.
   * @param {string} _endpoint - The endpoint key to get the URL from configuration.
   * @returns {Promise} A Promise representing the GET request.
   */
  getRequestWithToken(_endpoint) {
    return axios.get(this.jwtConfig[_endpoint], {
      headers: this.getAuthorization()
    });
  }

  /**
   * Sends a POST request with authorization headers.
   * @param {string} _endpoint - The endpoint key to get the URL from configuration.
   * @param {Object} body - The data to send in the request body.
   * @returns {Promise} A Promise representing the POST request.
   */
  postRequestWithToken(_endpoint, body) {
    return axios.post(this.jwtConfig[_endpoint], { ...body }, { headers: this.getAuthorization() });
  }

  /**
   * Initiates the login process by sending a POST request.
   * @param {...*} args - Arguments to be passed to the POST request.
   * @returns {Promise} A Promise representing the login request.
   */
  login(...args) {
    return axios.post(this.jwtConfig.loginEndpoint, ...args);
  }

  /**
   * Initiates the login process by sending a POST request.
   * @param {...*} args - Arguments to be passed to the POST request.
   * @returns {Promise} A Promise representing the login request.
   */
  loginGoogle() {
    return axios.get(this.jwtConfig.accessGoogleEndpoint);
  }

  /**
   * Initiates the registration process by sending a POST request.
   * @param {...*} args - Arguments to be passed to the POST request.
   * @returns {Promise} A Promise representing the registration request.
   */
  register(...args) {
    return axios.post(this.jwtConfig.registerEndpoint, ...args);
  }

  /**
   * Logs out the user by removing refresh token and user data from local storage.
   * @returns {void} No return value.
   */
  logout() {
    this.removeRefreshToken();
    this.removeUserData();
  }

  /**
   * Retrieves the connected user data from the server.
   * @returns {Promise} A Promise representing the GET request for connected user data.
   */
  getConnectedUser() {
    return axios.get(this.jwtConfig.getActiveUserEndPoint, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Updates the user's password by sending a POST request.
   * @param {...*} args - Arguments to be passed to the POST request.
   * @returns {Promise} A Promise representing the POST request for updating the password.
   */
  updatePassword(...args) {
    return axios.put(this.jwtConfig.updatePasswordEndPoint, ...args, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Updates user information using a PUT request to a specified endpoint.
   *
   * @param {Object} data - The data to update, typically a user information object containing fields like gender, age, bio, pic, etc.
   * @param {Object} config - Additional Axios configuration options, if any.
   * @returns {Promise<Object>} A promise that resolves with the Axios response object. The response typically contains status code, headers, and data.
   *
   * @example
   * const data = {
   *   fullName: raed rdhaounia,
   *   userName: raedrdhaounia,
   *   gender: true,
   *   age: 25,
   *   bio: "This is my biography.",
   *   pic: "https://example.com/pic.jpg",
   * };
   *
   * webService().updateInformation(data)
   *   .then(response => {
   *     console.log("Update successful:", response.data);
   *   })
   *   .catch(error => {
   *     console.error("Error updating information:", error);
   *   });
   */
  updateInformation(...args) {
    return axios.put(this.jwtConfig.updateInformationEndPoint, ...args, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Checks if a given username exists by sending a GET request to a specific endpoint.
   *
   * @param {string} userName - The username to check for existence.
   * @returns {Promise<Object>} A promise that resolves with the Axios response object. The response typically contains a boolean field indicating whether the username exists.
   *
   * @example
   * webService().checkExistUserName("exampleUser")
   *   .then(response => {
   *     const { exist } = response.data;
   *     console.log("Does the username exist?", exist);
   *   })
   *   .catch(error => {
   *     console.error("Error checking username existence:", error);
   *   });
   */
  checkExistUserName(userName) {
    return axios.get(`${this.jwtConfig.checkExistUserNameEndPoint}/${userName}`, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Updates the user's profile by sending a POST request.
   * @param {...*} args - Arguments to be passed to the POST request.
   * @returns {Promise} A Promise representing the POST request for updating the profile.
   */
  updateProfile(...args) {
    return axios.post(this.jwtConfig.updateProfileEndPoint, ...args);
  }

  /**
   * Retrieves access to GitHub by sending a GET request.
   * @returns {Promise} A Promise representing the GET request for accessing GitHub.
   */
  accessToGithHub() {
    return axios.get(this.jwtConfig.accessGitHubEndPoint, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Connects to GitHub by sending a GET request.
   * @returns {Promise} A Promise representing the GET request for connecting to GitHub.
   */
  connectToGitHub() {
    return axios.get(this.jwtConfig.authGitHubEndPoint, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Retrieves the provider list by sending a GET request.
   * @returns {Promise} A Promise representing the GET request for retrieving the provider list.
   */
  getProviderList() {
    return axios.get(this.jwtConfig.providerListEndPoint, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Retrieves the help status by sending a GET request.
   * @param {string} params - The parameter specifying the field to retrieve from the user's help status.
   * @returns {Promise} A Promise representing the GET request for retrieving the help status.
   */
  getHelpStatus(params) {
    return axios.get(`${this.jwtConfig.helpUserStatusEndPoint}/${params}`, {
      headers: this.getAuthorization()
    });
  }

  /**
   * Updates the help status by sending a PUT request.
   * @param {string} fieldToUpdate - The field within the user's help status to update.
   * @returns {Promise} A Promise representing the PUT request for updating the help status.
   */
  updateHelpStatus(fieldToUpdate) {
    return axios.put(
      `${this.jwtConfig.helpUserStatusEndPoint}`,
      { fieldToUpdate },
      {
        headers: this.getAuthorization()
      }
    );
  }
}
