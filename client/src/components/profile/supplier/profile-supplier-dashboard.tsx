import React, { useState, useEffect } from 'react'
import { InfoArea, ProfileName, TextDetails } from '../profile-styled-components/profile.style';
import { Website, ProfileSupplierGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './supplier-technology'
import { ProductsList } from './supplier-production-list'
import { supplierTypes } from '../../../types';
import { useParams } from 'react-router';
import { getSupplierById } from '../../../services/SupplierService';
import { SupplierEcoRating } from '../../dashboard/results/suppliers-eco-rating';

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

  const [roundedEcoScore, setRoundedEcoScore] = useState(0)
  const [greenTechObj, setGreenTechObj] = useState<{
    "Plastic_Free": boolean,
    "Biodynamic": boolean,
    "Biofuels": boolean,
    "No_Growth_Hormones": boolean,
    "No_Pesticides": boolean,
    "Non_GMO": boolean,
    "Organic": boolean,
    "Water_Recycling": boolean,
  }>({
    "Plastic_Free": false,
    "Biodynamic": false,
    "Biofuels": false,
    "No_Growth_Hormones": false,
    "No_Pesticides": false,
    "Non_GMO": false,
    "Organic": false,
    "Water_Recycling": false,
  })
  const params: { id: string } = useParams()

  useEffect(() => {
    getSupplierById(params.id)
      .then((supplier) => {
        setSupplierItem(supplier)
        setRoundedEcoScore(Math.round(supplier.sup_eco_score / 0.5) * 0.5)
        setGreenTechObj(JSON.parse(supplier.sup_greenTech[0]))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  return (
    <ProfileSupplierGridContainer>
      <RestoCover src={supplierItem.sup_picture} />
      <InfoArea>
        <SupplierEcoRating supplier={supplierItem}></SupplierEcoRating>
        <ProfileName fontColor="#FF686B">{supplierItem.sup_name}</ProfileName>
        <Website>Visit website</Website>
        <TextDetails>{supplierItem.sup_address}</TextDetails>
        <TextDetails>{supplierItem.sup_phone_number}</TextDetails>
      </InfoArea>
      <SupplierDescription supplier={supplierItem} />
      <ProfileDetails>
        <Technology supplier={supplierItem} greenTechObj={greenTechObj} />
        <ProductsList supplier={supplierItem} />
        <RestaurantList supplier={supplierItem} />
      </ProfileDetails>
    </ProfileSupplierGridContainer>
  )
}