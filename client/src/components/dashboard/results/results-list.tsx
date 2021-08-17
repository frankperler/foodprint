import { useContext, useState } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { ResultsCard } from './results-card';
import { ListContainer } from './results-list-container';
import { ListTitle } from './list-title';


export const ResultsLists: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)
  const [typesArray, setTypesArray] = useState(['Bio', 'Vegetarian', 'Chinese'])

  return (
    <>
      {stateRestaurant.length > 0 &&
        typesArray.map((value: string) => {
          return (
            <div>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {stateRestaurant.map((restaurant: restaurantTypes) => {
                  if (restaurant.rest_types.includes(value)) {
                    return < ResultsCard restaurant={restaurant} key={restaurant.place_id} />
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