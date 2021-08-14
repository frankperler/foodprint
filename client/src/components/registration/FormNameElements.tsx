import React from "react";
import { RegisterNameInput, Label } from './FormRegister.style';

function FormNameElements (): JSX.Element {


  return (
    <div>
      <Label>First name</Label>
      <RegisterNameInput placeholder="Enter your first name"></RegisterNameInput>
      <Label>Last name</Label>
      <RegisterNameInput placeholder="Enter your last name"></RegisterNameInput>
    </div>
  )
}

export default FormNameElements;