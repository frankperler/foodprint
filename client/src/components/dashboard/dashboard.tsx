import React, { useReducer } from 'react'
import { FilterArea } from './filters/filters-area'
import { GridContainer } from './grid-container'
import { Map } from './map/map'
import { MapArea } from './map/map-area'
import { EcoScore } from './filters/eco-score-filter'
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'

export const Dashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <MapArea>
        <Map />
      </MapArea>
      <filterContext.Provider value={{ state, dispatch }}>
        <FilterArea>
          <EcoScore />
        </FilterArea>
      </filterContext.Provider>
    </GridContainer>
  )
}
