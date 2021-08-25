import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../contexts/user-context';
import { Wrapper, Header } from './add-partner-styled-components/add-functionality-styles';
import { Searchbar } from './add-searchbar';
import { InviteButton, MatchListContainer } from './add-partner-styled-components/add-functionality-styles';
import { Link } from 'react-router-dom';
import { restaurantTypes, supplierTypes } from '../../types';
import { PartnerList } from './add-partner-list';
import { PartnerListWrapper } from './add-partner-styled-components/add-functionality-styles';

export const ContainerFindExistingPartner: React.FunctionComponent = (): JSX.Element => {

  const { stateUser } = useContext(userContext)
  const [searchResults, setSearchResults] = useState<restaurantTypes[] | supplierTypes[]>([])
  const [matches, setMatches] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    searchResults.length > 0 ? setMatches(true) : setMatches(false);
  }, [searchResults])

  return (
    <>
      <Wrapper>
        <Header style={{marginBottom: "1.4em"}}>Search for your partner details below...</Header>
        <Searchbar
          stateUser={stateUser}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          matches={matches}
          setMatches={setMatches}
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
        {matches === false && submitted === true ?
          <MatchListContainer>
            <h2>We're sorry your search did not match any results...</h2>
            <Link to="/invite" style={{ textDecoration: 'none' }}>
              <InviteButton>Send them an invite</InviteButton>
            </Link>
          </MatchListContainer>
          :
          <PartnerListWrapper>
            <PartnerList searchResults={searchResults} />
          </PartnerListWrapper>
        }
      </Wrapper>
    </>
  )
}