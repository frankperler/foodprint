import { useContext } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { ResultsCardStyles } from './results-card-styles';

export const ResultsCard: React.FunctionComponent = () => {

  const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  // const handleChange = (e: { target: { value: string; } }) => {
  //   dispatchFilter({ type: 'distance-change', payload: +e.target.value })
  // }

  return (
    <ResultsCardStyles backgroundImg={stateRestaurant[0].rest_picture}>
      <div className="name">{stateRestaurant[0].rest_name}</div>
      <div className="foodtype">{stateRestaurant[0].rest_types[0]}</div>
      <div className="price">{stateRestaurant[0].rest_price_level}</div>
      <div className="eco-score">{stateRestaurant[0].rest_eco_score}</div>
    </ResultsCardStyles >
  )
}