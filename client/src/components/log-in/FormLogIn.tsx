import React from 'react';
import { FormCredentialElements } from './FormCredentialElements';
import { LogInButton } from './log-in-styled-components/FormLogIn.style';

export const FormLogIn = (): JSX.Element => {

  

  return (
    <form>
      <FormCredentialElements></FormCredentialElements>
      <LogInButton>Log in</LogInButton>
    </form>
  )
}