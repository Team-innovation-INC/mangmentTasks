// action - state management
import WebService from 'api/useJwt';
import * as actionTypes from './actions';

export const initialState = {
  userDetails: {},
  active: false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authReducer = async (state = initialState, action) => {
  let user = {};
  let isActive = false;
  console.log(action.type === actionTypes.SINGING, action);

  switch (action.type) {
    case actionTypes.SINGING:
      try {
        const response = await WebService().login(action.payload);
        if (response.status === 200) {
          user = response.data.user;
          isActive = true;
        }
      } catch (error) {
        state.userDetails = {};
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
        state.userDetails = {};
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
