export type filterTypes = {
  ecoScore: number,
  distance: number,
  restaurantType?: string[],
  mealType?: string[],
  foodType?: string[],
}

type filterActionArray = {
  type: 'restaurant-type-change' | 'meal-type-change' | 'food-type-change',
  payload: string[];
}

type filterActionNumber = {
  type: 'eco-score-change' | 'distance-change',
  payload: number;
}

export type filterAction = filterActionNumber | filterActionArray;