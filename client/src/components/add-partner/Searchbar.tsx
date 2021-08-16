import React from 'react';
import { SearchInput, SearchForm, SearchButton } from './add-partner-styled-components/Searchbar.style';

export const Searchbar = (): JSX.Element => {

  return (
    <SearchForm>
      <SearchInput placeholder="Search for your partner..."></SearchInput>
      <SearchButton type="submit">Find my partners</SearchButton>
    </SearchForm>
  )
}

