import React from 'react'
import { AddressTwoInput, Label, AddressTwoWrapper } from './FormRegister.style';


function FormAddressTwoElements (): JSX.Element {


  return (
    <AddressTwoWrapper>
      <div>
        <Label>City</Label>
        <AddressTwoInput placeholder="Enter your city..."></AddressTwoInput>
      </div>
      <div>
        <Label>Zip code</Label>
        <AddressTwoInput placeholder="Enter your zip code..."></AddressTwoInput>
      </div>
    </AddressTwoWrapper>
  )
}

export default FormAddressTwoElements;