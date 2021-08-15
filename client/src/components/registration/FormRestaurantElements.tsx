import React from 'react';
import { EstablishmentInput, Label } from './registration-styled-components/FormRegister.style';


export const FormRestaurantElements = (): JSX.Element => {

  return (
    <div>
      <div>
        <Label>Restaurant name</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
      <div>
        <Label>Resturant address</Label>
        <EstablishmentInput></EstablishmentInput>
      </div>
    </div>
  )
}
