import React, { useState, useContext } from 'react'
import { ProfileRestaurantGridContainer, RestoCover, ProfileName, Day, TextDetails } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './restaurant-description'
import { SuppliersList } from './profile-supplier-list'
import { InfoArea, Website } from '../profile-styled-components/profile.style';
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getRestaurantById } from '../../../services/RestaurantService'
import { restaurantTypes } from '../../../types/restaurant-types'
import { RestEcoRating } from '../../dashboard/results/restaurants-eco-rating'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import { userContext } from '../../../contexts/user-context';


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

export const ProfileRestaurantDashboard = ({ loading, setLoading, isOwner, setIsOwner }: Props): JSX.Element => {

  const { stateUser } = useContext(userContext);
  const [restItem, setRestItem] = useState<restaurantTypes>(
    {
      id: 0,
      place_id: "",
      rest_name: "",
      rest_types: [],
      rest_meal_type: [],
      rest_address: "",
      rest_city: "",
      rest_phone_number: "",
      rest_lat: 0,
      rest_lng: 0,
      opening_hours: [],
      rest_price_level: 0,
      rest_rating: 0,
      rest_website: "",
      rest_eco_score: 0,
      rest_description: "",
      rest_picture: "",
      UserId: 0,
      Suppliers: []
    }
  )

  const params: { id: string } = useParams()
  let restaurantId = 'no id';

  // function isUserOwner(): boolean {
  //   if (params.id) return false
  //   else return true
  // }

  useEffect(() => {
    if (params.id) {
      restaurantId = params.id
      setIsOwner(false)
    } else {
      restaurantId = (stateUser.restaurants![0].id).toString();
      setIsOwner(true)
    }
    setLoading(true)
    getRestaurantById(restaurantId) // CAREFUL
      .then((restaurant) => {
        setRestItem(restaurant)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {loading ? <PuffLoader css={spinnerStyle} size="400px" color="#36D7B7"></PuffLoader> :
        <ProfileRestaurantGridContainer>
          <RestoCover src={restItem.rest_picture} />
          <InfoArea>
            <RestEcoRating restaurant={restItem}></RestEcoRating>
            <ProfileName fontColor="#FF686B">{restItem.rest_name}</ProfileName>
            <RestStarRating restaurant={restItem} />
            <Website href={restItem.rest_website}>Visit website</Website>
            <TextDetails>{restItem.rest_address}</TextDetails>
            <TextDetails>{restItem.rest_phone_number}</TextDetails>
            <TextDetails>{restItem.opening_hours && restItem.opening_hours.map(day =>
              <Day>{day}<br /></Day>
            )}
            </TextDetails>
          </InfoArea>
          <RestaurantDescription restaurant={restItem} isOwner={isOwner} />
          <ProfileDetails>
            <SuppliersList restaurant={restItem} isOwner={isOwner} />
          </ProfileDetails>
        </ProfileRestaurantGridContainer >
      }
    </div>
  )
}