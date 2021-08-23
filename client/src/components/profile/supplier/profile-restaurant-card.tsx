import React from 'react';
import { RestoImg } from '../profile-styled-components/profile.style';
import { restaurantTypes } from '../../../types/restaurant-types';
import { RestEcoRating } from '../../dashboard/results/restaurants-eco-rating';
import { RestStarRating } from '../../dashboard/results/restaurants-star-rating';


interface Props {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <div>
      <RestoImg src={restaurant.rest_picture}></RestoImg>
      {restaurant.rest_name}
      <RestEcoRating restaurant={restaurant}></RestEcoRating>
      <RestStarRating restaurant={restaurant}></RestStarRating>

    </div>
  )
}