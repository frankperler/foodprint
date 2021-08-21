import React, { useState } from 'react'
import { GridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './restaurant-description'
import { SuppliersList } from './profile-supplier-list'
import { InfoArea, InteriorArea } from '../profile-styled-components/profile.style';
// import { restos } from '../../../mock'
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getRestaurantById } from '../../../services/RestaurantService'
import { restaurantTypes } from '../../../types/restaurant-types'

export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

  const params: { id: string } = useParams()
  const [restItem, setRestItem] = useState<restaurantTypes>()

  useEffect(() => {
    getRestaurantById(params.id).then((data: restaurantTypes) => {
      setRestItem(data)
    })
  }, [])

  return (
    <GridContainer>
      <Photo>
        <RestoCover src={restItem && restItem.rest_picture} />
      </Photo>
      <InfoArea>
        <InteriorArea>
          <h1>{restItem && restItem.rest_name}</h1>
          <h4>{restItem && restItem.rest_address}</h4>
          <RestStarRating restaurant={restItem} />
          <h4>{restItem && restItem.opening_hours}</h4>
        </InteriorArea>
      </InfoArea>
      <RestaurantDescription />
      <ProfileDetails>
        <SuppliersList />
      </ProfileDetails>
    </GridContainer>
  )
}