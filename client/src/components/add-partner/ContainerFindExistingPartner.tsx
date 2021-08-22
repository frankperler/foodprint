import React from 'react';
import { Wrapper, Header } from './add-partner-styled-components/Searchbar.style';
import { MatchList } from './MatchList';
import { Searchbar } from './Searchbar';

export const ContainerFindExistingPartner = (): JSX.Element => {

  return (
    <>
      <Wrapper>
        <Header>Search for your partner details below...</Header>
        <Searchbar></Searchbar>
        <MatchList></MatchList>
      </Wrapper>
    </>
  )
}