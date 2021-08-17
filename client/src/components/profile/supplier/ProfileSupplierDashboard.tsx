import React, { useReducer } from 'react'
import { EcoLeafContainer, InfoArea, InfoHeader, InteriorArea } from '../profile-styled-components/profile.style';
import { ButtonWrap, EcoLeaf, EditProfileButton, GridContainer } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './SupplierDescription'
import { RestaurantList } from './RestaurantList'
import { Technology } from './Technology'
import { ProductsList } from './ProductsList'
import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'



export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)


  return (
    <GridContainer>
      <Photo>Photo</Photo>
      <filterContext.Provider value={{ state, dispatch }}>
        <InfoArea>
          <InteriorArea>
          <InfoHeader>Supplier name</InfoHeader>
          <InfoHeader>City</InfoHeader>
          <Popup content='Learn more about how to improve your eco-score by visiting our eco page' trigger={          <EcoLeafContainer>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
          </EcoLeafContainer>} />
          <InfoHeader>Tons of CO2/mo</InfoHeader>
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