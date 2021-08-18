import React from 'react'
import { AddressTwoInput, Label, AddressTwoWrapper } from './FormRegister.style';



export const FormAddressTwoElements = (): JSX.Element => {


  return (
    <AddressTwoWrapper>
      <div>
        <Label>City</Label>
        <AddressTwoInput type="text" name="city"></AddressTwoInput>
      </div>
      <div>
        <Label>Zip code</Label>
        <AddressTwoInput type="text" name="zip"></AddressTwoInput>
      </div>
    </AddressTwoWrapper>
  )
}
