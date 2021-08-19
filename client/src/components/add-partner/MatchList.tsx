import React from 'react';
import { MatchListContainer } from './add-partner-styled-components/Searchbar.style';
import { NoMatches } from './NoMatches';

export const MatchList = (): JSX.Element => {

  return (
    <MatchListContainer>
      <NoMatches></NoMatches>
    </MatchListContainer>
  )
}