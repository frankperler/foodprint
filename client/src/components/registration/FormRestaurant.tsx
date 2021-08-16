import React from 'react';
import { FormWrapper } from './registration-styled-components/FormRegister.style';
import { FormNameElements } from './FormNameElements';
import { FormAddressTwoElements } from './FormAddressTwoElements';
import { FormRestaurantElements } from './FormRestaurantElements';
import { FormPhoneElement } from './FormPhoneElement';
import { FormCredentialElements } from './FormCredentialElements';
import { RegisterButton } from './registration-styled-components/FormRegister.style';

export const FormRestaurant = (): JSX.Element => {

  return (
    <FormWrapper>
    <form>
      <FormNameElements></FormNameElements>
      <FormRestaurantElements></FormRestaurantElements>
      <FormAddressTwoElements></FormAddressTwoElements>
      <FormPhoneElement></FormPhoneElement>
      <FormCredentialElements></FormCredentialElements>
      <RegisterButton>Register</RegisterButton>
    </form>
    </FormWrapper>
  )
}