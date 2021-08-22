// const url = 'http://localhost:3001';

import { registrationFormUserTypes, registeredUserTypes } from '../types/user-types';
import { fetchRequest } from './fetch';


function registerFetch(route: string, user: registrationFormUserTypes): Promise<registeredUserTypes> {
  return fetchRequest(`${route}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}

export async function registerUser(user: registrationFormUserTypes): Promise<registeredUserTypes> {

  switch (user.user_type) {
    case "food lover":
      return await registerFetch('/register/FoodLoverUser', user);
    case "restaurant":
      return await registerFetch('/register/RestaurantUser', user);
    case "supplier":
      return await registerFetch('/register/SupplierUser', user);
    default: return {
      user: {
        user_type: "",
        user_first_name: "",
        user_last_name: "",
        user_picture: "",
      },
      newRestaurant: null,
      newSupplier: null
    }
  }
}

