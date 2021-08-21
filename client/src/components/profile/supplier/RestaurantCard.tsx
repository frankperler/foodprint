import React from 'react';
import { RestoImg } from '../profile-styled-components/profile.style';
import { restaurantTypes } from '../../../types/restaurant-types';

interface Props {
  resto: restaurantTypes
}

export const RestaurantCard = ({ resto }: Props) => {

  return (
    <div>
      <RestoImg src={resto.rest_picture}></RestoImg>
      {resto.rest_name}
    </div>
  )
}