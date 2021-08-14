import React from 'react';
import { EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';


export const FormEstablishmentElements = (): JSX.Element => {



  return (
    <div>
      <div>
        <Label>Establishment name</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
      <div>
        <Label>Address</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
    </div>
  )
}
