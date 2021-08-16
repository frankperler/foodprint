import React from "react";
import { CredentialInput, Label } from './registration-styled-components/FormRegister.style';


export const FormCredentialElements = (): JSX.Element => {


  return (
    <>
        <Label>Email</Label>
        <CredentialInput type="text" name="email"></CredentialInput>
        <Label>Password</Label>
        <CredentialInput type="password" name="password"></CredentialInput>
        <Label>Password confirmation</Label>
        <CredentialInput type="password" name="confirmPassword"></CredentialInput>
    </>
  )
}
