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

export async function register(user: userTypes) {
  switch (user.user.user_type) {
    case "food lover":
      return registerFetch('/register/FoodLoverUser', user);
    case "restaurant":
      return registerFetch('/register/RestaurantUser', user);
    case "supplier":
      return registerFetch('/register/SupplierUser', user);
    default: return "something went wrong..."
  }
}

