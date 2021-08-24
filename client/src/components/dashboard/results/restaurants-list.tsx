import { useContext, useState } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { userContext } from '../../../contexts/user-context';
import { restaurantTypes } from '../../../types/restaurant-types';
import { RestaurantCard } from './restaurants-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';

export const RestaurantsLists: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)
  const { stateUser } = useContext(userContext)
  const [restTypesArray] = useState(['Bio', 'Vegetarian', 'Café'])
  
  // console.log("user's restaurants num1:", stateUser.suppliers[0].Restaurants.rest_name)

  return (
    <>
      {stateUser.user.user_type =="supplier" && stateUser.suppliers && stateUser.suppliers[0].Restaurants
      && stateUser.suppliers[0].Restaurants.length?
      <ListWrapper key={"myList"}>
      <ListTitle>
        My Restaurants
      </ListTitle>
      <ListContainer>
        {
          stateUser.suppliers[0].Restaurants.map((restaurant: restaurantTypes) => 
             < RestaurantCard restaurant={restaurant} key={restaurant.id} />
          )}
      </ListContainer>
    </ListWrapper>
      : null}
      {stateRestaurant.length > 0 &&
        restTypesArray.map((value: string) => {
          let count = 0;
          return (
            <ListWrapper key={value}>
              <ListTitle>
                {value}
              </ListTitle>
              <ListContainer>
                {
                  stateRestaurant.map((restaurant: restaurantTypes) => {
                    if (restaurant.rest_types.includes(value) && count < 6) {
                      count++
                      
                      return < RestaurantCard restaurant={restaurant} key={restaurant.id} />
                    }
                  }
                  )}
              </ListContainer>
            </ListWrapper>
          )
        }
        )}
    </>
  )
}