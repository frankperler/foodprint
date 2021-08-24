import { useState } from 'react';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { restaurantTypes, supplierTypes, userTypes } from '../../types';
import { SearchInput, SearchForm, SearchButton } from './add-partner-styled-components/add-functionality-styles';

interface Props {
  stateUser: userTypes
  searchResults: restaurantTypes[] | supplierTypes[]
  setSearchResults: Dispatch<SetStateAction<restaurantTypes[] | supplierTypes[]>>,
}

export const Searchbar: React.FunctionComponent<Props> = ({ stateUser, searchResults, setSearchResults }: Props): JSX.Element => {

  const [searchValue, setSearchValue] = useState<string>("")

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      if (stateUser.user.user_type === 'restaurant') {
        //call function and set value to results array
      } else {
        // call second function for suppliers and set results
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = async (e: { target: { value: string } }) => {
    setSearchValue(e.target.value)
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput type='text' value={searchValue} onChange={handleChange} placeholder="Search for your partner..."></SearchInput>
      <SearchButton type="submit">Find my partners</SearchButton>
    </SearchForm>
  )
}

