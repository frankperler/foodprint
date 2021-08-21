import React, { useReducer } from 'react'
import { EcoLeafContainer, InfoArea, InteriorArea } from '../profile-styled-components/profile.style';
import { EcoLeaf, ProfileGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './Technology'
import { ProductsList } from './ProductsList'
import { suppliers } from '../../../mock';
import { Popup } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css'

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  return (
    <ProfileGridContainer>
      <RestoCover src={suppliers[2].sup_picture} />
      <InfoArea>
        <InteriorArea>
          <h1>{suppliers[2].sup_name}</h1>
          <h3>{suppliers[2].sup_address}</h3>
          <h3>{suppliers[2].sup_phone_number}</h3>
          <Popup content='Learn more about how to improve your eco-score by visiting our eco page' trigger={<EcoLeafContainer>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
          </EcoLeafContainer>} />
          <h3>Tons of CO2/mo</h3>
        </InteriorArea>
      </InfoArea>
      <ProfileDetails>
        <SupplierDescription></SupplierDescription>
        <Technology></Technology>
        <ProductsList></ProductsList>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </ProfileGridContainer>
  )
}