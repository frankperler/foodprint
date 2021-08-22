import { restaurantTypes, supplierTypes, userTypes, simpleUser } from "../types/index";
import { userLoginAction } from "../actions/actions";

export const userReducers = (userState: userTypes, action: userLoginAction) : userTypes => {
    switch(action.type) {
        case 'LOGIN': 
            return {...userState, 
                    user: action.payload.user,
                    // optional chaining --- it will return undefined on the following properties
                    // if they don't exist in the payload
                    restaurants: action.payload?.restaurants || null,
                    suppliers: action.payload?.suppliers || null,
                 }
    }
}

export const userState: userTypes = {
    user: {
        user_type: "",
        user_first_name: "",
        user_last_name: "",
        user_picture: "",
    },
    restaurants: null,
    suppliers: null,
}
    
