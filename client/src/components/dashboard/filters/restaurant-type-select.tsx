import { useContext, useState } from 'react';
import { restaurantType } from '../../../types/filter-types';
import Select from 'react-select'
import { filterContext } from '../../../contexts/filters-contexts';


const options = [
  {
    value: 1,
    label: "Vegetarian"
  },
  {
    value: 2,
    label: "Italian"
  },
  {
    value: 3,
    label: "Bio"
  },
]

export const RestaurantTypeSelect: React.FunctionComponent = () => {

  const { state, dispatch } = useContext(filterContext)
  const [arrayLabel, setArrayLabel] = useState<number[]>([]);

  const handleChange = (e: restaurantType[]) => {
    setArrayLabel(Array.isArray(e) ? e.map(x => x.value) : []);
    dispatch({ type: 'restaurant-type-change', payload: Array.isArray(e) ? e.map(x => x.label) : [] })
  }

  return (
    <div>
      <div className="value">Restaurant Types: {state.restaurantType}</div>
      <Select
        className="select"
        isMulti
        onSelectResetsInput={false}
        closeMenuOnSelect={false}
        onChange={(e) => handleChange(e as restaurantType[])}
        options={options}
        value={options.filter((obj: restaurantType) => arrayLabel.includes(obj.value))}
      />
    </div>
  )
}