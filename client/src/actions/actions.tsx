import { restaurantTypes } from '../types/restaurant-types';
import { supplierTypes } from '../types/supplier-types';

export type fetchAllAction = {
  type: 'FETCH_ALL',
  payload: restaurantTypes[] | supplierTypes[];
}
