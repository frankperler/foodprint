import React, { useReducer } from 'react'
import { FilterArea } from '../../dashboard/filters/filters-area'
import { GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails, EditProfileButton, ButtonWrap } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './RestaurantDescription'
import { SuppliersList } from './SuppliersList'

export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo></Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <FilterArea>
          <div>Restaurant name</div>
          <div>City</div>
          <div>Restaurant Eco score</div>
        </FilterArea>
      </filterContext.Provider>
      <ProfileDetails>
        <ButtonWrap>
          <EditProfileButton>Edit profile</EditProfileButton>
        </ButtonWrap>
        <RestaurantDescription></RestaurantDescription>
        <SuppliersList></SuppliersList>
      </ProfileDetails>
    </GridContainer>
  )
}