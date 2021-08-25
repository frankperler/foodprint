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
import { SupplierEcoRating } from '../../dashboard/results/suppliers-eco-rating';

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { LoadSpinner } from '../../LoadSpinner'


type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const spinnerStyle = css`
display: block;
margin: 0 auto;
color: #36D7B7;
transform: translateY(20%);
`;

export const ProfileSupplierDashboard = ({loading, setLoading}: Props): JSX.Element => {


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
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
    { 
      loading ? <PuffLoader css={spinnerStyle} size="400px" color="#36D7B7"></PuffLoader> :
    <ProfileSupplierGridContainer>
      <RestoCover src={supplierItem.sup_picture} />
      <InfoArea>
        <SupplierEcoRating supplier={supplierItem}></SupplierEcoRating>
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
  }
  </>
  )
}