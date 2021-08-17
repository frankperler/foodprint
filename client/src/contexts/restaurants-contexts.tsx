import React from "react";
import { restaurantState } from "../reducers/restaurants-reducers";
import { restaurantTypes, restaurantAction } from "../types/restaurant-types";

export const restaurantContext = React.createContext<{
  stateRestaurant: restaurantTypes[];
  dispatchRestaurant: React.Dispatch<restaurantAction>;
}>({
  stateRestaurant: restaurantState,
  dispatchRestaurant: () => undefined,
});