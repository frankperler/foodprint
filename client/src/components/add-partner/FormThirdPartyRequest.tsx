import React from "react";
import { FormAddressTwoElements } from '../registration/FormAddressTwoElements';
import { FormPhoneElement } from '../registration/FormPhoneElement';
import { FormRestaurantElements } from '../registration/FormRestaurantElements';
import { FormWrapper } from "../registration/registration-styled-components/FormRegister.style";
import { AddRequestButton } from './add-partner-styled-components/Searchbar.style';
import { FormEmailPartnerElements } from './FormEmailPartnerElement';


export const FormThirdPartyRequest = (): JSX.Element => {


  return (
    <FormWrapper>
    <form>
    <FormRestaurantElements></FormRestaurantElements>
    <FormAddressTwoElements></FormAddressTwoElements>
    <FormPhoneElement></FormPhoneElement>
    <FormEmailPartnerElements></FormEmailPartnerElements>
    <AddRequestButton>Send invite</AddRequestButton>
  </form>
  </FormWrapper>
  )
}