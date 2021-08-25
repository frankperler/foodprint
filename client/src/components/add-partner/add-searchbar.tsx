import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { restaurantTypes, supplierTypes, userTypes } from '../../types';
import { SearchInput, SearchForm, SearchButton } from './add-partner-styled-components/add-functionality-styles';
import { findRestaurantsByName, findSuppliersByName } from '../../services/SearchService'

interface Props {
  stateUser: userTypes
  searchResults: restaurantTypes[] | supplierTypes[]
  setSearchResults: Dispatch<SetStateAction<restaurantTypes[] | supplierTypes[]>>,
  matches: boolean,
  setMatches: React.Dispatch<React.SetStateAction<boolean>>
  submitted: boolean,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

export const Searchbar: React.FunctionComponent<Props> = ({ setSubmitted, stateUser, searchResults, setSearchResults, matches, setMatches }: Props): JSX.Element => {

  const [searchValue, setSearchValue] = useState<string>("")

  const handleSubmit = async () => {
    try {
      if (stateUser.user.user_type === 'restaurant') {
        await findSuppliersByName(searchValue)
          .then((suppliers) => { setSearchResults(suppliers) })
          .then(() => setSubmitted(true))
      } else if (stateUser.user.user_type === 'supplier') {
        await findRestaurantsByName(searchValue)
          .then((restaurants) => setSearchResults(restaurants))
          .then(() => setSubmitted(true))
      } else {
        console.log("You are not a restaurant or a supplier")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = async (e: { target: { value: string } }) => {
    setSearchValue(e.target.value)
  }

  return (
    <SearchForm onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}>
      <SearchInput type='text' value={searchValue} onChange={handleChange} placeholder="Search for your partner..."></SearchInput>
      <SearchButton type="submit">Find my partners</SearchButton>
    </SearchForm>
  )
}

