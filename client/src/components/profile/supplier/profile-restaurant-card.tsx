import React from 'react';
import { restaurantTypes } from '../../../types';
import { ProfileName, SupplierCardGrid, SupplierImg, SupplierInfoInterior } from '../profile-styled-components/profile.style';
import { Link } from "react-router-dom";
import { RestEcoRating } from '../../dashboard/results/restaurants-eco-rating'
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating';

type Props = {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }} >
      <SupplierCardGrid>
        <SupplierImg src={restaurant.rest_picture}></SupplierImg>
        <SupplierInfoInterior>
          <ProfileName fontColor="#FFA69E">{restaurant.rest_name}</ProfileName>
          <RestEcoRating restaurant={restaurant} />
          <h4 style={{ color: 'black' }}>{restaurant.rest_address}</h4>
          <RestStarRating restaurant={restaurant} />
        </SupplierInfoInterior>
      </SupplierCardGrid>
    </Link>
  )
}