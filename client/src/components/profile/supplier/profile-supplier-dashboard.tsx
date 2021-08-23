import React from 'react'
import { EcoLeafContainer, InfoArea } from '../profile-styled-components/profile.style';
import { EcoLeaf, ProfileGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './Technology'
import { ProductsList } from './ProductsList'
import { suppliers } from '../../../mock';
import { Popup } from 'semantic-ui-react';

const ecoScore = suppliers[2].sup_eco_score;
const roundedEcoScore = Math.round(ecoScore / 0.5) * 0.5

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  return (
    <ProfileGridContainer>
      <RestoCover src={suppliers[2].sup_picture} />
      <InfoArea>
        <h1>{suppliers[2].sup_name}</h1>
        <h3>{suppliers[2].sup_address}</h3>
        <h3>{suppliers[2].sup_phone_number}</h3>
        { roundedEcoScore === 0.5 ? <div><EcoLeaf src="/images/eco_half_leaf.svg"><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></EcoLeaf></div> 
            : roundedEcoScore === 1.0 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></EcoLeaf></div>
            : roundedEcoScore === 1.5 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            : roundedEcoScore === 2.0 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            : roundedEcoScore === 2.5 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            : roundedEcoScore === 3.0 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            : roundedEcoScore === 3.5 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf></div>
            : roundedEcoScore === 4.0 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            : roundedEcoScore === 4.5 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf></div>
            : roundedEcoScore === 5.0 ? <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf></div>
            : <div><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
      }
        {/* <Popup content='Learn more about how to improve your eco-score by visiting our eco page' trigger={<EcoLeafContainer>
          <EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf>
          <EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf>
          <EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf>
          <EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf>
        </EcoLeafContainer>} /> */}
        <h3>Tons of CO2/mo</h3>
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