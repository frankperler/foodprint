import { useState } from 'react'
import { Container } from '../navbar/navbar-styled-components/container';
import { SearchInput } from './searchbar-styled-elements/searchinput';

export const Searchbar: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = (e: { target: { value: string; } }) => {
    setInputValue(e.target.value);
  }

  return (
    <Container inputColor="whitesmoke" containerHeight="6rem" topPosition="5%" navPosition="sticky">
      <SearchInput placeholder="Where are you?" type="text" value={inputValue} onChange={handleChange} />
    </Container>
  )
};