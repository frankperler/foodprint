import React from 'react';
import { EstablishmentInput, Label } from './FormRegister.style';


function FormPhoneElement (): JSX.Element {



  return (
    <div>
      <Label>Phone</Label>
      <EstablishmentInput placeholder="Enter your phone..."></EstablishmentInput>
    </div>
  )
}


export default FormPhoneElement;