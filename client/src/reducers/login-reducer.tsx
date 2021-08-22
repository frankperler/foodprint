import { restaurantTypes, supplierTypes, userTypes, simpleUser } from "../types/index";
import { userLoginAction } from "../actions/actions";

export const userLoginReducers = (state: userTypes, action: userLoginAction) : userTypes => {
    switch(action.type) {
        case 'LOGIN': 
            console.log("user landed in reducer", action.payload.user)
            return {...state, 
                    user: action.payload.user,
                    // optional chaining --- it will return undefined on the following properties
                    // if they don't exist in the payload
                    restaurants: action.payload?.restaurants || null,
                    suppliers: action.payload?.suppliers || null,
                 }
        default:
            return state;
    }
}

export const userLoginState: userTypes = {
    user: {
        user_type: "hello",
        user_first_name: "",
        user_last_name: "",
        user_picture: "",
    },
    restaurants: null,
    suppliers: null,
}
    
