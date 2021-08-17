import React, { useReducer } from 'react'
import { InfoArea, InteriorArea } from '../profile-styled-components/profile.style';
import { ButtonWrap, EcoLeaf, EditProfileButton, GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './SupplierDescription'
import { RestaurantList } from './RestaurantList'
import { Technology } from './Technology'
import { ProductsList } from './ProductsList'

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  const [state, dispatch] = useReducer(filterReducers, filterState)

  return (
    <GridContainer>
      <Photo>Photo</Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <InfoArea>
          <InteriorArea>
          <div>Supplier name</div>
          <div>City</div>
          <div>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
          </div>
          <div>Tons of CO2 emissions/month</div>
          </InteriorArea>
        </InfoArea>
      </filterContext.Provider>
      <ProfileDetails>
        <ButtonWrap>
          <EditProfileButton>Edit profile</EditProfileButton>
        </ButtonWrap>
        <SupplierDescription></SupplierDescription>
        <Technology></Technology>
        <ProductsList></ProductsList>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </GridContainer>
  )
}