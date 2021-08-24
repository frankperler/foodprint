import React, { useState } from 'react'
import { ProfileRestaurantGridContainer, RestoCover, ProfileName, Day } from '../profile-styled-components/profile.style'
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
import { LoadSpinner } from '../../LoadSpinner'


type Props = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileRestaurantDashboard = ({loading, setLoading}: Props): JSX.Element => {

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
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div>
    { loading ? <LoadSpinner></LoadSpinner> :
    <ProfileRestaurantGridContainer>
      <RestoCover src={restItem.rest_picture} />
      <InfoArea>
        <RestEcoRating restaurant={restItem}></RestEcoRating>
        <ProfileName fontColor="#FF686B">{restItem.rest_name}</ProfileName>
        <RestStarRating restaurant={restItem} />
        <Website href={restItem.rest_website}>Visit website</Website>
        <h4>{restItem.rest_address}</h4>
        <h4>{restItem.rest_phone_number}</h4>
        <h4>{restItem.opening_hours.map(day =>
          <Day>{day}<br /></Day>
        )}
        </h4>
      </InfoArea>
      <RestaurantDescription restaurant={restItem} />
      <ProfileDetails>
        <SuppliersList restaurant={restItem} />
      </ProfileDetails>
    </ProfileRestaurantGridContainer >
    
    }
  </div>
  )
}