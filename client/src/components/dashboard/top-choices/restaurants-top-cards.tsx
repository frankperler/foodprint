import { TopCardStyles } from './top-choices-styled-components/top-card-styles';
import { RestStarRating } from '../results/restaurants-star-rating'
import { TopCardContainer } from './top-choices-styled-components/top-card-container';
import { restaurantTypes } from '../../../types/restaurant-types';
import { Link } from "react-router-dom";

interface Props {
  restaurant: restaurantTypes
}

export const RestTopCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  // const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  return (
    <TopCardContainer>
      <TopCardStyles backgroundImg={restaurant.rest_picture} />
      <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }} >
        <div className="name">{restaurant.rest_name}</div>
        <div className="foodtype">{restaurant.rest_types[0]}</div>
        <RestStarRating restaurant={restaurant} />
      </Link>
    </TopCardContainer>
  )
}