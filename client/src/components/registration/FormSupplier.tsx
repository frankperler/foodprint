import React from 'react';
import { FormWrapper } from './registration-styled-components/FormRegister.style';
import { FormNameElements } from './FormNameElements';
import { FormAddressTwoElements } from './FormAddressTwoElements';
import { FormSupplierElements } from './FormSupplierElements';
import { FormPhoneElement } from './FormPhoneElement';
import { FormCredentialElements } from './FormCredentialElements';
import { RegisterButton } from './registration-styled-components/FormRegister.style';

export const FormSupplier = (): JSX.Element => {

  return (
    <FormWrapper>
    <form>
      <FormNameElements></FormNameElements>
      <FormSupplierElements></FormSupplierElements>
      <FormAddressTwoElements></FormAddressTwoElements>
      <FormPhoneElement></FormPhoneElement>
      <FormCredentialElements></FormCredentialElements>
      <RegisterButton>Register</RegisterButton>
    </form>
    </FormWrapper>
  )
}