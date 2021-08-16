import React from 'react';
import { MouseEvent, useState } from 'react';
import { Wrapper, Header1 } from './registration-styled-components/ChooseUserType.style';
import { ButtonGroup } from './ButtonGroup';

type Props = {
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
  clickedId: number;
}

export const ChooseUserType = ({setUserType, clickedId, setClickedId}: Props): JSX.Element => {


  return (

    <Wrapper>
    <section>
        <Header1>I'm a...</Header1>
      <ButtonGroup buttons={["Food lover", "Restaurant", "Supplier"]} clickedId={clickedId} setUserType={setUserType} setClickedId={setClickedId}></ButtonGroup>
    </section>
    </Wrapper>

  )
}

export default ChooseUserType;