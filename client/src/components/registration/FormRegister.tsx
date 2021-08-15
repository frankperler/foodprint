import React from 'react';
import { RegisterButton, FormWrapper } from './registration-styled-components/FormRegister.style';
import { FormNameElements } from './FormNameElements';
import { FormCredentialElements } from './FormCredentialElements';
import { FormAddressTwoElements } from './FormAddressTwoElements';
import { FormPhoneElement } from './FormPhoneElement';

export const FormRegister = (): JSX.Element => {

  return (
    <FormWrapper>
      <form>
        <FormNameElements></FormNameElements>
        <FormAddressTwoElements></FormAddressTwoElements>
        <FormPhoneElement></FormPhoneElement>
        <FormCredentialElements></FormCredentialElements>
        <RegisterButton>Register</RegisterButton>
      </form>
    </FormWrapper>
  )
}

