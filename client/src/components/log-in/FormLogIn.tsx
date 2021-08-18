import React from 'react';
import { FormWrapper } from '../registration/registration-styled-components/FormRegister.style';
import { FormCredentialElements } from './FormCredentialElements';
import { ForgotPassword, LogInButton } from './log-in-styled-components/FormLogIn.style';

export interface loginInterface {
  onCloseLoginModal: () => void
}

export const FormLogIn = ({ onCloseLoginModal }: loginInterface): JSX.Element => {

  // need handleSubmit


  return (
    <FormWrapper>
      <form onSubmit={onCloseLoginModal}>
        <FormCredentialElements></FormCredentialElements>
        <LogInButton onClick={onCloseLoginModal}>Log in</LogInButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </form>
    </FormWrapper>
  )
}