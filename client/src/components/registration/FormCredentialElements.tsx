import React from "react";
import { RegisterCredentialInput, Label } from "./FormRegister.style";

function FormCredentialElements (): JSX.Element {


  return (
    <div>
      <div>
        <Label>Email</Label>
        <RegisterCredentialInput placeholder="Enter your email..."></RegisterCredentialInput>
      </div>
      <div>
        <Label>Password</Label>
        <RegisterCredentialInput type="password" placeholder="Enter a password..."></RegisterCredentialInput>
      </div>
      <div>
        <Label>Password confirmation</Label>
        <RegisterCredentialInput type="password" placeholder="Confirm your password..."></RegisterCredentialInput>
     </div>
    </div>
  )
}

export default FormCredentialElements;