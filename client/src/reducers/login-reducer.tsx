import { restaurantTypes, supplierTypes, userTypes, simpleUser } from "../types/index";
import { userLoginAction } from "../actions/actions";

export const userReducers = (userState: userTypes, action: userLoginAction) : userTypes => {
    switch(action.type) {
        case 'LOGIN': 
            return {...userState, 
                    user: action.payload.user,
                    restaurants: action.payload.restaurants,
                    suppliers: action.payload.suppliers,
                 }
    }
}


export const userState: userTypes = {
    user: {} as simpleUser,
    restaurants: [] as restaurantTypes[],
    suppliers: [] as supplierTypes[],
}
    
