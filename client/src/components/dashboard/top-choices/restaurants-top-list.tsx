import { useContext } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { ListContainer } from '../results/results-styled-components/results-list-container';
import { RestTopCard } from './restaurants-top-cards';
import { TopTitle } from './top-choices-styled-components/top-title';

export const RestTopList: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)

  return (
    <>
      {stateRestaurant.length > 0 &&
        <div>
          <TopTitle>
            <b>Top Places</b>
          </TopTitle>
          <ListContainer>
            {stateRestaurant.sort((a, b) => (b.rest_eco_score) - (a.rest_eco_score)).slice(0, 3).map((restaurant: restaurantTypes) => (
              < RestTopCard restaurant={restaurant} key={restaurant.id} />
            )
            )}
          </ListContainer>
        </div>
      }
    </>
  )
}