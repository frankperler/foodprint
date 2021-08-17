import React from 'react';
import { EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';


export const FormPhoneElement = (): JSX.Element => {

  return (
    <>
      <Label>Phone</Label>
      <EstablishmentInput type="text" name="phone"></EstablishmentInput>
    </>
  )
}


