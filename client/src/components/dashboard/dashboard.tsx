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
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'

export const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink:1;
  margin-top: 1rem;
  padding-bottom:0.5rem;
`;

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
          <MealTypeSelect />
          <ButtonStyles>
            <HomePageButton>
              Search!
            </ HomePageButton>
          </ButtonStyles>
        </FilterArea>
        <ResultsArea>

        </ResultsArea>
      </GridContainer>
    </filterContext.Provider>
  )
}
