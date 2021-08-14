import React from 'react';
import { RegisterButton, FormWrapper } from './FormRegister.style';
import FormNameElements from './FormNameElements';
import FormCredentialElements from './FormCredentialElements';
import FormEstablishmentElements from './FormEstablishmentElements';
import FormAddressTwoElements from './FormAddressTwoElements';
import FormPhoneElement from './FormPhoneElement';

function FormRegister (): JSX.Element {



  return (

    <FormWrapper>
    <form>
    <FormNameElements></FormNameElements>
    <FormEstablishmentElements></FormEstablishmentElements>
    <FormAddressTwoElements></FormAddressTwoElements>
    <FormPhoneElement></FormPhoneElement>
    <FormCredentialElements></FormCredentialElements>
    <RegisterButton>Register</RegisterButton>
    </form>
    </FormWrapper>
  )
}


export default FormRegister;