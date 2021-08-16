import React from "react";
import { CredentialInput, Label } from './registration-styled-components/FormRegister.style';

export const FormCredentialElements = (): JSX.Element => {


  return (
    <>
        <Label>Email</Label>
        <CredentialInput></CredentialInput>
        <Label>Password</Label>
        <CredentialInput type="password"></CredentialInput>
        <Label>Password confirmation</Label>
        <CredentialInput type="password"></CredentialInput>
    </>
  )
}
