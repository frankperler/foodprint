import { filterTypes } from '../types/filter-types'

export const filterState: filterTypes = {
  ecoScore: 0,
  distance: 0,
  restaurantType: [],
  mealType: [],
  foodType: [],
}

export function reducers(state: filterState, action: any) {
  switch (action.type) {
    case 'eco-score-change':
      return {
        ...state,
        ecoScore: action.payload
      }
  }
}