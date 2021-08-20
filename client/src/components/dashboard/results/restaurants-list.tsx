import { useContext, useState } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { restaurantTypes } from '../../../types/restaurant-types';
import { RestaurantCard } from './restaurants-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const RestaurantsLists: React.FunctionComponent = () => {

  const { stateRestaurant } = useContext(restaurantContext)
  const [restTypesArray] = useState(['Bio', 'Vegetarian', 'Chinese', 'Café'])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    //   slidesToSlide: 2 // optional, default to 1.
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1 // optional, default to 1.
    // }
  };

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