import React from 'react';
import { ContainerWrapper } from './add-partner-styled-components/add-functionality-styles';
import { Header } from './add-partner-styled-components/add-functionality-styles';
import { FormAddressTwoElements } from "../registration/registration-styled-components/FormAddressTwoElements";
import { FormPhoneElement } from "../registration/registration-styled-components/FormPhoneElement";
import { FormRestaurantElements } from "../registration/registration-styled-components/FormRestaurantElements";
import { FormWrapper } from "../registration/registration-styled-components/FormRegister.style";
import { AddRequestButton } from './add-partner-styled-components/add-functionality-styles';
import { CredentialInput, Label } from '../registration/registration-styled-components/FormRegister.style';


export const ContainerThirdPartyRequestPartner = (): JSX.Element => {

  return (
    <ContainerWrapper>
      <Header>Invite your partner to join!</Header>
      <FormWrapper>
        <form>
          <FormRestaurantElements></FormRestaurantElements>
          <FormAddressTwoElements></FormAddressTwoElements>
          <FormPhoneElement></FormPhoneElement>
          <Label>Email</Label>
          <CredentialInput></CredentialInput>
          <AddRequestButton>Send invite</AddRequestButton>
        </form>
      </FormWrapper>
    </ContainerWrapper>
  )
}