import { useContext } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { ResultsCard } from './results-card';
import { ListContainer } from './results-list-container';

export const ResultsLists: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)

  return (
    <div>
      {stateRestaurant.length > 0 && (
        <ListContainer>
          {stateRestaurant.map((restaurant: restaurantTypes) => (
            < ResultsCard restaurant={restaurant} key={restaurant.place_id} />
          ))}
        </ListContainer>
      )}
    </div>
  )
}