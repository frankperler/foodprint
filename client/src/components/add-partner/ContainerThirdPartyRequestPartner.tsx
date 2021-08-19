import React from 'react';
import { FormThirdPartyRequest } from './FormThirdPartyRequest';
import { ContainerWrapper } from './add-partner-styled-components/Searchbar.style';
import { Header } from './add-partner-styled-components/Searchbar.style';

export const ContainerThirdPartyRequestPartner = (): JSX.Element => {

  return (
    <ContainerWrapper>
      <Header>Invite your partner to join!</Header>
      <FormThirdPartyRequest></FormThirdPartyRequest>
    </ContainerWrapper>
  )
}