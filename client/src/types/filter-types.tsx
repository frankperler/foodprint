export type dropdownType = {
  value: number
  label: string
}

export type filterTypes = {
  ecoScore: number,
  distance: number,
  restaurantType?: string[],
  mealType?: string[],
  foodType?: string[],
}

export type filterActionArray = {
  type: 'restaurant-type-change' | 'meal-type-change' | 'food-type-change',
  payload: string[];
}

export type filterActionNumber = {
  type: 'eco-score-change' | 'distance-change',
  payload: number;
}

export type filterAction = filterActionNumber | filterActionArray