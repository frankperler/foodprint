import { useContext, useState } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { filterContext } from '../../../contexts/filters-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { RestaurantCard } from './restaurants-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';
import { List } from '@material-ui/core';

export const FilteredResults: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)
  const { stateFilter } = useContext(filterContext)

  console.log(filterContext)

  return (
    <>
      <ListWrapper key={'theFilteredList'}>
        <ListTitle>
          {`Eco: ${stateFilter?.ecoScore}+`}
        </ListTitle>
        <ListTitle>
          Filtered Results
        </ListTitle>
        <ListContainer>
          {
            stateRestaurant.map((restaurant: restaurantTypes) => {
              return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            })
          }
        </ListContainer>


      </ListWrapper>



    </>
  )




}