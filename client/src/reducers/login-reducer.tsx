import { userTypes } from "../types/index";
import { userLoginAction, userLogoutAction } from "../actions/actions";

export type reducerAction = userLoginAction | userLogoutAction;

export const userLoginReducers = (state: userTypes, action: reducerAction): userTypes => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        // optional chaining --- it will return undefined on the following properties (if they don't exist in the payload)
        restaurants: action.payload?.restaurants,
        suppliers: action.payload?.suppliers,
        token: action.payload.token,
      }
    case 'LOGOUT':
      return {
        ...state,
        ...userLoginState
      }
    default:
      return userLoginState;
  }
}

export const userLoginState: userTypes = {
  user: {
    user_type: "food lover",
    user_first_name: "",
    user_last_name: "",
    user_picture: "",
  },
  token: "",
  restaurants: null,
  suppliers: null,
}

