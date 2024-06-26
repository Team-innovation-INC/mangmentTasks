// action - state management
import WebService from 'api/useJwt';
import * as actionTypes from './actions';
import { toast } from 'react-toastify';

export const initialState = {
  userDetails: {},
  active: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authReducer = async (state = initialState, action) => {
  let user = {};
  let isActive = false;
  switch (action.type) {
    case actionTypes.SINGING:
      try {
        const response = await WebService().login(action.payload);
        if (response.status === 200) {
          user = response.data.user;
          WebService().setToken(response.data.token);
          WebService().setUserData(response.data.user);
          window.location.replace('/dashboard');
          isActive = true;
        } else {
          toast.warning(response.data.message, {
            position: 'top-center'
          });
        }
      } catch (error) {
        toast.error('server error');
      }
      return {
        ...state,
        userDetails: user,
        active: isActive
      };
    case actionTypes.SIGNUP:
      try {
        const response = await WebService().register(action.payload);
        if (response.status === 200) {
          user = response.data.user;
          isActive = true;
        }
      } catch (error) {
        toast.error('server error');
      }
      return {
        ...state,
        userDetails: user,
        active: isActive
      };
    default:
      return state;
  }
};

export default authReducer;
