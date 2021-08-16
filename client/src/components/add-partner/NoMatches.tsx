import React from 'react';
import { InviteButton } from './add-partner-styled-components/Searchbar.style';


export const NoMatches = (): JSX.Element => {


  return (
    <div>
      <p>We're sorry your search did not match any results...</p>
      <InviteButton>Send them an invite</InviteButton>
    </div>
  )
}