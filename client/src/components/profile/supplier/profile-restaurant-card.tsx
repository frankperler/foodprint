import React from 'react';
import { RestoImg } from '../profile-styled-components/profile.style';
import { restaurantTypes } from '../../../types/restaurant-types';
interface Props {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <div>
      <RestoImg src={restaurant.rest_picture}></RestoImg>
      {restaurant.rest_name}
    </div>
  )
}