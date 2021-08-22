import { registerAction } from "../actions/actions";
import { registeredUserTypes } from "../types/user-types";


export const registrationReducers = (state: registeredUserTypes, action: registerAction) : registeredUserTypes => {
  switch(action.type) {
    case 'REGISTER':
      return {...state,
        user: action.payload.user,
        newRestaurant: action.payload?.newRestaurant || null,
        newSupplier: action.payload?.newSupplier || null,
      }
  default:
    return state
  }
}

export const registrationState: registeredUserTypes = {
  user: {
    user_type: "",
    user_first_name: "",
    user_last_name: "",
    user_picture: "",
  },
  newRestaurant: null,
  newSupplier: null,
}
