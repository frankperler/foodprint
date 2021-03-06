import { restaurantTypes } from "./restaurant-types"
import { supplierTypes } from "./supplier-types"

export type loginTypes = {
  email: string,
  password: string,
}

export type simpleUser = {
  user_type: string,
  user_first_name: string,
  user_last_name: string,
  user_picture: string,
}

export type userTypes = {
  user: simpleUser,
  token: string,
  restaurants?: restaurantTypes[] | null,
  suppliers?: supplierTypes[] | null
}

export type registrationFormUserTypes = {
  user_type: string,
  user_first_name: string,
  user_last_name: string,
  email: string,
  password: string,
  rest_address?: string,
  rest_city?: string,
  rest_name?: string,
  rest_phone_number?: string
  rest_lat?: string,
  rest_lng?: string,
  sup_address?: string,
  sup_city?: string,
  sup_name?: string,
  sup_phone_number?: string,
  sup_lat?: string,
  sup_lng?: string,
}


export type registeredUserTypes = {
  user: simpleUser,
  newRestaurant?: restaurantTypes | null,
  newSupplier?: supplierTypes | null
}

// export type BaseUser = {
//   user: simpleUser;
// }

// //extending base type to include restaurant or supplier
// export type UserWithRestaurants = BaseUser & { restaurants: restaurantTypes[] }
// export type UserWithSupplier = BaseUser & { supplier: supplierTypes[] }