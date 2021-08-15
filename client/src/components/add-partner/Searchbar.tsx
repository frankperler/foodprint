import React from 'react';
import { SearchInput } from './add-partner-styled-components/Searchbar.style';

export const Searchbar = (): JSX.Element => {

  return (
    <form>
      <SearchInput placeholder="Search for your partner..."></SearchInput>
      <button type="submit"></button>
    </form>
  )
}

