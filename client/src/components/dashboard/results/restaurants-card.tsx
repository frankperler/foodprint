import { ResultsCardStyles } from './results-styled-components/results-card-styles';
import { RestStarRating } from './restaurants-star-rating'
import { RestEcoRating } from './restaurants-eco-rating';
import { CardContainer } from './results-styled-components/results-card-container';
import { restaurantTypes } from '../../../types/restaurant-types';
import { Link } from "react-router-dom";

interface Props {
  restaurant: restaurantTypes
}

export const RestaurantCard: React.FunctionComponent<Props> = ({ restaurant }: Props) => {

  return (
    <CardContainer>
      <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none', height: '100%', width: '100%' }} >
      <ResultsCardStyles backgroundImg={restaurant.rest_picture} >
      </ResultsCardStyles>
        <div className="name">{restaurant.rest_name}</div>
        <div className="foodtype">{
          restaurant.rest_types.length == 1 ?
            <div>
              <span style={{ paddingRight: "0.6em" }}>{restaurant.rest_types[0]}</span>
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <RestStarRating restaurant={restaurant} /></span>
            </div>
            : <div>
              <span style={{ paddingRight: "0.6em" }}>{restaurant.rest_types[0]}, {restaurant.rest_types[1]}</span>
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <RestStarRating restaurant={restaurant} /></span>
            </div>
        }
        </div>
        <RestEcoRating restaurant={restaurant}></RestEcoRating>
      </Link>
    </CardContainer >
  )
}