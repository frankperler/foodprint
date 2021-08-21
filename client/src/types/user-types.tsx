import { restaurantTypes } from "./restaurant-types"
import { supplierTypes } from "./supplier-types"

export type loginTypes = {
  email: string,
  password: string,
}

type simpleUser = {
  user_type: string,
  user_first_name: string,
  user_last_name: string,
  user_picture: string,
}

export type userTypes = {
  user: simpleUser,
  restaurants?: restaurantTypes[],
  suppliers?: supplierTypes[],
}
