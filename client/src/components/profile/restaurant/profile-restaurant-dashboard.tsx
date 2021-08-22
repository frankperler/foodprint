import React, { useState } from 'react'
import { ProfileGridContainer, RestoCover, ProfileName, Day } from '../profile-styled-components/profile.style'
import { ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './restaurant-description'
import { SuppliersList } from './profile-supplier-list'
import { InfoArea } from '../profile-styled-components/profile.style';
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getRestaurantById } from '../../../services/RestaurantService'
import { restaurantTypes } from '../../../types/restaurant-types'


export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

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

  useEffect(() => {
    getRestaurantById(params.id)
      .then((restaurant) => {
        setRestItem(restaurant)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <ProfileGridContainer>
      <RestoCover src={restItem.rest_picture} />
      <InfoArea>
        <ProfileName>{restItem.rest_name}</ProfileName>
        <h4>{restItem.rest_address}</h4>
        <RestStarRating restaurant={restItem} />
        <h4>{restItem.opening_hours.map(day =>
          <Day>{day}<br /></Day>
        )}
        </h4>
      </InfoArea>
      <RestaurantDescription restaurant={restItem} />
      <ProfileDetails>
        <SuppliersList />
      </ProfileDetails>
    </ProfileGridContainer>
  )
}