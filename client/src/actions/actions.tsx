import { restaurantTypes } from '../types/restaurant-types';
import { supplierTypes } from '../types/supplier-types';
import { userTypes } from '../types';

export type supplierAction = {
  type: 'FETCH_ALL_SUPPLIER',
  payload: supplierTypes[]
}

export type restaurantAction = {
  type: 'FETCH_ALL_RESTAURANT',
  payload: restaurantTypes[]
}

export type userLoginAction = {
  type: 'LOGIN',
  payload: userTypes
}

