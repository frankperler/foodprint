import { filterTypes, filterAction, searchBarTypes, searchBarAction } from '../types/filter-types'

export const filterState: filterTypes = {
  ecoScore: 0,
  distance: 0,
  restaurantType: [],
  mealType: [],
  foodType: [],
  bio: false,
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

  if (action.type === 'bio-change') {
    return {
      ...state,
      bio: action.payload
    }
  }
  if (action.type === 'reset-to-default') {
    return filterState 
  }

  return state
}


export const searchBarState: searchBarTypes = {
  city: ""
}

export const searchBarReducers = (state: searchBarTypes, action: searchBarAction) => {
  switch(action.type) {
    case 'city-change':
      return {
        city: action.payload
      }
  }
}