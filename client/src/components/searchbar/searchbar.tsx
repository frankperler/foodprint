import { useContext } from 'react'
import { Container } from '../navbar/navbar-styled-components/container';
import { SearchInput } from './searchbar-styled-elements/searchinput';
import { searchBarContext } from '../../contexts/filters-contexts';


export const Searchbar: React.FunctionComponent = () => {

  const {stateSearchBar, dispatchSearchBar} = useContext(searchBarContext)
  const handleChange = (e: { target: { value: string; } }) => {
    dispatchSearchBar({type: 'city-change', payload: e.target.value});
    // if (stateSearchBar.city.length === 0) {

    // }
  }

  return (
    <Container inputColor="whitesmoke" containerHeight="6rem" topPosition="5%" navPosition="sticky">
      <SearchInput placeholder="Where are you?" type="text" value={stateSearchBar.city} onChange={handleChange} />
    </Container>
  )
};