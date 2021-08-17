import { ResultsCardStyles } from './results-card-styles';
import { StarRating } from './star-rating'
import { CardContainer } from './results-card-container';
import { restaurantTypes } from '../../../types/restaurant-types';

interface Props {
  restaurant: restaurantTypes
}

export const ResultsCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  // const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  return (
    <CardContainer>
      <ResultsCardStyles backgroundImg={restaurant.rest_picture} />
      <div className="name">{restaurant.rest_name}</div>
      <div className="foodtype">{restaurant.rest_types[0]}</div>
      <StarRating restaurant={restaurant} />
    </CardContainer>
  )
}