import React from "react";
import { LogInCredentialInput, Label } from './log-in-styled-components/FormLogIn.style';

export const FormCredentialElements = (): JSX.Element => {

  return (
    <div>
      <div>
        <Label>Email</Label>
        <LogInCredentialInput></LogInCredentialInput>
      </div>
      <div>
        <Label>Password</Label>
        <LogInCredentialInput type="password"></LogInCredentialInput>
      </div>
    </div>
  )
}
