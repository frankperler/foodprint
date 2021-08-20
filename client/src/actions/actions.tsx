import { restaurantTypes } from '../types/restaurant-types';
import { supplierTypes } from '../types/supplier-types';

export type supplierAction = {
  type: 'FETCH_ALL_SUPPLIER',
  payload: supplierTypes[];
}

export type restaurantAction = {
  type: 'FETCH_ALL_RESTAURANT',
  payload: restaurantTypes[];
}