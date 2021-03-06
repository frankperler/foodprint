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
import { userContext } from '../../../contexts/user-context'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { useContext } from 'react';


type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isOwner: boolean;
  setIsOwner: React.Dispatch<React.SetStateAction<boolean>>;
}

const spinnerStyle = css`
display: block;
margin: 0 auto;
color: #36D7B7;
transform: translateY(20%);
`;

export const ProfileSupplierDashboard = ({ loading, setLoading, isOwner, setIsOwner }: Props): JSX.Element => {

  const { stateUser } = useContext(userContext);
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
  let supplierId = 'no id';

  // function isUserOwner(): boolean {
  //   if (params.id) return false
  //   else return true
  // }

  useEffect(() => {
    setLoading(true)
    if (params.id) {
      supplierId = params.id
      setIsOwner(false)
    } else {
      supplierId = (stateUser.suppliers![0].id).toString();
      setIsOwner(true)
    }
    getSupplierById(supplierId)
      .then((supplier) => {
        setSupplierItem(supplier)
        setRoundedEcoScore(Math.round(supplier.sup_eco_score / 0.5) * 0.5)
        setGreenTechObj(JSON.parse(supplier.sup_greenTech[0]))
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
              <TextDetails>{supplierItem.sup_address}</TextDetails>
              <TextDetails>{supplierItem.sup_phone_number}</TextDetails>
            </InfoArea>
            <SupplierDescription supplier={supplierItem} isOwner={isOwner} />
            <ProfileDetails>
              <Technology supplier={supplierItem} greenTechObj={greenTechObj} isOwner={isOwner} />
              <ProductsList supplier={supplierItem} />
              <RestaurantList supplier={supplierItem} isOwner={isOwner} />
            </ProfileDetails>
          </ProfileSupplierGridContainer>
      }
    </>
  )
}