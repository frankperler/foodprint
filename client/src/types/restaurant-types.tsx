export type restaurantTypes = {
  place_id: string,
  rest_name: string,
  rest_types: string[],
  rest_meal_type: string[],
  rest_address: string,
  rest_phone_number: string,
  rest_lat: number,
  rest_lng: number,
  opening_hours: string[],
  rest_price_level: number,
  rest_rating: number,
  rest_website: string
  rest_eco_score: number,
  rest_description: string,
  rest_picture: string
}

export type restaurantAction = {
  type: 'any-change',
  payload: string[];
}