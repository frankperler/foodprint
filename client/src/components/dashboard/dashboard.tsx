import React, { useReducer } from 'react'
import styled from 'styled-components'
import { FilterArea } from './filters/filters-area'
import { GridContainer } from './grid-container'
import { Map } from './map/map'
import { MapArea } from './map/map-area'
import { EcoScoreSlider } from './filters/eco-score-slider'
import { DistanceSlider } from './filters/distance-slider'
import { RestaurantTypeSelect } from './filters/restaurant-type-select'
import { MealTypeSelect } from './filters/meal-type-select'
import { HomePageButton } from '../navbar/navbar-styled-components/homepagebutton'
import { ResultsArea } from './results/results-area'
import { ResultsLists } from './results/results-list'
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'
import { restaurantReducers, restaurantState } from '../../reducers/restaurants-reducers'
import { restaurantContext } from '../../contexts/restaurants-contexts'

export const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink:1;
  margin-top: 1rem;
  padding-bottom:0.5rem;
`;

export const Dashboard: React.FunctionComponent = () => {

  const [stateRestaurant, dispatchRestaurant] = useReducer(restaurantReducers, restaurantState)
  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)

  return (
    <restaurantContext.Provider value={{ stateRestaurant, dispatchRestaurant }}>
      <filterContext.Provider value={{ stateFilter, dispatchFilter }}>
        <GridContainer>
          <MapArea>
            <Map />
          </MapArea>
          <FilterArea>
            <EcoScoreSlider />
            <DistanceSlider />
            <RestaurantTypeSelect />
            <MealTypeSelect />
            <ButtonStyles>
              <HomePageButton>
                Search!
              </ HomePageButton>
            </ButtonStyles>
          </FilterArea>
          <ResultsArea>
            <ResultsLists />
          </ResultsArea>
        </GridContainer>
      </filterContext.Provider>
    </restaurantContext.Provider>
  )
}
