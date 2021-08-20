import React from "react";
import { restaurantState } from "../reducers/restaurants-reducers";
import { restaurantTypes } from "../types/restaurant-types";
import { restaurantAction } from "../actions/actions";

export const restaurantContext = React.createContext<{
  stateRestaurant: restaurantTypes[];
  dispatchRestaurant: React.Dispatch<restaurantAction>;
}>({
  stateRestaurant: restaurantState,
  dispatchRestaurant: () => undefined,
});