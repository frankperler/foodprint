import React, { useReducer } from 'react'
import { FilterArea } from './filters/filters-area'
import { GridContainer } from './grid-container'
import { Map } from './map/map'
import { MapArea } from './map/map-area'
import { EcoScoreSlider } from './filters/eco-score-slider'
import { DistanceSlider } from './filters/distance-slider'
import { RestaurantTypeSelect } from './filters/restaurant-type-select'
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'

export const Dashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <filterContext.Provider value={{ state, dispatch }}>
      <GridContainer>
        <MapArea>
          <Map />
        </MapArea>
        <FilterArea>
          <EcoScoreSlider />
          <DistanceSlider />
          <RestaurantTypeSelect />
        </FilterArea>
      </GridContainer>
    </filterContext.Provider>
  )
}
