import React, { useReducer } from 'react'
import { FilterArea } from '../../dashboard/filters/filters-area'
import { GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { Description } from '../Description'
import { RestaurantList } from '../restaurant/RestaurantList'

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo></Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <FilterArea>
          <div>Supplier name</div>
          <div>City</div>
          <div>Eco score</div>
          <div>Tons of CO2 emissions/month</div>
          <button>Edit profile</button>
        </FilterArea>
      </filterContext.Provider>
      <ProfileDetails>
        <Description></Description>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </GridContainer>
  )
}