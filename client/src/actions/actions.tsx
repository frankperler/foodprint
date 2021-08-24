import { restaurantTypes } from '../types/restaurant-types';
import { supplierTypes } from '../types/supplier-types';
import { userTypes } from '../types';
import { registeredUserTypes } from '../types/user-types';

export type supplierAction = {
  type: 'FETCH_ALL_SUPPLIER',
  payload: supplierTypes[]
}

export type restaurantAction = {
  type: 'FETCH_ALL_RESTAURANT' | 'FETCH_FILTERED_RESTAURANT',
  payload: restaurantTypes[]
}

export type userLoginAction = {
  type: 'LOGIN',
  payload: userTypes
}

export type userLogoutAction = {
  type: 'LOGOUT'
}

export type registerAction = {
  type: 'REGISTER',
  payload: registeredUserTypes
}

