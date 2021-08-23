import { userTypes } from "../types/index";
import { userLoginAction, userLogoutAction } from "../actions/actions";

export type reducerAction = userLoginAction | userLogoutAction;

export const userLoginReducers = (state: userTypes, action: reducerAction): userTypes => {
    console.log("state inside reducer", state);
    console.log("action inside reducer", action);
    switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        // optional chaining --- it will return undefined on the following properties (if they don't exist in the payload)
        restaurants: action.payload?.restaurants,
        suppliers: action.payload?.suppliers,
      }
    case 'LOGOUT':
      console.log('logged out', state)
      return {
        ...state,
        user: userLoginState.user,
        restaurants: null,
        suppliers: null,
      }
    default:
      return userLoginState;
  }
}

export const userLoginState: userTypes = {
  user: {
    user_type: "Food lover",
    user_first_name: "",
    user_last_name: "",
    user_picture: "",
  },
  restaurants: null,
  suppliers: null,
}

