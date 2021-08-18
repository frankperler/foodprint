import React, { useReducer } from 'react'
import { EcoLeafContainer, InfoArea, InfoHeader, InteriorArea } from '../profile-styled-components/profile.style';
import { EcoLeaf, GridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { filterReducers, filterState } from '../../../reducers/filters-reducers'
import { filterContext } from '../../../contexts/filters-contexts'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './SupplierDescription'
import { RestaurantList } from './RestaurantList'
import { Technology } from './Technology'
import { ProductsList } from './ProductsList'
import { suppliers } from '../../../mock';
import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)


  return (
    <GridContainer>
       <Photo>
        <RestoCover src={suppliers[2].sup_picture}/>
      </Photo>
      {/* <filterContext.Provider value={{ state, dispatch }}> */}
<<<<<<< HEAD
        <InfoArea>
          <InteriorArea>
          <InfoHeader>{suppliers[2].sup_name}</InfoHeader>
          <h3>{suppliers[2].sup_address}</h3>
          <h3>{suppliers[2].sup_phone_number}</h3>
=======
      <InfoArea>
        <InteriorArea>
          <InfoHeader>Supplier name</InfoHeader>
          <InfoHeader>City</InfoHeader>
>>>>>>> efd483a9c33b81b250e826a375f4db73250323d5
          <Popup content='Learn more about how to improve your eco-score by visiting our eco page' trigger={<EcoLeafContainer>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
            <EcoLeaf src="/images/eco_leaf.svg"></EcoLeaf>
          </EcoLeafContainer>} />
<<<<<<< HEAD
          <h3>Tons of CO2/mo</h3>
          </InteriorArea>
        </InfoArea>
=======
          <InfoHeader>Tons of CO2/mo</InfoHeader>
        </InteriorArea>
      </InfoArea>
>>>>>>> efd483a9c33b81b250e826a375f4db73250323d5
      {/* </filterContext.Provider> */}
      <ProfileDetails>
        <SupplierDescription></SupplierDescription>
        <Technology></Technology>
        <ProductsList></ProductsList>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </GridContainer>
  )
}