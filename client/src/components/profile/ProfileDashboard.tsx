import React, { useReducer } from 'react'
import { FilterArea } from '../dashboard/filters/filters-area'
import { GridContainer } from '../dashboard/grid-container'
import { EcoScoreSlider } from '../dashboard/filters/eco-score-slider'
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'
import { Photo } from './profile-styled-components/profile.style'

export const ProfileDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo></Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <FilterArea>
          <EcoScoreSlider />
        </FilterArea>
      </filterContext.Provider>
    </GridContainer>
  )
}