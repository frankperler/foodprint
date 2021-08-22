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
  restaurants?: restaurantTypes[] | null,
  suppliers?: supplierTypes[] | null
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