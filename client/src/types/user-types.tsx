import { restaurantTypes } from "./restaurant-types"
import { supplierTypes } from "./supplier-types"

export type loginTypes = {
  email: string,
  password: string,
}

export type userTypes = {
  user_type: string,
  user_first_name: string,
  user_last_name: string,
  rest_address?: string,
  rest_city?: string, 
  rest_name?: string,
  rest_phone_number?: string,
  sup_address?: string, 
  sup_city?: string, 
  sup_name?: string,
  sup_phone?: string
  restaurants?: restaurantTypes[],
  suppliers?: supplierTypes[],
}
