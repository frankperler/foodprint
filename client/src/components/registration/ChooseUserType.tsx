import React from 'react';
import { MouseEvent } from 'react';
import { Wrapper } from './registration-styled-components/ChooseUserType.style';
import { ButtonGroup } from './ButtonGroup';

export const ChooseUserType = (): JSX.Element => {

  const printButtonLabel = (e: MouseEvent) => {
    console.log(e.target);
  }

  return (

    <Wrapper>
    <section>
        <h1>I'm a...</h1>
      <ButtonGroup buttons={["Food lover", "Restaurant", "Supplier"]} doAfterClick={printButtonLabel}></ButtonGroup>
    </section>
    </Wrapper>

  )
}

export default ChooseUserType;