import React, { useState, useEffect } from 'react'
import { InfoArea, ProfileName } from '../profile-styled-components/profile.style';
import { Website, ProfileSupplierGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './Technology'
import { ProductsList } from './supplier-production-list'
import { supplierTypes } from '../../../types';
import { useParams } from 'react-router';
import { getSupplierById } from '../../../services/SupplierService';
import { SupplStarRating } from '../../dashboard/results/suppliers-star-rating';

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

  useEffect(() => {
    getSupplierById(params.id)
      .then((supplier) => {
        setSupplierItem(supplier)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <ProfileSupplierGridContainer>
      <RestoCover src={supplierItem.sup_picture} />
      <InfoArea>
        <SupplStarRating supplier={supplierItem} />
        <ProfileName fontColor="#FF686B">{supplierItem.sup_name}</ProfileName>
        <h4>{supplierItem.sup_address}</h4>
        <h4>{supplierItem.sup_phone_number}</h4>
        <h3>Tons of CO2/mo</h3>
        <Website href={supplierItem.sup_website}>Visit website</Website>
      </InfoArea>
      <ProfileDetails>
        <SupplierDescription></SupplierDescription>
        <Technology></Technology>
        <ProductsList></ProductsList>
        <RestaurantList></RestaurantList>
      </ProfileDetails>
    </ProfileSupplierGridContainer>
  )
}