import React from "react";
import { RegisterNameInput, Label } from './registration-styled-components/FormRegister.style';




export const FormNameElements = (): JSX.Element => {


  return (
    <div>
      <Label>First name</Label>
      <RegisterNameInput type="text" name="firstName"></RegisterNameInput>
      <Label>Last name</Label>
      <RegisterNameInput type="text" name="lastName"></RegisterNameInput>
    </div>
  )
}

