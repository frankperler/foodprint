import React from "react";
import { filterState } from '../reducers/filters-reducers'
import { filterAction, filterTypes } from '../types/filter-types'

export const filterContext = React.createContext<{
  stateFilter: filterTypes;
  dispatchFilter: React.Dispatch<filterAction>;
}>({
  stateFilter: filterState,
  dispatchFilter: () => undefined,
});