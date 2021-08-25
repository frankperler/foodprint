import React from "react";
import { filterState, searchBarState } from '../reducers/filters-reducers'
import { filterAction, filterTypes, searchBarAction, searchBarTypes } from '../types/filter-types'

export const filterContext = React.createContext<{
  stateFilter: filterTypes;
  dispatchFilter: React.Dispatch<filterAction>;
}>({
  stateFilter: filterState,
  dispatchFilter: () => undefined,
});

export const searchBarContext = React.createContext<{
  stateSearchBar: searchBarTypes;
  dispatchSearchBar: React.Dispatch<searchBarAction>
}>({
  stateSearchBar: searchBarState,
  dispatchSearchBar: () => undefined,
})