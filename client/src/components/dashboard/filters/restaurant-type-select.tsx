import { useContext, useState } from 'react';
import { dropdownType } from '../../../types/filter-types';
import Select from 'react-select'
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

const options = [
  {
    value: 1,
    label: "Vegan"
  },
  {
    value: 2,
    label: "Vegetarian"
  },
  {
    value: 3,
    label: "Bio"
  },
  {
    value: 4,
    label: "Asian"
  },
  {
    value: 5,
    label: "Mexican"
  },
  {
    value: 6,
    label: "Italian"
  },
  {
    value: 7,
    label: "Greek"
  },
  {
    value: 8,
    label: "Chinese"
  },
  {
    value: 9,
    label: "Japanese"
  },
  {
    value: 10,
    label: "Thai"
  },
  {
    value: 11,
    label: "Indian"
  },
  {
    value: 12,
    label: "Fast-Food"
  },
  {
    value: 13,
    label: "Café"
  }
]

export const DropdownStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  margin-top: 1rem;
  flex-shrink:1;
  
  .value {
    font-size: 0.8rem;
    text-align: left;
  }
  
  .select {
    width: 80%;
    margin-top: 1rem;
    font-size: 0.6rem;
  }
`;

export const RestaurantTypeSelect: React.FunctionComponent = () => {

  const { dispatchFilter } = useContext(filterContext)
  const [arrayLabel, setArrayLabel] = useState<number[]>([]);

  const handleChange = (e: dropdownType[]) => {
    setArrayLabel(Array.isArray(e) ? e.map(x => x.value) : []);
    dispatchFilter({ type: 'restaurant-type-change', payload: Array.isArray(e) ? e.map(x => x.label) : [] })
  }

  return (
    <DropdownStyles>
      <div className="value">Restaurant Types</div>
      <Select
        className="select"
        isMulti
        closeMenuOnSelect={true}
        onChange={(e) => handleChange(e as dropdownType[])}
        options={options}
        value={options.filter((obj: dropdownType) => arrayLabel.includes(obj.value))}
      />
    </DropdownStyles>
  )
}
