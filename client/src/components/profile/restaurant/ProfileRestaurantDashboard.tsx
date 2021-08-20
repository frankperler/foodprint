import React, { useReducer, useState } from 'react'
import { GridContainer, RestoCover } from '../profile-styled-components/profile.style'
import { Photo, ProfileDetails } from '../profile-styled-components/profile.style'
import { RestaurantDescription } from './RestaurantDescription'
import { SuppliersList } from './SuppliersList'
import { EcoLeafContainer, InfoArea, InfoHeader, InteriorArea } from '../profile-styled-components/profile.style';
import { EcoLeaf } from '../profile-styled-components/profile.style'
import { Popup } from 'semantic-ui-react'
import { restos } from '../../../mock'
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating'

export const ProfileRestaurantDashboard: React.FunctionComponent = () => {

  const [restItem, setRestItem] = useState([])
  const [suppliersArray, setSuppliersArray] = useState([])

  // getOneRestaurant() function based on ID params from route to create inside a useEffect on component mount
  // getSuppliers() function based on restaurant ID from route (params) inside a useEffect

  return (
    <GridContainer>
      <Photo>
        <RestoCover src={restos[2].rest_picture} />
      </Photo>
      <InfoArea>
        <InteriorArea>
          <InfoHeader>{restos[2].rest_name}</InfoHeader>
          <h4>{restos[2].rest_address}</h4>
          <RestStarRating restaurant={restos[2]} />
          <h4>{restos[2].opening_hours}</h4>
        </InteriorArea>
      </InfoArea>
      <ProfileDetails>
        <RestaurantDescription></RestaurantDescription>
        <SuppliersList></SuppliersList>
      </ProfileDetails>
    </GridContainer>
  )
}