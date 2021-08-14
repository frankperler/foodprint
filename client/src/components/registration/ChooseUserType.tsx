import React from 'react';
import { TypeButton, Wrapper } from './ChooseUserType.style';


function ChooseUserType (): JSX.Element {

  return (

      <Wrapper>
    <section>
        <h1>I'm a...</h1>
        <TypeButton>Food lover</TypeButton>
        <TypeButton>Restaurant</TypeButton>
        <TypeButton>Food Supplier</TypeButton>
    </section>
      </Wrapper>

  )
}

export default ChooseUserType;