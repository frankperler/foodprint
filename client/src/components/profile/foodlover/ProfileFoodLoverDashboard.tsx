import React, { useReducer } from 'react'
import { FilterArea } from '../../dashboard/filters/filters-area'
import { ProfileGridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantList } from '../supplier/profile-restaurant-list'

export const ProfileFoodLoverDashboard: React.FunctionComponent = () => {

  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)

  return (
    <ProfileGridContainer>
      <Photo></Photo>
      {/* <filterContext.Provider value={{ stateFilter, dispatchFilter }}> */}
      <FilterArea>
        <button>Edit profile</button>
      </FilterArea>
      {/* </filterContext.Provider> */}
      <ProfileDetails>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </ProfileGridContainer>
  )
}