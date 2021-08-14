import React from "react";
import { RegisterCredentialInput, Label } from './registration-styled-components/FormRegister.style';

export const FormCredentialElements = (): JSX.Element => {


  return (
    <div>
      <div>
        <Label>Email</Label>
        <RegisterCredentialInput></RegisterCredentialInput>
      </div>
      <div>
        <Label>Password</Label>
        <RegisterCredentialInput type="password"></RegisterCredentialInput>
      </div>
      <div>
        <Label>Password confirmation</Label>
        <RegisterCredentialInput type="password"></RegisterCredentialInput>
     </div>
    </div>
  )
}
