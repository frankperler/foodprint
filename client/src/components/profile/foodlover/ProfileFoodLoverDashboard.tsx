import React, { useReducer } from 'react'
import { FilterArea } from '../../dashboard/filters/filters-area'
import { GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantList } from '../supplier/RestaurantList'

export const ProfileFoodLoverDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo></Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <FilterArea>
          <button>Edit profile</button>
        </FilterArea>
      </filterContext.Provider>
      <ProfileDetails>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </GridContainer>
  )
}