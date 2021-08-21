const url = 'http://localhost:3001';

import { userTypes } from '../types/user-types';
import { fetchRequest } from './fetch';

function registerFetch(route: string, user: userTypes) {
  return fetchRequest(`${route}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}

<<<<<<< HEAD
export async function register(user: userTypes) {
  switch (user.user_type) {
    case "food lover":
      return registerFetch('/register/FoodLoverUser', user);
    case "restaurant":
      return registerFetch('/register/RestaurantUser', user);
    case "supplier":
      return registerFetch('/register/SupplierUser', user);
    default: return "something went wrong..."
  }
=======
export async function register(user: userTypes): Promise<userTypes>  {
    switch (user.user.user_type) {   
        case "food lover": 
            return await registerFetch('/register/FoodLoverUser', user);
        case "restaurant":  
            return await registerFetch('/register/RestaurantUser', user);
        case "supplier":
            return await registerFetch('/register/SupplierUser', user);
        default: return {} as userTypes;
    }
>>>>>>> auth
}

