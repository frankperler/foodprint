import { supplierTypes } from "../types/supplier-types";
import { supplierAction } from '../actions/actions';


export const supplierReducers = (supplierState: supplierTypes[], action: supplierAction): supplierTypes[] => {
  switch (action.type) {
    case 'FETCH_ALL_SUPPLIER':
      return [...action.payload]
      break;
    case 'FETCH_FILTERED_SUPPLIER':
      return action.payload
      break;
    default: return supplierState
  }
}

export const supplierState: supplierTypes[] = []