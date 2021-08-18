import React from "react";
import { FormAddressTwoElements } from "../registration/registration-styled-components/FormAddressTwoElements";
import { FormPhoneElement } from "../registration/registration-styled-components/FormPhoneElement";
import { FormRestaurantElements } from "../registration/registration-styled-components/FormRestaurantElements";
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