import { ResultsCardStyles } from './results-card-styles';
import { RestStarRating } from './restaurants-star-rating'
import { CardContainer } from './results-card-container';
import { restaurantTypes } from '../../../types/restaurant-types';
import { Link } from "react-router-dom";

interface Props {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={restaurant.rest_picture} >
      </ResultsCardStyles>
      <Link to={`/restaurant/${restaurant.place_id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{restaurant.rest_name}</div>
        <div className="foodtype">{restaurant.rest_types[0]}</div>
        <RestStarRating restaurant={restaurant} />
      </Link>
    </CardContainer >
  )
}