import { useState } from 'react'
import { Container } from '../navbar/navbar-styled-components/container';
import { SearchInput } from './searchbar-styled-elements/searchinput';

export const Searchbar: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <Container inputColor="whitesmoke" containerHeight="6rem">
      <SearchInput placeholder="Where are you?" type="text" value={inputValue} />
    </Container>
  )
};