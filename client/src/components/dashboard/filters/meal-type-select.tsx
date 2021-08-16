import { useContext, useState } from 'react';
import { dropdownType } from '../../../types/filter-types';
import Select from 'react-select'
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

const options = [
  {
    value: 1,
    label: "Breakfast"
  },
  {
    value: 2,
    label: "Lunch"
  },
  {
    value: 3,
    label: "Dinner"
  },
]

export const DropdownStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  margin-top: 1rem;
  flex-shrink: 1;

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

export const MealTypeSelect: React.FunctionComponent = () => {

  const { dispatch } = useContext(filterContext)
  const [arrayLabel, setArrayLabel] = useState<number[]>([]);

  const handleChange = (e: dropdownType[]) => {
    setArrayLabel(Array.isArray(e) ? e.map(x => x.value) : []);
    dispatch({ type: 'restaurant-type-change', payload: Array.isArray(e) ? e.map(x => x.label) : [] })
  }

  return (
    <DropdownStyles>
      <div className="value">Meal Types</div>
      <Select
        className="select"
        isMulti
        onSelectResetsInput={false}
        closeMenuOnSelect={false}
        onChange={(e) => handleChange(e as dropdownType[])}
        options={options}
        value={options.filter((obj: dropdownType) => arrayLabel.includes(obj.value))}
      />
    </DropdownStyles>
  )
}
