import React from 'react';
import { useState } from 'react';
import { MouseEvent } from 'react';
import { TypeButton, Wrapper } from './registration-styled-components/ChooseUserType.style';


export const ChooseUserType = (): JSX.Element => {

  const [type, setType] = useState('');
  const [clicked, setClicked] = useState(false)

  const handleTypeClick = (e: MouseEvent) => {
    setClicked(true);
    setType('clicked');
  }

  return (

    <Wrapper>
    <section>
        <h1>I'm a...</h1>
        <TypeButton onClick={handleTypeClick} className={ type == 'clicked' ? 'chosenOne' : 'normal'}>Food lover</TypeButton>
        <TypeButton>Restaurant</TypeButton>
        <TypeButton>Food Supplier</TypeButton>
    </section>
    </Wrapper>

  )
}

export default ChooseUserType;