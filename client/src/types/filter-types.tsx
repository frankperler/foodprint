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
  bio?: boolean
}

export type filterActionArray = {
  type: 'restaurant-type-change' | 'meal-type-change' | 'food-type-change' | 'reset-to-default';
  payload?: string[];
}

export type filterActionNumber = {
  type: 'eco-score-change' | 'distance-change',
  payload: number;
}

export type filterActionBool = {
  type: 'bio-change'
  payload: boolean;
}

export type filterAction = filterActionNumber | filterActionArray | filterActionBool


export type searchBarTypes = {
  city: string  /* | number | readonly string[] | undefined */
}

export type searchBarAction = {
  type: 'city-change',
  payload: string
}