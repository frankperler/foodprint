import { TopCardStyles } from './top-card-styles';
import { StarRating } from '../results/restaurants-star-rating'
import { TopCardContainer } from './top-card-container';
import { restaurantTypes } from '../../../types/restaurant-types';

interface Props {
  restaurant: restaurantTypes
}

export const TopCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  // const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  return (
    <TopCardContainer>
      <TopCardStyles backgroundImg={restaurant.rest_picture} />
      <div className="name">{restaurant.rest_name}</div>
      <div className="foodtype">{restaurant.rest_types[0]}</div>
      <StarRating restaurant={restaurant} />
    </TopCardContainer>
  )
}