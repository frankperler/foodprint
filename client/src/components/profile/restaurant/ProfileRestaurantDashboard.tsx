import React, { useReducer } from 'react'
import { FilterArea } from '../../dashboard/filters/filters-area'
import { GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { Description } from '../Description'
import { SuppliersList } from '../supplier/SuppliersList'

export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo></Photo>
      <filterContext.Provider value={{ stateFilter, dispatchFilter }}>
        <FilterArea>
          <div>Restaurant name</div>
          <div>City</div>
          <div>Restaurant Eco score</div>
          <button>Edit profile</button>
        </FilterArea>
      </filterContext.Provider>
      <ProfileDetails>
        <Description></Description>
        <SuppliersList></SuppliersList>
      </ProfileDetails>
    </GridContainer>
  )
}