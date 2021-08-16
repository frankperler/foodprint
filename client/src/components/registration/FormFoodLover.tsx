import React from 'react';
import { RegisterButton, FormWrapper } from './registration-styled-components/FormRegister.style';
import { FormNameElements } from './FormNameElements';
import { FormCredentialElements } from './FormCredentialElements';
import { FormAddressTwoElements } from './FormAddressTwoElements';
import { FormPhoneElement } from './FormPhoneElement';

export const FormFoodLover = (): JSX.Element => {

  return (
    <FormWrapper>
      <form>
        <FormNameElements></FormNameElements>
        <FormCredentialElements></FormCredentialElements>
        <RegisterButton>Register</RegisterButton>
      </form>
    </FormWrapper>
  )
}

