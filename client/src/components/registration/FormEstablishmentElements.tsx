import React from 'react';
import { EstablishmentInput, Label } from './FormRegister.style';


function FormEstablishmentElements (): JSX.Element {



  return (
    <div>
      <div>
        <Label>Establishment name</Label>
        <EstablishmentInput placeholder="Enter your business name..."></EstablishmentInput>
      </div>
      <div>
        <Label>Address</Label>
        <EstablishmentInput placeholder="Enter an address..."></EstablishmentInput>
      </div>
    </div>
  )
}

export default FormEstablishmentElements