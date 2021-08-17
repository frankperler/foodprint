import { filterTypes, filterAction } from '../types/filter-types'

export const filterState: filterTypes = {
  ecoScore: 0,
  distance: 0,
  restaurantType: [],
  mealType: [],
  foodType: [],
}

export const filterReducers = (state: filterTypes, action: filterAction): filterTypes => {
  if (action.type === 'eco-score-change') {
    return {
      ...state,
      ecoScore: action.payload
    }
  }

  if (action.type === 'distance-change') {
    return {
      ...state,
      distance: action.payload
    }
  }

  if (action.type === 'restaurant-type-change') {
    return {
      ...state,
      restaurantType: action.payload
    }
  }

  if (action.type === 'meal-type-change') {
    return {
      ...state,
      mealType: action.payload
    }
  }

  if (action.type === 'food-type-change') {
    return {
      ...state,
      foodType: action.payload
    }
  }

  return state
}