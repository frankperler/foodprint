import React from 'react';
import { EstablishmentInput, Label } from './FormRegister.style';


export const FormPartnerElements = (): JSX.Element => {

  return (
    <div>
      <div>
        <Label>Partner name</Label>
        <EstablishmentInput type="text" name="partnerName"></EstablishmentInput>
      </div>
      <div>
        <Label>Partner address</Label>
        <EstablishmentInput type="text" name="partnerAddress"></EstablishmentInput>
      </div>
    </div>
  )
}
