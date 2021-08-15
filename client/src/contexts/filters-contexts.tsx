import React from "react";
import { filterState } from '../reducers/filters-reducers'
import { filterAction, filterTypes } from '../types/filter-types'

export const filterContext = React.createContext<{
  state: filterTypes;
  dispatch: React.Dispatch<filterAction>;
}>({
  state: filterState,
  dispatch: () => undefined,
});