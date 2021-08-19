import { useContext, useState } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { RestaurantCard } from './restaurants-card';
import { ListContainer } from './results-list-container';
import { ListTitle } from './results-title';

export const RestaurantsLists: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)
  const [restTypesArray, setRestTypesArray] = useState(['Bio', 'Vegetarian', 'Chinese'])

  return (
    <>
      {stateRestaurant.length > 0 &&
        restTypesArray.map((value: string) => {
          return (
            <div>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {stateRestaurant.map((restaurant: restaurantTypes) => {
                  if (restaurant.rest_types.includes(value)) {
                    return < RestaurantCard restaurant={restaurant} key={restaurant.place_id} />
                  }
                }
                )}
              </ListContainer>
            </div>
          )
        }
        )}
    </>
  )
}