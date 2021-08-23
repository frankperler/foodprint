import React, { useState } from 'react'
import { EcoLeafContainer, InfoArea } from '../profile-styled-components/profile.style';
import { EcoLeaf, ProfileGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './Technology'
import { ProductsList } from './supplier-production-list'
import { suppliers } from '../../../mock';
import { Popup } from 'semantic-ui-react';
import { supplierTypes } from '../../../types';
import { useParams } from 'react-router';

export const ProfileSupplierDashboard: React.FunctionComponent = () => {

  const [supplierItem, setSupplierItem] = useState<supplierTypes>(
    {
      id: 0,
      sup_name: "",
      sup_address: "",
      sup_city: "",
      sup_phone_number: "",
      sup_lat: 0,
      sup_lng: 0,
      sup_website: "",
      sup_eco_score: 0,
      sup_description: "",
      sup_picture: "",
      sup_greenTech: [],
      sup_energy: [],
      sup_vehicles: "",
      UserId: 0,
      Restaurants: [],
      Productions: []
    }
  )

  const params: { id: string } = useParams()

  // useEffect(() => {
  //   getRestaurantById(params.id)
  //     .then((restaurant) => {
  //       setRestItem(restaurant)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])


  return (
    <ProfileGridContainer>
      <RestoCover src={suppliers[2].sup_picture} />
      <InfoArea>
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