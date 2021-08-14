import React from 'react';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { TypeButton, Wrapper } from './registration-styled-components/ChooseUserType.style';
import { ButtonGroup } from './ButtonGroup';

export const ChooseUserType = (): JSX.Element => {

  const printButtonLabel = (e: MouseEvent) => {
    console.log(e.currentTarget);
  }

  return (

    <Wrapper>
    <section>
        <h1>I'm a...</h1>
        <ButtonGroup buttons={["Food lover", "Restaurant", "Food supplier"]} doSomethingAfterClick={printButtonLabel}></ButtonGroup>
    </section>
    </Wrapper>

  )
}

export default ChooseUserType;