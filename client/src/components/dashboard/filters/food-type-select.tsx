import { useContext, useState } from 'react';
import { dropdownType } from '../../../types/filter-types';
import Select from 'react-select'
import { filterContext } from '../../../contexts/filters-contexts';
import styled from 'styled-components';

const options = [
  {
    value: 1,
    label: "Apples"
  },
  {
    value: 2,
    label: "Artichoke"
  },
  {
    value: 3,
    label: "Bananas"
  },
  {
    value: 4,
    label: "Beetroot"
  },
  {
    value: 5,
    label: "Bread"
  },
  {
    value: 6,
    label: "Broccoli"
  },
  {
    value: 7,
    label: "Carrot"
  },
  {
    value: 8,
    label: "Cheese"
  },
  {
    value: 9,
    label: "Mountain Cheese"
  },
  {
    value: 10,
    label: "Blue Cheese"
  },
  {
    value: 11,
    label: "Young Cheese"
  },
  {
    value: 12,
    label: "Cherries"
  },
  {
    value: 13,
    label: "Chicken"
  },
  {
    value: 14,
    label: "Eggs"
  },
  {
    value: 15,
    label: "Garlic"
  },
  {
    value: 16,
    label: "Grapes"
  },
  {
    value: 17,
    label: "Lemons"
  },
  {
    value: 18,
    label: "Lettuce"
  },
  {
    value: 19,
    label: "Mangoes"
  },
  {
    value: 20,
    label: "Milk"
  },
  {
    value: 21,
    label: "Mushrooms"
  },
  {
    value: 22,
    label: "Oranges"
  },
  {
    value: 23,
    label: "Peaches"
  },
  {
    value: 24,
    label: "Squash"
  },
  {
    value: 25,
    label: "Strawberries"
  },
  {
    value: 26,
    label: "Tomatoes"
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

export const FoodTypeSelect: React.FunctionComponent = () => {

  const { dispatchFilter } = useContext(filterContext)
  const [arrayLabel, setArrayLabel] = useState<number[]>([]);

  const handleChange = (e: dropdownType[]) => {
    setArrayLabel(Array.isArray(e) ? e.map(x => x.value) : []);
    dispatchFilter({ type: 'food-type-change', payload: Array.isArray(e) ? e.map(x => x.label) : [] })
  }

  return (
    <DropdownStyles>
      <div className="value">Food Types</div>
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
