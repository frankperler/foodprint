import React from 'react';
import { RestoImg } from '../profile-styled-components/profile.style';
import { restaurantTypes } from '../../../types/restaurant-types';
import { Link } from 'react-router-dom'
interface Props {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <div>
      <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }}>
        <RestoImg src={restaurant.rest_picture} />
        <h4 style={{ color: "#FFA69E" }}>{restaurant.rest_name}</h4>
      </Link>
    </div>
  )
}