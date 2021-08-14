import React from 'react'
import { AddressTwoInput, Label, AddressTwoWrapper } from './registration-styled-components/FormRegister.style';


export const FormAddressTwoElements = (): JSX.Element => {


  return (
    <AddressTwoWrapper>
      <div>
        <Label>City</Label>
        <AddressTwoInput></AddressTwoInput>
      </div>
      <div>
        <Label>Zip code</Label>
        <AddressTwoInput></AddressTwoInput>
      </div>
    </AddressTwoWrapper>
  )
}
