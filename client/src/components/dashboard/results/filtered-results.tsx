import { restaurantTypes } from '../../../types/restaurant-types';
import { supplierTypes } from '../../../types/supplier-types';
import { RestaurantCard } from './restaurants-card';
import { SupplierCard } from './suppliers-card';
import { ListContainer } from './results-styled-components/results-list-container';
import { ListTitle } from './results-styled-components/results-title';
import { ListWrapper } from './results-styled-components/results-list-wrapper';

interface Props {
  filteredElements: restaurantTypes[] | supplierTypes[]
}

export const FilteredResults: React.FunctionComponent<Props> = ({ filteredElements }: Props) => {

  const isRestaurant = (element: restaurantTypes | supplierTypes): element is restaurantTypes => {
    return (element as restaurantTypes).rest_name !== undefined
  }


  const filteredResults = () => {
    if (filteredElements.length) {
      if (isRestaurant(filteredElements[0])) {
        return (filteredElements as restaurantTypes[]).map((restaurant: restaurantTypes) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        })
      }
      else {
        return (filteredElements as supplierTypes[]).map((supplier: supplierTypes) => {
          return <SupplierCard supplier={supplier} key={supplier.id} />
        })
      }
    } else {
      return <h1 style={{ marginLeft: '2rem' }}>No results found</h1>
    }
  }

  return (
    <>
      <ListWrapper key={'theFilteredList'} flexDir="column">
        <ListTitle>
          Filtered Results
        </ListTitle>
        <ListContainer>
          {filteredResults()}
        </ListContainer>
      </ListWrapper>
    </>
  )
}