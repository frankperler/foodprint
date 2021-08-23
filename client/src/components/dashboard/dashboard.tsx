import { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import { FilterArea } from './filters/filters-area'
import { GridContainer } from './grid-container'
import { Map } from './map/map'
import { MapArea } from './map/map-area'
import { EcoScoreSlider } from './filters/eco-score-slider'
import { DistanceSlider } from './filters/distance-slider'
import { BioFilter } from './filters/bio-filter'
import { RestaurantTypeSelect } from './filters/restaurant-type-select'
import { MealTypeSelect } from './filters/meal-type-select'
import { FoodTypeSelect } from './filters/food-type-select'
import { HomePageButton } from '../navbar/navbar-styled-components/homepagebutton'
import { ResultsArea } from './results/results-styled-components/results-area'
import { RestaurantsLists } from './results/restaurants-list'
import { SuppliersLists } from './results/suppliers-list'
import { TopArea } from './top-choices/top-choices-styled-components/top-area'
import { RestTopList } from './top-choices/restaurants-top-list'
import { filterReducers, filterState } from '../../reducers/filters-reducers'
import { filterContext } from '../../contexts/filters-contexts'
import { restaurantReducers, restaurantState } from '../../reducers/restaurants-reducers'
import { restaurantContext } from '../../contexts/restaurants-contexts'
import { supplierReducers, supplierState } from '../../reducers/suppliers-reducers';
import { supplierContext } from '../../contexts/suppliers-contexts'
import { SupplTopList } from './top-choices/suppliers-top-list'
import { getAllRestaurants } from '../../services/RestaurantService';
import { getAllSuppliers } from '../../services/SupplierService';

import './dashboard.css'

export const ButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink:1;
  margin-top: 1rem;
  padding-bottom:0.5rem;
`;

interface Props {
  userType: string,
  isAuth: boolean,
}

export const Dashboard: React.FunctionComponent<Props> = ({ userType }: Props) => {

  const [stateRestaurant, dispatchRestaurant] = useReducer(restaurantReducers, restaurantState)
  const [stateSupplier, dispatchSupplier] = useReducer(supplierReducers, supplierState)
  const [stateFilter, dispatchFilter] = useReducer(filterReducers, filterState)

  // let allRestaurants: restaurantTypes[] = [];
  useEffect(() => {
    getAllSuppliers().then((suppliers) => dispatchSupplier({ type: 'FETCH_ALL_SUPPLIER', payload: suppliers })).then(() => console.log(stateSupplier));
    getAllRestaurants().then((restaurants) => dispatchRestaurant({ type: 'FETCH_ALL_RESTAURANT', payload: restaurants }));
  }, [])

  console.log('STATESUPPLIER----------------', stateSupplier)
  console.log('STATERESTAURANT------------------', stateRestaurant)
  console.log("userType in dashboard", userType)

  return (
    <supplierContext.Provider value={{ stateSupplier, dispatchSupplier }}>
      <restaurantContext.Provider value={{ stateRestaurant, dispatchRestaurant }}>
        <filterContext.Provider value={{ stateFilter, dispatchFilter }}>
          <GridContainer>
            <MapArea>
              <Map userType={userType} />
            </MapArea>

            {((userType === 'Food lover') || (userType === 'Supplier')) ?
              <FilterArea>
                <EcoScoreSlider />
                <DistanceSlider />
                <RestaurantTypeSelect />
                <MealTypeSelect />
                <ButtonStyles>
                  <HomePageButton>
                    Search
                  </ HomePageButton>
                </ButtonStyles>
              </FilterArea>
              :
              <FilterArea>
                <EcoScoreSlider />
                <DistanceSlider />
                <BioFilter />
                <FoodTypeSelect />
                <ButtonStyles>
                  <HomePageButton>
                    Search
                  </ HomePageButton>
                </ButtonStyles>
              </FilterArea>
            }
            <div className="overflow">

              <ResultsArea>
                {((userType === 'Food lover') || (userType === 'Supplier')) ?
                  <RestaurantsLists /> :
                  <SuppliersLists />
                }
              </ResultsArea>
            </div>
            <TopArea>
              {((userType === 'Food lover') || (userType === 'Supplier')) ?
                <RestTopList /> :
                <SupplTopList />
              }
            </TopArea>
          </GridContainer>
        </filterContext.Provider>
      </restaurantContext.Provider>
    </supplierContext.Provider >
  )
}
