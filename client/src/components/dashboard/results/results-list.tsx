import { useContext } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { ResultsCard } from './results-card';

export const ResultsLists: React.FunctionComponent = () => {

  const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  // const handleChange = (e: { target: { value: string; } }) => {
  //   dispatchFilter({ type: 'distance-change', payload: +e.target.value })
  // }

  return (
    <div>
      {stateRestaurant.length > 0 && (
        <div className="list_restaurant">
          {stateRestaurant.map((restaurant: restaurantTypes) => {
            if (restaurant.rest_types.includes('Bio')) {
              <ResultsCard restaurant={restaurant} key={restaurant.place_id} />
            }
          })}
        </div>
      )}
    </div>
  )
}