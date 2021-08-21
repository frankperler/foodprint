import { ResultsCardStyles } from '../results/results-styled-components/results-card-styles';
import { RestStarRating } from '../results/restaurants-star-rating';
import { restaurantTypes } from '../../../types/restaurant-types';
import { Link } from "react-router-dom";
import { PinCardContainer } from './pin-card-container'

interface Props {
  restaurant: restaurantTypes
}

export const PinRestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <PinCardContainer>
      <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{restaurant.rest_name}</div>
        <div className="foodtype">{
          restaurant.rest_types.length == 1 ? `${restaurant.rest_types[0]}`
            : `${restaurant.rest_types[0]}, ${restaurant.rest_types[1]}`}</div>
        <RestStarRating restaurant={restaurant} />
      </Link>
    </PinCardContainer >
  )
}