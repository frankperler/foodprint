import React from 'react';
import { MouseEvent } from 'react';
import { Wrapper, Header1 } from './registration-styled-components/ChooseUserType.style';
import { ButtonGroup } from './ButtonGroup';

export const ChooseUserType = () => {

  const printButtonLabel = (e) => {
    console.log(e.target.name);
  }

  return (

    <Wrapper>
    <section>
        <Header1>I'm a...</Header1>
      <ButtonGroup buttons={["Food lover", "Restaurant", "Supplier"]} doAfterClick={printButtonLabel}></ButtonGroup>
    </section>
    </Wrapper>

  )
}

export default ChooseUserType;