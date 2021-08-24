import React from 'react';
import { ContainerWrapper } from './add-partner-styled-components/add-functionality-styles';
import { Header } from './add-partner-styled-components/add-functionality-styles';
import { FormAddressTwoElements } from "../registration/registration-styled-components/FormAddressTwoElements";
import { FormPhoneElement } from "../registration/registration-styled-components/FormPhoneElement";
import { FormPartnerElements } from "../registration/registration-styled-components/FormPartnersElements";
import { FormWrapper } from "../registration/registration-styled-components/FormRegister.style";
import { AddRequestButton } from './add-partner-styled-components/add-functionality-styles';
import { CredentialInput, Label } from '../registration/registration-styled-components/FormRegister.style';
import { Link } from 'react-router-dom';

export const ContainerThirdPartyRequestPartner = (): JSX.Element => {

  return (
    <ContainerWrapper>
      <Header>Invite your partner to join!</Header>
      <FormWrapper>
        <form>
          <FormPartnerElements />
          <FormAddressTwoElements />
          <FormPhoneElement />
          <Label>Email</Label>
          <CredentialInput />
          <Link to='/thankyou' style={{ textDecoration: 'none' }}>
            <AddRequestButton>Send invite</AddRequestButton>

          </Link>
        </form>
      </FormWrapper>
    </ContainerWrapper>
  )
}