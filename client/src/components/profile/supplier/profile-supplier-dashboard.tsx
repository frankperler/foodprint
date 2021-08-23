import React, { useState, useEffect } from 'react'
import { InfoArea, ProfileName } from '../profile-styled-components/profile.style';
import { Website, ProfileSupplierGridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { SupplierDescription } from './supplier-description'
import { RestaurantList } from './profile-restaurant-list'
import { Technology } from './supplier-technology'
import { ProductsList } from './supplier-production-list'
import { supplierTypes } from '../../../types';
import { useParams } from 'react-router';
import { getSupplierById } from '../../../services/SupplierService';
import { SupplStarRating } from '../../dashboard/results/suppliers-star-rating';
import { EcoLeaf } from '../profile-styled-components/profile.style';


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
  const params: { id: string } = useParams()

  useEffect(() => {
    getSupplierById(params.id)
      .then((supplier) => {
        setSupplierItem(supplier)
        setRoundedEcoScore(Math.round(supplier.sup_eco_score / 0.5) * 0.5)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log(supplierItem)

  return (
    <ProfileSupplierGridContainer>
      <RestoCover src={supplierItem.sup_picture} />
      <InfoArea>
        {(
          () => {
            switch (roundedEcoScore) {
              case 0.5:
                return <div><EcoLeaf src="/images/eco_half_leaf.svg"><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></EcoLeaf></div>
              case 1.0:
                return <div><EcoLeaf src="/images/eco_half_leaf.svg"><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></EcoLeaf></div>
              case 1.5:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
              case 2.0:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
              case 2.5:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
              case 3.0:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
              case 3.5:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf></div>
              case 4.0:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
              case 4.5:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_half_leaf.svg"></EcoLeaf></div>
              case 5.0:
                return <div><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf><EcoLeaf src="/images/eco_full_leaf.svg"></EcoLeaf></div>
              default:
                return <div><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf><EcoLeaf src="/images/eco_unfilled.svg"></EcoLeaf></div>
            }
          })
          ()}
        <ProfileName fontColor="#FF686B">{supplierItem.sup_name}</ProfileName>
        <Website>Visit website</Website>
        <h4>{supplierItem.sup_address}</h4>
        <h4>{supplierItem.sup_phone_number}</h4>
      </InfoArea>
      <SupplierDescription supplier={supplierItem} />
      <ProfileDetails>
        <Technology supplier={supplierItem} />
        <ProductsList supplier={supplierItem} />
        <RestaurantList supplier={supplierItem} />
      </ProfileDetails>
    </ProfileSupplierGridContainer>
  )
}