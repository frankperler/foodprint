import React from 'react';
import { RestoImg } from '../profile-styled-components/profile.style';

type Props = {
  resto: {
    place_id: string;
    rest_picture: string;
    rest_meal_type: string;
    rest_types: string[];
    rest_lat: number;
    rest_lng: number;
    rest_price_level: number;
    rest_name: string;
    rest_rating: number;
    rest_eco_score: string;
    rest_website: string;
},
key: string;
}

export const RestaurantCard = ({resto}: Props): JSX.Element => {


  return (
    <div>
      <RestoImg src={resto.rest_picture}></RestoImg>
      {resto.rest_name}
    </div>
  )
}