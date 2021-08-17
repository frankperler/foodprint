import { useContext } from 'react';
import { restaurantContext } from '../../../contexts/restaurants-contexts';
import { ResultsCard } from './results-card';

export const ResultsLists: React.FunctionComponent = () => {

  const { stateRestaurant, dispatchRestaurant } = useContext(restaurantContext)

  // const handleChange = (e: { target: { value: string; } }) => {
  //   dispatchFilter({ type: 'distance-change', payload: +e.target.value })
  // }

  return (
    <ResultsCard></ResultsCard>
  )
}