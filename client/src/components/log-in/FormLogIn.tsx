import React from 'react';
import { FormWrapper } from '../registration/registration-styled-components/FormRegister.style';
import { FormCredentialElements } from './FormCredentialElements';
import { ForgotPassword, LogInButton } from './log-in-styled-components/FormLogIn.style';

export const FormLogIn = (): JSX.Element => {

  

  return (
    <FormWrapper>
      <form>
        <FormCredentialElements></FormCredentialElements>
        <LogInButton>Log in</LogInButton>
        <ForgotPassword>Forgot password?</ForgotPassword>
      </form>
    </FormWrapper>
  )
}