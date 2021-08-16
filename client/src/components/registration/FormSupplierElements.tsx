import React from 'react';
import { EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';


export const FormSupplierElements = (): JSX.Element => {



  return (
    <div>
      <div>
        <Label>Supplier name</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
      <div>
        <Label>Business address</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
    </div>
  )
}
