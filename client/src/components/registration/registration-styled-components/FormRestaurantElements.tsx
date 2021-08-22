import React from 'react';
import { EstablishmentInput, Label } from './FormRegister.style';


export const FormRestaurantElements = (): JSX.Element => {

  return (
    <div>
      <div>
        <Label>Restaurant name</Label>
        <EstablishmentInput type="text" name="restaurantName"></EstablishmentInput>
      </div>
      <div>
        <Label>Restaurant address</Label>
        <EstablishmentInput type="text" name="restaurantAddress"></EstablishmentInput>
      </div>
    </div>
  )
}
