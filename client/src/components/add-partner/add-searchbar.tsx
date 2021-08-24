import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { restaurantTypes, supplierTypes, userTypes } from '../../types';
import { SearchInput, SearchForm, SearchButton } from './add-partner-styled-components/add-functionality-styles';
import { findRestaurantsByName, findSuppliersByName } from '../../services/SearchService'

interface Props {
  stateUser: userTypes
  searchResults: restaurantTypes[] | supplierTypes[]
  setSearchResults: Dispatch<SetStateAction<restaurantTypes[] | supplierTypes[]>>,
}

export const Searchbar: React.FunctionComponent<Props> = ({ stateUser, setSearchResults }: Props): JSX.Element => {

  const [searchValue, setSearchValue] = useState<string>("")

  const handleSubmit = async () => {
    try {
      if (stateUser.user.user_type === 'restaurant') {
        await findSuppliersByName(searchValue)
          .then((suppliers) => { setSearchResults(suppliers) })
      } else if (stateUser.user.user_type === 'supplier') {
        await findRestaurantsByName(searchValue)
          .then((restaurants) => setSearchResults(restaurants))
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

