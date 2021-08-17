import React from 'react';
import { EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';


export const FormSupplierElements = (): JSX.Element => {



  return (
    <div>
      <div>
        <Label>Supplier name</Label>
        <EstablishmentInput type="text" name="supplierName"></EstablishmentInput>
      </div>
      <div>
        <Label>Business address</Label>
        <EstablishmentInput type="text" name="businessAddress"></EstablishmentInput>
      </div>
    </div>
  )
}
