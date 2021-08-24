import { restaurantTypes } from "../types/restaurant-types"
import { restaurantAction } from '../actions/actions';

export const restaurantReducers = (restaurantState: restaurantTypes[], action: restaurantAction): restaurantTypes[] => {
  switch (action.type) {
    case 'FETCH_ALL_RESTAURANT':
      return [...action.payload]
      break;
    case 'FETCH_FILTERED_RESTAURANT':
      return action.payload
      break;
    default: return restaurantState;
  }
}

export const restaurantState: restaurantTypes[] = []